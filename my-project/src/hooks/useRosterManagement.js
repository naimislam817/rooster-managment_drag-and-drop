import { useState, useEffect } from 'react';
import { employees } from '../data/employees';
import { getToday, getTomorrow, getDayOfWeek } from '../utils/dateUtils';

const useRosterManagement = () => {
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');
  const [filter1, setFilter1] = useState('all');
  const [filter2, setFilter2] = useState('all');
  const [dailyRosters, setDailyRosters] = useState({});
  const [notification, setNotification] = useState(null);
  
  useEffect(() => {
    const today = getToday();
    const tomorrow = getTomorrow();
    
    setDate1(today);
    setDate2(tomorrow);
    
    setDailyRosters({
      [today]: initializeRosterForDate(today),
      [tomorrow]: initializeRosterForDate(tomorrow)
    });
  }, []);

  const initializeRosterForDate = (date) => {
    if (!date) return {};
    
    const dayOfWeek = getDayOfWeek(date);
    const roster = {};
    
    Object.entries(employees).forEach(([empKey, employee]) => {
      const daySchedule = employee.schedule.find(s => s.day === dayOfWeek);
      if (daySchedule && daySchedule.status !== 'Off') {
        roster[empKey] = {
          ...employee,
          shift: daySchedule
        };
      }
    });
    
    return roster;
  };

  const moveEmployee = (sourceDate, targetDate, empKey) => {
    setDailyRosters(prev => {
      const updated = { ...prev };
      const empData = updated[sourceDate]?.[empKey];
      if (!empData) return prev;
      
      // Remove from source
      const newSource = { ...updated[sourceDate] };
      delete newSource[empKey];
      
      // Add to target
      const newTarget = updated[targetDate] ? { ...updated[targetDate] } : {};
      
      // Update shift for new day
      const newDayOfWeek = getDayOfWeek(targetDate);
      const originalEmployee = employees[empKey];
      const newDaySchedule = originalEmployee.schedule.find(s => s.day === newDayOfWeek);
      
      if (newDaySchedule && newDaySchedule.status !== 'Off') {
        newTarget[empKey] = {
          ...originalEmployee,
          shift: newDaySchedule
        };
      } else {
        newTarget[empKey] = empData;
      }
      
      // Show notification
      setNotification({
        message: `${empData.name} moved to new date`,
        type: 'success'
      });
      
      return {
        ...updated,
        [sourceDate]: newSource,
        [targetDate]: newTarget
      };
    });
  };

  return {
    dailyRosters,
    employees,
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
  };
};

export default useRosterManagement;