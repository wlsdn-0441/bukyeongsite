// src/components/common/Card.jsx
import { memo } from 'react';

const Card = memo(({ 
  title, 
  children, 
  className = '',
  footer,
  onClick,
  isClickable = false 
}) => {
  return (
    <article 
      className={`
        bg-white rounded-lg shadow-md hover:shadow-lg 
        transition-all duration-300
        ${isClickable ? 'cursor-pointer hover:scale-105' : ''}
        ${className}
      `}
      onClick={onClick}
      role={isClickable ? 'button' : 'article'}
      tabIndex={isClickable ? 0 : -1}
      onKeyDown={isClickable ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      } : undefined}
    >
      {title && (
        <header className="border-b border-gray-200 px-6 py-4">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        </header>
      )}
      
      <section className="p-6">
        {children}
      </section>
      
      {footer && (
        <footer className="border-t border-gray-200 px-6 py-4 bg-gray-50">
          {footer}
        </footer>
      )}
    </article>
  );
});

Card.displayName = 'Card';

export default Card;  // ← 이것도 확인