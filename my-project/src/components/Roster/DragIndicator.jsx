import React from 'react';

const DragIndicator = () => {
  return (
    <div className="flex flex-col items-center justify-center px-2">
      <div className="text-gray-400 text-2xl mb-2">⟷</div>
      <div className="text-xs text-gray-500 text-center leading-tight">
        Drag<br />employees<br />between<br />dates
      </div>
      <div className="text-gray-400 text-2xl mt-2">⟷</div>
    </div>
  );
};

export default DragIndicator;