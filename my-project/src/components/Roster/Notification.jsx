import React, { useEffect } from 'react';

const Notification = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-blue-500';
  
  return (
    <div 
      className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 text-white ${bgColor} transition-all duration-300`}
      style={{ transform: 'translateX(0)' }}
    >
      {type === 'success' ? '✅ ' : 'ℹ️ '}
      {message}
    </div>
  );
};

export default Notification;