import React from 'react';
import EmployeeCard from './EmployeeCard';

const RosterColumn = ({ 
  date, 
  setDate, 
  filter, 
  setFilter, 
  employees, 
  filterValue,
  color,
  moveEmployee
}) => {
  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-800',
      focus: 'focus:ring-blue-500'
    },
    green: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-800',
      focus: 'focus:ring-green-500'
    }
  };
  
  const { bg, border, text, focus } = colorClasses[color] || colorClasses.blue;
  
  const filteredEmployees = Object.entries(employees || {}).filter(([_, empData]) => {
    return filterValue === 'all' || empData.shift.status === filterValue;
  });

  const handleDrop = (e) => {
    e.preventDefault();
    const empKey = e.dataTransfer.getData('empKey');
    const sourceDate = e.dataTransfer.getData('sourceDate');
    if (sourceDate !== date) {
      moveEmployee(sourceDate, date, empKey);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div 
      className={`flex-1 ${bg} rounded-lg p-4 border-2 ${border}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-xl font-semibold ${text}`}>📅 {date ? 'Selected Date' : 'Date'}</h3>
        <div className="flex gap-3">
          <input 
            type="date" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={`p-2 border border-gray-300 rounded-lg focus:ring-2 ${focus} text-sm`}
          />
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className={`p-2 border border-gray-300 rounded-lg focus:ring-2 ${focus} text-sm`}
          >
            <option value="all">All Shifts</option>
            <option value="Morning Shift">Morning</option>
            <option value="Evening Shift">Evening</option>
            <option value="Night Shift">Night</option>
            <option value="Regular">Regular</option>
            <option value="Part-time">Part-time</option>
            <option value="Weekend">Weekend</option>
          </select>
        </div>
      </div>
      
      <div className="bg-white rounded-lg p-3 shadow-inner" style={{ height: 'calc(80vh - 140px)', overflowY: 'auto' }}>
        <h4 className="font-medium text-gray-700 mb-3 sticky top-0 bg-white pb-2 border-b">👥 Employees on Duty</h4>
        <div className="space-y-2 min-h-full transition-colors duration-200">
          {filteredEmployees.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              {date ? "No employees match the filter" : "Please select a date"}
            </p>
          ) : (
            filteredEmployees.map(([empKey, empData]) => (
              <EmployeeCard 
                key={`${empKey}-${empData.shift.shiftId}`} 
                empKey={empKey} 
                empData={empData} 
                date={date}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RosterColumn;