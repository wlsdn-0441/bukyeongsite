import { useState } from 'react';
import Card from '../components/common/Card';

function Meal() {
  const [selectedDate, setSelectedDate] = useState('today');

  const mealData = {
    today: {
      breakfast: ['김치찌개', '계란후라이', '김', '밥'],
      lunch: ['돈까스', '샐러드', '미역국', '밥', '요구르트'],
      dinner: ['제육볶음', '된장찌개', '김치', '밥']
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">🍚 급식표</h1>

      <div className="flex gap-2 mb-6">
        <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg">오늘</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg">내일</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg">이번주</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(mealData.today).map(([mealType, items]) => (
          <Card key={mealType}>
            <h3 className="text-lg font-bold mb-4 capitalize">
              {mealType === 'breakfast' ? '조식' : mealType === 'lunch' ? '중식' : '석식'}
            </h3>
            <ul className="space-y-2">
              {items.map((item, idx) => (
                <li key={idx} className="text-gray-700 flex items-center">
                  <span className="mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Meal;