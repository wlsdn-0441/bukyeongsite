// src/Pages/Home.jsx
import { useNavigate } from 'react-router-dom';
import Card from '../components/common/Card';
import MealWidget from '../components/widgets/MealWidget';
import TimetableWidget from '../components/widgets/TimetableWidget';

const Home = () => {
  const navigate = useNavigate();
  
  const dashboardCards = [
    {
      id: 1,
      title: '오늘의 급식',
      component: <MealWidget />,
      route: '/meal',
      isClickable: true,
    },
    
    {
      id: 2,
      title: '시간표',
      component: <TimetableWidget />,
      route: '/timetable',
      isClickable: true,
    },
    {
      id: 3,
      title: '날씨',
      component: (
        <div className="text-center">
          <p className="text-4xl mb-2">☀️</p>
          <p className="text-2xl font-bold text-gray-800">23°C</p>
          <p className="text-gray-600">맑음</p>
        </div>
      ),
      isClickable: false,
    },
    {
      id: 4,
      title: '공지사항',
      component: (
        <div className="space-y-2">
          <p className="text-gray-700">📢 내일은 체육대회가 있습니다.</p>
          <p className="text-gray-700">📌 급식 시간이 30분 앞당겨집니다.</p>
        </div>
      ),
      isClickable: false,
    },
  ];
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          학교 대시보드
        </h1>
        <p className="mt-2 text-gray-600">
          오늘의 학교 정보를 한눈에 확인하세요
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardCards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            isClickable={card.isClickable}
            onClick={card.isClickable ? () => navigate(card.route) : undefined}
            className={card.isClickable ? 'md:col-span-1' : ''}
          >
            {card.component}
            
            {card.isClickable && (
              <div className="mt-4 text-blue-600 font-medium">
                자세히 보기 →
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;