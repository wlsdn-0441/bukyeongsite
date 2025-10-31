// src/Pages/Timetable.jsx
import { useNavigate } from 'react-router-dom';
import Card from '../components/common/Card';

const Timetable = () => {
  const navigate = useNavigate();
  
  const weekSchedule = {
    monday: [
      { time: '09:00 - 10:00', subject: '수학', teacher: '김선생님', room: '201' },
      { time: '10:00 - 11:00', subject: '영어', teacher: '이선생님', room: '202' },
      { time: '11:00 - 12:00', subject: '과학', teacher: '박선생님', room: '실험실' },
      { time: '13:00 - 14:00', subject: '체육', teacher: '최선생님', room: '운동장' },
    ],
    tuesday: [
      { time: '09:00 - 10:00', subject: '국어', teacher: '정선생님', room: '201' },
      { time: '10:00 - 11:00', subject: '수학', teacher: '김선생님', room: '201' },
      { time: '11:00 - 12:00', subject: '음악', teacher: '송선생님', room: '음악실' },
      { time: '13:00 - 14:00', subject: '미술', teacher: '강선생님', room: '미술실' },
    ],
    // ... 나머지 요일
  };
  
  const days = [
    { key: 'monday', label: '월요일' },
    { key: 'tuesday', label: '화요일' },
    { key: 'wednesday', label: '수요일' },
    { key: 'thursday', label: '목요일' },
    { key: 'friday', label: '금요일' },
  ];
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button 
        onClick={() => navigate('/')}
        className="mb-6 flex items-center text-blue-600 hover:underline"
      >
        ← 홈으로 돌아가기
      </button>
      
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        이번 주 시간표
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {days.map((day) => (
          <Card key={day.key} title={day.label}>
            <div className="space-y-3">
              {weekSchedule[day.key]?.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 text-lg">
                      {item.subject}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.time}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-600 bg-blue-100 px-3 py-1 rounded-full">
                      {item.teacher}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">
                      {item.room}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Timetable;