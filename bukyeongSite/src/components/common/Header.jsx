import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from "./ThemeContext";

const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: '홈' },
    { path: '/meal', label: '급식표' },
    { path: '/timetable', label: '시간표' },
    { path: '/about', label: '소개' },
  ];
  
  return (
    <header className="bg-gray-100 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <h1 className="text-xl font-bold text-gray-800">
                부경 학교
              </h1>
            </Link>
          </div>
          {/* 다크/라이트 모드 토글 버튼 및 네비게이션 링크 */}
          <ThemeToggle />
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors
                  ${location.pathname === item.path
                    ? 'border-blue-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;