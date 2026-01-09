const BoloCasamentoIcon = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props} // Isso permite passar classes do Tailwind
    >
      <rect x="4" y="17" width="16" height="5" rx="1" fill="white" stroke="#5E6738" strokeWidth="0.8" />
      <rect x="6" y="11" width="12" height="6" rx="1" fill="white" stroke="#5E6738" strokeWidth="0.8" />
      <rect x="8" y="6" width="8" height="5" rx="1" fill="white" stroke="#5E6738" strokeWidth="0.8" />
      
      {/* Detalhes Verdes (Folhas) */}
      <path d="M12 6C12 6 13 4 15 5" stroke="#5E6738" strokeWidth="1" strokeLinecap="round" />
      <path d="M11 11C11 11 9 9 7 10" stroke="#5E6738" strokeWidth="1" strokeLinecap="round" />
      <path d="M13 17C13 17 15 15 18 16" stroke="#5E6738" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
};

export default BoloCasamentoIcon;