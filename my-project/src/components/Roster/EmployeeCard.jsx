import React from 'react';
import { getStatusColor, getAvatarColor } from '../../utils/colorUtils';

const EmployeeCard = ({ empKey, empData, date }) => {
  const statusColor = getStatusColor(empData.shift.status);
  const avatarColor = getAvatarColor(empData.shift.status);
  
  const handleDragStart = (e) => {
    e.dataTransfer.setData('empKey', empKey);
    e.dataTransfer.setData('sourceDate', date);
    e.currentTarget.classList.add('opacity-50', 'rotate-5');
  };

  const handleDragEnd = (e) => {
    e.currentTarget.classList.remove('opacity-50', 'rotate-5');
  };

  return (
    <div 
      className="bg-white p-3 rounded-lg shadow border cursor-move hover:shadow-md transition-all duration-200 transform hover:scale-105"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className={`w-10 h-10 ${avatarColor} rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 shadow-sm`}>
            {empData.initials}
          </div>
          <div>
            <div className="font-medium text-gray-800">{empData.name}</div>
            <div className="text-sm text-gray-600">{empData.id}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-gray-700">{empData.shift.start} - {empData.shift.end}</div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor}`}>
            {empData.shift.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;