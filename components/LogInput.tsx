import React from 'react';

interface LogInputProps {
  logText: string;
  onLogChange: (text: string) => void;
  onParse: () => void;
  onClear: () => void;
  onLoadLog: () => void;
  isLoading: boolean;
}

const LogInput: React.FC<LogInputProps> = ({ logText, onLogChange, onParse, onClear, onLoadLog, isLoading }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">Log Input</h2>
      <textarea
        className="w-full flex-grow bg-gray-50 border border-gray-300 rounded-md p-4 text-gray-800 font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
        placeholder="Paste your USBView log here or load it from a file..."
        value={logText}
        onChange={(e) => onLogChange(e.target.value)}
        rows={20}
      />
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <button
          onClick={onLoadLog}
          className="sm:col-span-1 bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
        >
          Load from File
        </button>
        <button
          onClick={onParse}
          disabled={!logText || isLoading}
          className="sm:col-span-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Parsing...' : 'Parse Log'}
        </button>
        <button
          onClick={onClear}
          className="sm:col-span-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md transition-colors duration-300"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default LogInput;
