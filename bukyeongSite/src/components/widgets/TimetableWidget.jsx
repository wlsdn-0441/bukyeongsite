// src/components/widgets/Timetable.jsx
import { memo } from 'react';

const TimetableWidget = memo(() => {
  const todaySchedule = [
    { time: '09:00', subject: '수학' },
    { time: '10:00', subject: '영어' },
    { time: '11:00', subject: '과학' },
  ];
  
  return (
    <div className="space-y-2">
      {todaySchedule.map((item, index) => (
        <div 
          key={index}
          className="flex items-center justify-between p-2 bg-gray-50 rounded"
        >
          <span className="font-semibold text-gray-800">
            {item.subject}
          </span>
          <span className="text-sm text-gray-500">
            {item.time}
          </span>
        </div>
      ))}
    </div>
  );
});

TimetableWidget.displayName = 'TimetableWidget';

export default TimetableWidget;  // ← 이것도 확인