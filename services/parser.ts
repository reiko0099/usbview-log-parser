
import { UsbDevice, DeviceType } from '../types';

const extractValue = (line: string, full: boolean = false): string | null => {
    const parts = line.split(':');
    if (parts.length > 1) {
        const valuePart = parts.slice(1).join(':').trim();
        if (full) {
            return valuePart;
        }
        return valuePart.split('=')[0].trim();
    }
    return null;
}

export const parseUsbLog = (logText: string): UsbDevice[] => {
    const finalDevices: UsbDevice[] = [];
    const lines = logText.split('\n');
    
    // 用於追蹤父集線器的堆疊，以建構拓撲
    const topologyStack: { level: number; name: string }[] = [];
    let currentBlock: string[] = [];

    const processBlock = (block: string[]) => {
        if (block.length === 0) return;
        
        const portLine = block[0];
        const portMatch = portLine.match(/\[(Port\s*\d+(?:-\d+)*)\]/);
        if (!portMatch) return; // 不是設備區塊

        const port = portMatch[1];
        const level = portLine.match(/^\s*/)?.[0].length ?? 0;
        const blockContent = block.join('\n');
        
        let name: string | null = null;
        const firstLineNameMatch = portLine.match(/:\s*(.*)/);
        if(firstLineNameMatch) name = firstLineNameMatch[1].trim();

        const englishNameLine = block.find(line => line.trim().startsWith('English product name:'));
        if (englishNameLine) {
            const extractedName = extractValue(englishNameLine)?.replace(/"/g, '');
            if (extractedName) name = extractedName;
        }

        if (!name || name.trim() === '') name = 'Unknown Device';

        let isHid = false;
        let isHub = false;
        if (name.toLowerCase().includes('hub') || name.toLowerCase().includes('集线器') || blockContent.includes('bDeviceClass:                      0x09')) {
            isHub = true;
        }
        if (blockContent.includes('bInterfaceClass:                   0x03') || blockContent.includes('HID Interface Class')) {
            isHid = true;
        }

        const type = isHub ? DeviceType.Hub : (isHid ? DeviceType.HID : DeviceType.Unknown);
        
        if (type === DeviceType.Unknown) return;

        let vid: string | null = null;
        let pid: string | null = null;
        let driver: string | null = null;
        let power: string | null = null;
        
        block.forEach(line => {
            const trimmedLine = line.trim();
            if (trimmedLine.startsWith('idVendor')) vid = extractValue(line, true);
            else if (trimmedLine.startsWith('idProduct')) pid = extractValue(line);
            else if (trimmedLine.startsWith('DriverKey')) driver = extractValue(line);
            else if (trimmedLine.startsWith('MaxPower')) power = extractValue(line);
        });

        // 管理拓撲堆疊
        while (topologyStack.length > 0 && level <= topologyStack[topologyStack.length - 1].level) {
            topologyStack.pop();
        }

        const topology = [...topologyStack.map(p => p.name), name].join(' > ');
        
        finalDevices.push({
            id: `${port}-${vid}-${pid}-${Math.random()}`,
            port,
            type,
            name,
            vid,
            pid,
            driver,
            power,
            topology,
        });

        if (type === DeviceType.Hub) {
            topologyStack.push({ level, name });
        }
    };

    let rootHubIndentation = -1;
    for (const line of lines) {
        if (line.includes('Root Hub:')) {
            if(currentBlock.length > 0) processBlock(currentBlock);
            currentBlock = []; // 忽略第一個 Root Hub 之前的任何內容
            rootHubIndentation = line.match(/^\s*/)?.[0].length ?? 0;
            topologyStack.splice(0, topologyStack.length);
            topologyStack.push({ level: rootHubIndentation -1, name: 'Root Hub' });
        }
        else if (line.match(/^\s*\[Port\s*\d/)) {
            processBlock(currentBlock);
            currentBlock = [line];
        } else {
            if (currentBlock.length > 0) {
                currentBlock.push(line);
            }
        }
    }
    processBlock(currentBlock); // 處理最後一個區塊

    return finalDevices;
};
