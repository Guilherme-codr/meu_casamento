const CerimoniaIcon = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Aliança Esquerda */}
      <circle 
        cx="8" 
        cy="12" 
        r="5.5" 
        stroke="#5E6738" 
        strokeWidth="1.2" 
      />
      {/* Aliança Direita */}
      <circle 
        cx="16" 
        cy="12" 
        r="5.5" 
        stroke="#5E6738" 
        strokeWidth="1.2" 
      />
    </svg>
  );
};

export default CerimoniaIcon;