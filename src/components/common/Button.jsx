const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  disabled = false,
  onClick,
  type = 'button',
  className = ''
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-[#0078d4] text-white hover:bg-[#106ebe] focus:ring-[#0078d4] shadow-sm hover:shadow-md disabled:bg-gray-300 disabled:cursor-not-allowed',
    secondary: 'bg-white text-[#0078d4] border border-[#0078d4] hover:bg-[#f3f2f1] focus:ring-[#0078d4] disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed',
    accent: 'bg-[#8000ff] text-white hover:bg-[#6600cc] focus:ring-[#8000ff] shadow-sm hover:shadow-md disabled:bg-gray-300 disabled:cursor-not-allowed',
    ghost: 'bg-transparent text-[#323130] hover:bg-[#f3f2f1] focus:ring-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
