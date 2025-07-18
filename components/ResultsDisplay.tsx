import React from 'react';
import { UsbDevice } from '../types';
import DeviceCard from './DeviceCard';
import { InfoIcon } from './Icons';

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
      return (
        <div className="flex flex-col items-center justify-center h-full text-center text-red-600">
            <InfoIcon className="w-12 h-12 mb-4"/>
            <h3 className="text-lg font-semibold">Parsing Error</h3>
            <p>{error}</p>
        </div>
      );
    }

    if (devices.length > 0) {
        return (
            <div className="space-y-4">
              {devices.map((device) => (
                <DeviceCard key={device.id} device={device} />
              ))}
            </div>
        );
    }

    if (hasAttemptedParse) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
                <InfoIcon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">No Relevant Devices Found</h3>
                <p className="max-w-md mt-1">The log was parsed successfully, but it does not contain any Hub or HID devices.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
            <p className="font-semibold">Load or paste a log and click "Parse Log".</p>
            <p className="mt-1 text-sm">The results will be displayed here.</p>
        </div>
    );
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">Parsed Devices</h2>
      <div className="bg-gray-50 rounded-md p-4 min-h-[500px] overflow-y-auto max-h-[60vh] flex flex-col justify-center">
        {renderContent()}
      </div>
    </div>
  );
};

export default ResultsDisplay;
