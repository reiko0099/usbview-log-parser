import React from 'react';
import { UsbDevice } from '../types';
import DeviceCard from './DeviceCard';

interface ResultsDisplayProps {
  devices: UsbDevice[];
  isLoading: boolean;
  error: string | null;
  hasAttemptedParse: boolean;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ devices, isLoading, error, hasAttemptedParse }) => {
  
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      );
    }

    if (error) {
      return <p className="text-red-600 text-center">{error}</p>;
    }

    if (!hasAttemptedParse) {
        return <p className="text-gray-600 text-center">Results will be displayed here.</p>;
    }

    if (devices.length === 0) {
      return <p className="text-gray-600 text-center">No Hub or HID devices found in the log.</p>;
    }

    return (
      <div className="space-y-4">
        {devices.map((device) => (
          <DeviceCard key={device.id} device={device} />
        ))}
      </div>
    );
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">Parsed Devices</h2>
      <div className="bg-gray-50 rounded-md p-4 min-h-[500px] overflow-y-auto max-h-[60vh]">
        {renderContent()}
      </div>
    </div>
  );
};

export default ResultsDisplay;