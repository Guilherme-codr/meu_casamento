const DressCodeIcon = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Círculo Externo */}
      <circle 
        cx="12" 
        cy="12" 
        r="9" 
        stroke="#5E6738" 
        strokeWidth="1.2" 
      />
      {/* Ponto do i */}
      <circle 
        cx="12" 
        cy="8" 
        r="1" 
        fill="#5E6738" 
      />
      {/* Corpo do i com serifa */}
      <path
        d="M11 11H12V16H13"
        stroke="#5E6738"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 16H13"
        stroke="#5E6738"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default DressCodeIcon;