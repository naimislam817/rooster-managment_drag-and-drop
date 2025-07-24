import React from 'react';
import RosterColumn from './RosterColumn';
import DragIndicator from './DragIndicator';
import  useRosterManagement  from '../../hooks/useRosterManagement';
import Notification from './Notification';

const RosterContainer = () => {
  const {
    dailyRosters,
    date1,
    date2,
    filter1,
    filter2,
    notification,
    setDate1,
    setDate2,
    setFilter1,
    setFilter2,
    moveEmployee,
    setNotification
  } = useRosterManagement();

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-4" style={{ minHeight: '80vh' }}>
      <div className="flex h-full gap-4">
        <RosterColumn 
          date={date1}
          setDate={setDate1}
          filter={filter1}
          setFilter={setFilter1}
          employees={dailyRosters[date1] || {}}
          filterValue={filter1}
          color="blue"
          moveEmployee={moveEmployee}
        />
        
        <DragIndicator />
        
        <RosterColumn 
          date={date2}
          setDate={setDate2}
          filter={filter2}
          setFilter={setFilter2}
          employees={dailyRosters[date2] || {}}
          filterValue={filter2}
          color="green"
          moveEmployee={moveEmployee}
        />
      </div>
      
      {notification && (
        <Notification 
          message={notification.message} 
          type={notification.type} 
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
};

export default RosterContainer;