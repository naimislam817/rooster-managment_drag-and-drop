export const employees = {
  '001': {
    name: 'John Smith',
    id: 'EMP-001',
    position: 'Senior Developer',
    department: 'Engineering',
    initials: 'JS',
    schedule: [
      { day: 'Monday', start: '9:00 AM', end: '5:00 PM', hours: 8, status: 'Regular', shiftId: 'mon-1' },
      { day: 'Tuesday', start: '9:00 AM', end: '5:00 PM', hours: 8, status: 'Regular', shiftId: 'tue-1' },
      { day: 'Wednesday', start: '9:00 AM', end: '5:00 PM', hours: 8, status: 'Regular', shiftId: 'wed-1' },
      { day: 'Thursday', start: '9:00 AM', end: '5:00 PM', hours: 8, status: 'Regular', shiftId: 'thu-1' },
      { day: 'Friday', start: '9:00 AM', end: '3:00 PM', hours: 6, status: 'Regular', shiftId: 'fri-1' }
    ]
  },
  '002': {
    name: 'Sarah Johnson',
    id: 'EMP-002',
    position: 'UX Designer',
    department: 'Design',
    initials: 'SJ',
    schedule: [
      { day: 'Monday', start: '8:00 AM', end: '4:00 PM', hours: 8, status: 'Regular', shiftId: 'mon-2' },
      { day: 'Tuesday', start: '8:00 AM', end: '4:00 PM', hours: 8, status: 'Regular', shiftId: 'tue-2' },
      { day: 'Wednesday', start: '8:00 AM', end: '4:00 PM', hours: 8, status: 'Regular', shiftId: 'wed-2' },
      { day: 'Thursday', start: '8:00 AM', end: '4:00 PM', hours: 8, status: 'Regular', shiftId: 'thu-2' },
      { day: 'Friday', start: '8:00 AM', end: '4:00 PM', hours: 8, status: 'Regular', shiftId: 'fri-2' },
      { day: 'Saturday', start: '10:00 AM', end: '2:00 PM', hours: 4, status: 'Part-time', shiftId: 'sat-2' }
    ]
  },
  // More employees with similar enhanced structure...
  '008': {
    name: 'Maria Rodriguez',
    id: 'EMP-008',
    position: 'Product Manager',
    department: 'Management',
    initials: 'MR',
    schedule: [
      { day: 'Monday', start: '7:00 AM', end: '3:00 PM', hours: 8, status: 'Morning Shift', shiftId: 'mon-8' },
      { day: 'Tuesday', start: '7:00 AM', end: '3:00 PM', hours: 8, status: 'Morning Shift', shiftId: 'tue-8' },
      { day: 'Wednesday', start: '7:00 AM', end: '3:00 PM', hours: 8, status: 'Morning Shift', shiftId: 'wed-8' },
      { day: 'Friday', start: '7:00 AM', end: '3:00 PM', hours: 8, status: 'Morning Shift', shiftId: 'fri-8' },
      { day: 'Saturday', start: '9:00 AM', end: '5:00 PM', hours: 8, status: 'Weekend', shiftId: 'sat-8' },
      { day: 'Sunday', start: '9:00 AM', end: '5:00 PM', hours: 8, status: 'Weekend', shiftId: 'sun-8' }
    ]
  }
};