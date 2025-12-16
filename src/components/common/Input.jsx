const Input = ({ 
  label, 
  type = 'text', 
  placeholder,
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  className = ''
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`w-full px-4 py-2.5 border rounded-lg text-gray-900 placeholder-gray-400 
          focus:outline-none focus:ring-2 focus:ring-[#0078d4] focus:border-transparent
          disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200
          ${error ? 'border-red-500' : 'border-gray-300'}`}
      />
      {error && (
        <p className="mt-1.5 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Input;
