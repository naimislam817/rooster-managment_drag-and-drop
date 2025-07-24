import React from 'react';

const Instructions = () => {
  return (
    <div className="max-w-4xl mx-auto mt-6 bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">📋 How to Use:</h3>
      <ul className="text-gray-600 space-y-1">
        <li>• Select dates for both sides to see scheduled employees</li>
        <li>• Use filters to show specific shift types</li>
        <li>• Drag employee cards between dates to reschedule them</li>
        <li>• Employee colors match their shift types (Morning=Blue, Evening=Orange, Night=Purple)</li>
      </ul>
    </div>
  );
};

export default Instructions;