import React from 'react';
import { UsbDevice, DeviceType } from '../types';
import { HubIcon, HidDeviceIcon } from './Icons';

interface DeviceCardProps {
  device: UsbDevice;
}

const DeviceInfoRow: React.FC<{ label: string; value: string | null | undefined }> = ({ label, value }) => {
    if (!value) return null;
    return (
        <p className="text-sm text-gray-600 break-words">
            <span className="font-semibold text-gray-800">{label}:</span> {value}
        </p>
    );
}

const DeviceCard: React.FC<DeviceCardProps> = ({ device }) => {
  const isHub = device.type === DeviceType.Hub;
  const iconColor = isHub ? 'text-blue-400' : 'text-teal-400';
  const borderColor = isHub ? 'border-blue-500' : 'border-teal-500';

  return (
    <div className={`bg-white p-4 rounded-lg border-l-4 ${borderColor} shadow-md transition-transform hover:scale-[1.02]`}>
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 w-8 h-8 ${iconColor}`}>
          {isHub ? <HubIcon /> : <HidDeviceIcon />}
        </div>
        <div className="flex-grow">
          <h3 className="font-bold text-lg text-gray-900">{device.name}</h3>
          <span className={`inline-block px-2 py-0.5 text-xs font-semibold rounded-full ${isHub ? 'bg-blue-100 text-blue-800' : 'bg-teal-100 text-teal-800'}`}>
            {device.type} on Port {device.port}
          </span>
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
            <DeviceInfoRow label="VID" value={device.vid} />
            <DeviceInfoRow label="PID" value={device.pid} />
            <DeviceInfoRow label="Power" value={device.power} />
            <DeviceInfoRow label="Driver" value={device.driver} />
          </div>
          {device.topology && (
            <div className="mt-2 border-t border-gray-200 pt-2">
                <DeviceInfoRow label="Topology" value={device.topology} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeviceCard;