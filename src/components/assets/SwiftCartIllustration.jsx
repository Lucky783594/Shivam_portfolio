export default function SwiftCartIllustration({ className = "w-full h-auto" }) {
  return (
    <svg
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="scBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5F3FF" />
          <stop offset="100%" stopColor="#EDE9FE" />
        </linearGradient>
        <linearGradient id="scCartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818CF8" />
          <stop offset="100%" stopColor="#6D28D9" />
        </linearGradient>
        <linearGradient id="scCardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F8FAFC" />
        </linearGradient>
        <filter id="scShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#312E81" floodOpacity="0.14" />
        </filter>
      </defs>



      {/* Decorative dots */}
      <circle cx="38" cy="45" r="4" fill="#A5B4FC" opacity="0.6" />
      <circle cx="368" cy="50" r="5" fill="#C4B5FD" opacity="0.5" />
      <circle cx="32" cy="248" r="3" fill="#8B5CF6" opacity="0.5" />
      <circle cx="372" cy="238" r="4" fill="#A78BFA" opacity="0.5" />

      {/* Dashboard card - seller analytics portal */}
      <rect x="60" y="60" width="200" height="180" rx="16" fill="url(#scCardGrad)" filter="url(#scShadow)" />

      {/* Dashboard header bar */}
      <rect x="60" y="60" width="200" height="34" rx="16" fill="#1E1B4B" />
      <rect x="60" y="78" width="200" height="16" fill="#1E1B4B" />
      <circle cx="80" cy="77" r="5" fill="#F87171" />
      <circle cx="96" cy="77" r="5" fill="#FBBF24" />
      <circle cx="112" cy="77" r="5" fill="#34D399" />

      {/* Three-portal chips: Buyer / Seller (row 1), Delivery (row 2) */}
      <g fontFamily="Arial, sans-serif" fontSize="8.5" fontWeight="bold">
        <rect x="76" y="102" width="60" height="18" rx="9" fill="#EDE9FE" />
        <circle cx="87" cy="111" r="4" fill="#7C3AED" />
        <text x="95" y="114" fill="#5B21B6">Buyer</text>

        <rect x="142" y="102" width="62" height="18" rx="9" fill="#EDE9FE" />
        <circle cx="153" cy="111" r="4" fill="#6366F1" />
        <text x="161" y="114" fill="#4338CA">Seller</text>

        <rect x="76" y="124" width="74" height="18" rx="9" fill="#EDE9FE" />
        <circle cx="87" cy="133" r="4" fill="#A78BFA" />
        <text x="95" y="136" fill="#6D28D9">Delivery</text>
      </g>

      {/* Sales/profit line chart */}
      <polyline
        points="80,225 100,210 120,218 140,195 160,202 180,175 200,185 220,160"
        fill="none"
        stroke="#7C3AED"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="220" cy="160" r="4" fill="#6D28D9" />
      <polyline
        points="80,225 100,210 120,218 140,195 160,202 180,175 200,185 220,160 220,236 80,236"
        fill="#DDD6FE"
        opacity="0.35"
        stroke="none"
      />
      <line x1="76" y1="236" x2="232" y2="236" stroke="#CBD5E1" strokeWidth="2" />

      {/* Order fulfillment progress strip */}
      <rect x="76" y="226" width="168" height="8" rx="4" fill="#E9E5FF" />
      <rect x="76" y="226" width="112" height="8" rx="4" fill="#7C3AED" />

      {/* Shopping cart bubble - top right, overlapping dashboard */}
      <g filter="url(#scShadow)">
        <circle cx="290" cy="95" r="52" fill="url(#scCartGrad)" />
      </g>
      {/* Cart icon */}
      <g stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M266 78 L273 78 L282 108 L308 108 L316 86 L277 86" />
      </g>
      <circle cx="286" cy="118" r="5" fill="white" />
      <circle cx="306" cy="118" r="5" fill="white" />

      {/* JWT lock badge - security */}
      <g filter="url(#scShadow)">
        <rect x="228" y="155" width="92" height="60" rx="16" fill="white" />
        <path d="M244 215 L244 227 L258 215 Z" fill="white" />
      </g>
      <rect x="248" y="176" width="20" height="16" rx="3" fill="none" stroke="#6D28D9" strokeWidth="2.5" />
      <path d="M251 176 v-6 a4 4 0 0 1 8 0 v6" fill="none" stroke="#6D28D9" strokeWidth="2.5" />
      <circle cx="258" cy="184" r="1.6" fill="#6D28D9" />
      <rect x="278" y="174" width="30" height="7" rx="3.5" fill="#EDE9FE" />
      <rect x="278" y="186" width="24" height="7" rx="3.5" fill="#EDE9FE" />
      <rect x="248" y="200" width="60" height="7" rx="3.5" fill="#F1F5F9" />

      {/* Sparkle accents */}
      <path d="M336 150 l3 7 l7 3 l-7 3 l-3 7 l-3 -7 l-7 -3 l7 -3 z" fill="#C4B5FD" opacity="0.8" />
      <path d="M320 200 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 l5 -2 z" fill="#A5B4FC" opacity="0.7" />
    </svg>
  );
}
