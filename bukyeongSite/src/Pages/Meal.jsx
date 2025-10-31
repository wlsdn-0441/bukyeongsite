// src/Pages/Meal.jsx
import { useNavigate } from 'react-router-dom';
import Card from '../components/common/Card';

const Meal = () => {
  const navigate = useNavigate();
  
  const weekMeals = [
    {
      day: '월요일',
      date: '2025-10-27',
      breakfast: ['흰쌀밥', '미역국', '김치', '계란후라이'],
      lunch: ['카레라이스', '단무지', '과일', '우유'],
      dinner: ['비빔밥', '된장국', '김', '샐러드'],
    },
    {
      day: '화요일',
      date: '2025-10-28',
      breakfast: ['잡곡밥', '북어국', '김치', '햄'],
      lunch: ['돈까스', '스파게티', '샐러드', '우유'],
      dinner: ['김치찌개', '흰쌀밥', '김', '나물'],
    },
    // ... 나머지 요일
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
        이번 주 급식표
      </h1>
      
      <div className="grid grid-cols-1 gap-6">
        {weekMeals.map((meal, index) => (
          <Card 
            key={index}
            title={`${meal.day} (${meal.date})`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-3 text-lg">
                  🌅 아침
                </h3>
                <ul className="space-y-2">
                  {meal.breakfast.map((item, idx) => (
                    <li key={idx} className="text-gray-600">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700 mb-3 text-lg">
                  ☀️ 점심
                </h3>
                <ul className="space-y-2">
                  {meal.lunch.map((item, idx) => (
                    <li key={idx} className="text-gray-600">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700 mb-3 text-lg">
                  🌙 저녁
                </h3>
                <ul className="space-y-2">
                  {meal.dinner.map((item, idx) => (
                    <li key={idx} className="text-gray-600">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Meal;