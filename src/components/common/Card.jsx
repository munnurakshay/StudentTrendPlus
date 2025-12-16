const Card = ({ 
  children, 
  className = '',
  hover = false,
  onClick,
  padding = 'default'
}) => {
  const baseStyles = 'bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-200';
  const hoverStyles = hover ? 'hover:shadow-md hover:-translate-y-0.5 cursor-pointer' : '';
  
  const paddings = {
    none: '',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8'
  };
  
  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${paddings[padding]} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
