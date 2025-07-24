import { getDayOfWeek } from './dateUtils';

/**
 * Filters employees based on the selected filter value
 * @param {Object} employees - The employees object to filter
 * @param {string} filterValue - The filter value ('all', 'Morning Shift', etc.)
 * @param {Object} allEmployees - The complete employees dataset
 * @returns {Array} Filtered array of employee entries
 */
export const getFilteredEmployees = (employees, filterValue, allEmployees) => {
  if (!employees) return [];
  
  const filtered = Object.entries(employees).filter(([empKey, empData]) => {
    return filterValue === 'all' || empData.shift.status === filterValue;
  });
  
  return filtered;
};

/**
 * Initializes a roster for a specific date by auto-assigning employees based on their schedule
 * @param {string} date - The date string in YYYY-MM-DD format
 * @param {Object} employees - The complete employees dataset
 * @returns {Object} The initialized roster object
 */
export const initializeRosterForDate = (date, employees) => {
  if (!date) return {};
  
  const dayOfWeek = getDayOfWeek(date);
  const roster = {};
  
  // Auto-assign employees based on their regular schedule
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

/**
 * Handles moving an employee from one date to another
 * @param {Object} dailyRosters - Current roster state
 * @param {string} sourceDate - Original date of the employee
 * @param {string} targetDate - New date for the employee
 * @param {string} empKey - Employee ID
 * @param {Object} employees - Complete employees dataset
 * @returns {Object} Updated roster state
 */
export const moveEmployeeInRoster = (dailyRosters, sourceDate, targetDate, empKey, employees) => {
  if (!sourceDate || !targetDate || sourceDate === targetDate) return dailyRosters;
  
  const updated = { ...dailyRosters };
  
  // Remove from sourceDate
  const empData = updated[sourceDate]?.[empKey];
  if (!empData) return dailyRosters;
  
  const newSourceRoster = { ...updated[sourceDate] };
  delete newSourceRoster[empKey];
  
  // Add to targetDate
  const newTargetRoster = updated[targetDate] ? { ...updated[targetDate] } : {};
  
  // Update the employee's shift for the new day
  const newDayOfWeek = getDayOfWeek(targetDate);
  const originalEmployee = employees[empKey];
  const newDaySchedule = originalEmployee.schedule.find(s => s.day === newDayOfWeek);
  
  if (newDaySchedule && newDaySchedule.status !== 'Off') {
    newTargetRoster[empKey] = {
      ...originalEmployee,
      shift: newDaySchedule
    };
  } else {
    // Keep the old shift
    newTargetRoster[empKey] = empData;
  }
  
  return {
    ...updated,
    [sourceDate]: newSourceRoster,
    [targetDate]: newTargetRoster
  };
};
