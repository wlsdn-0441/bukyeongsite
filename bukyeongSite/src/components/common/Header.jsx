import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from "./ThemeContext";
import './Header.css';

const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: '홈' },
    { path: '/meal', label: '급식표' },
    { path: '/timetable', label: '시간표' },
    { path: '/about', label: '소개' },
  ];
  
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="nav-wrapper">
          <div className="logo-container">
            <Link to="/" className="logo-link">
              <h1 className="logo-title">
                부경 학교
              </h1>
            </Link>
          </div>
          
          <div className="nav-right">
            <div className="nav-links">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;