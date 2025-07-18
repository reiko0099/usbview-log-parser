
export enum DeviceType {
  Hub = 'Hub',
  HID = 'HID',
  Unknown = 'Unknown',
}

export interface UsbDevice {
  id: string;
  type: DeviceType;
  name: string;
  vid: string | null;
  pid: string | null;
  port: string;
  driver: string | null;
  power: string | null;
  topology: string;
}
