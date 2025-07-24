export const getStatusColor = (status) => {
  switch(status) {
    case 'Regular': return 'bg-green-100 text-green-800';
    case 'Off': return 'bg-gray-100 text-gray-800';
    case 'Part-time': return 'bg-blue-100 text-blue-800';
    case 'Evening Shift': return 'bg-orange-100 text-orange-800';
    case 'Morning Shift': return 'bg-blue-100 text-blue-800';
    case 'Night Shift': return 'bg-purple-100 text-purple-800';
    case 'Weekend': return 'bg-yellow-100 text-yellow-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export const getAvatarColor = (status) => {
  switch(status) {
    case 'Regular': return 'bg-green-600';
    case 'Off': return 'bg-gray-500';
    case 'Part-time': return 'bg-blue-600';
    case 'Evening Shift': return 'bg-orange-600';
    case 'Morning Shift': return 'bg-blue-600';
    case 'Night Shift': return 'bg-purple-600';
    case 'Weekend': return 'bg-yellow-600';
    default: return 'bg-gray-500';
  }
};