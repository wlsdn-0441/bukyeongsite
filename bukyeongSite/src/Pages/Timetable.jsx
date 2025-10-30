import Card from '../components/common/Card';

function Timetable() {
  const WEEKDAYS = ['월', '화', '수', '목', '금'];
  
  const timetable = [
    ['국어', '수학', '영어', '과학', '체육', '음악', '미술'],
    ['영어', '국어', '수학', '사회', '과학', '체육', '자습'],
    ['수학', '영어', '국어', '체육', '음악', '과학', '사회'],
    ['과학', '사회', '영어', '국어', '수학', '미술', '자습'],
    ['체육', '음악', '수학', '영어', '국어', '과학', '사회']
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">📖 시간표</h1>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {WEEKDAYS.map((day, dayIdx) => (
          <Card key={day}>
            <h3 className="text-lg font-bold mb-4 text-center text-indigo-600">
              {day}요일
            </h3>
            <div className="space-y-2">
              {timetable[dayIdx].map((subject, idx) => (
                <div key={idx} className="p-2 bg-gray-50 rounded text-center text-sm">
                  <div className="font-semibold">{idx + 1}교시</div>
                  <div className="text-gray-600">{subject}</div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Timetable;