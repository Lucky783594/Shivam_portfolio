export default function Nova({ className = "w-full h-auto" }) {
  return (
    <svg viewBox="0 0 400 300" xmlns="http://w3.org" className={className}>
      <rect x="75" y="25" width="250" height="250" rx="65" fill="#111318" />
      
      <path 
        d="M 142.5,85 L 142.5,215 M 142.5,90 L 257.5,210 M 257.5,85 L 257.5,215" 
        stroke="#EAA135" 
        strokeWidth="27.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none"
      />
    </svg>
  );
}
