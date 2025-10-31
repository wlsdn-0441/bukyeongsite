// src/components/widgets/MealWidget.jsx
import { memo } from 'react';

const MealWidget = memo(() => {
  const todayMeal = {
    breakfast: ['흰쌀밥', '미역국', '김치'],
    lunch: ['카레라이스', '샐러드', '우유'],
  };
  
  return (
    <div className="space-y-4">
      <div className="border-l-4 border-orange-500 pl-4">
        <h3 className="font-semibold text-gray-700 mb-2">아침</h3>
        <ul className="space-y-1">
          {todayMeal.breakfast.map((item, idx) => (
            <li key={idx} className="text-gray-600 text-sm">
              • {item}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="border-l-4 border-blue-500 pl-4">
        <h3 className="font-semibold text-gray-700 mb-2">점심</h3>
        <ul className="space-y-1">
          {todayMeal.lunch.map((item, idx) => (
            <li key={idx} className="text-gray-600 text-sm">
              • {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

MealWidget.displayName = 'MealWidget';

export default MealWidget;  // ← 이것도 확인