import React, { useState, useCallback } from 'react';
import { UsbDevice } from './types';
import { SAMPLE_LOG } from './constants';
import { parseUsbLog } from './services/parser';
import LogInput from './components/LogInput';
import ResultsDisplay from './components/ResultsDisplay';
import { UsbIcon } from './components/Icons';

const App: React.FC = () => {
  const [logText, setLogText] = useState<string>('');
  const [devices, setDevices] = useState<UsbDevice[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleParse = useCallback(() => {
    setIsLoading(true);
    setError(null);
    setDevices([]);

    setTimeout(() => {
        try {
            const parsedDevices = parseUsbLog(logText);
            setDevices(parsedDevices);
        } catch (e) {
            setError('Failed to parse log. Please check the format.');
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    }, 500); // Simulate processing time
  }, [logText]);

  const handleClear = useCallback(() => {
    setLogText('');
    setDevices([]);
    setError(null);
  }, []);
  
  const handleLoadSample = useCallback(() => {
    setLogText(SAMPLE_LOG);
    setError(null);
  }, []);


  return (
    <div className="min-h-screen font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <div className="flex justify-center items-center gap-4">
            <UsbIcon className="w-12 h-12 text-teal-500" />
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              USBView Log Parser
            </h1>
          </div>
          <p className="mt-4 text-lg text-gray-600">
            Paste your log file to display Hub and HID device information.
          </p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <LogInput
            logText={logText}
            onLogChange={setLogText}
            onParse={handleParse}
            onClear={handleClear}
            onLoadSample={handleLoadSample}
            isLoading={isLoading}
          />
          <ResultsDisplay 
            devices={devices} 
            isLoading={isLoading} 
            error={error} 
            hasAttemptedParse={devices.length > 0 || error !== null || isLoading}
          />
        </main>
        
        <footer className="text-center mt-12 text-gray-500 text-sm">
            <p>Designed for parsing logs from the USBView utility.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;