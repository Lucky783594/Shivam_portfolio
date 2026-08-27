export default function TelegramQuizBotIllustration({ className = "w-full h-auto" }) {
  return (
    <svg
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EFF6FF" />
          <stop offset="100%" stopColor="#E0E7FF" />
        </linearGradient>
        <linearGradient id="telegramGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4FACFE" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F8FAFC" />
        </linearGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#1E293B" floodOpacity="0.12" />
        </filter>
      </defs>



      {/* Decorative dots */}
      <circle cx="40" cy="40" r="4" fill="#93C5FD" opacity="0.6" />
      <circle cx="365" cy="55" r="5" fill="#A5B4FC" opacity="0.5" />
      <circle cx="30" cy="250" r="3" fill="#818CF8" opacity="0.5" />
      <circle cx="375" cy="235" r="4" fill="#60A5FA" opacity="0.5" />

      {/* Dashboard card */}
      <rect x="60" y="60" width="200" height="180" rx="16" fill="url(#cardGrad)" filter="url(#softShadow)" />

      {/* Dashboard header bar */}
      <rect x="60" y="60" width="200" height="34" rx="16" fill="#1E293B" />
      <rect x="60" y="78" width="200" height="16" fill="#1E293B" />
      <circle cx="80" cy="77" r="5" fill="#F87171" />
      <circle cx="96" cy="77" r="5" fill="#FBBF24" />
      <circle cx="112" cy="77" r="5" fill="#34D399" />

      {/* Weekly report bars */}
      <g>
        <rect x="80" y="180" width="14" height="35" rx="3" fill="#93C5FD" />
        <rect x="102" y="160" width="14" height="55" rx="3" fill="#60A5FA" />
        <rect x="124" y="145" width="14" height="70" rx="3" fill="#3B82F6" />
        <rect x="146" y="170" width="14" height="45" rx="3" fill="#60A5FA" />
        <rect x="168" y="130" width="14" height="85" rx="3" fill="#2563EB" />
        <rect x="190" y="155" width="14" height="60" rx="3" fill="#3B82F6" />
        <rect x="212" y="120" width="14" height="95" rx="3" fill="#1D4ED8" />
      </g>
      <line x1="76" y1="216" x2="232" y2="216" stroke="#CBD5E1" strokeWidth="2" />

      {/* Day labels */}
      <g fontFamily="Arial, sans-serif" fontSize="8" fill="#94A3B8">
        <text x="83" y="228">M</text>
        <text x="105" y="228">T</text>
        <text x="127" y="228">W</text>
        <text x="149" y="228">T</text>
        <text x="171" y="228">F</text>
        <text x="193" y="228">S</text>
        <text x="215" y="228">S</text>
      </g>

      {/* Quiz checklist chip */}
      <rect x="76" y="108" width="168" height="18" rx="9" fill="#EFF6FF" />
      <circle cx="88" cy="117" r="6" fill="#22C55E" />
      <path d="M85 117 L87.5 119.5 L91.5 114.5" stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="100" y="113" width="120" height="8" rx="4" fill="#CBD5E1" />

      {/* Telegram bot bubble - top right, overlapping dashboard */}
      <g filter="url(#softShadow)">
        <circle cx="290" cy="95" r="52" fill="url(#telegramGrad)" />
      </g>
      {/* Paper plane / telegram icon */}
      <path
        d="M266 96 L316 76 L302 122 L291 104 L279 111 Z"
        fill="white"
        opacity="0.95"
      />
      <path d="M291 104 L302 122 L296 100 Z" fill="#DCEBFF" opacity="0.9" />

      {/* Chat bubble with question mark - poll indicator */}
      <g filter="url(#softShadow)">
        <rect x="228" y="155" width="92" height="60" rx="16" fill="white" />
        <path d="M244 215 L244 227 L258 215 Z" fill="white" />
      </g>
      <circle cx="252" cy="177" r="6" fill="#3B82F6" opacity="0.15" />
      <circle cx="252" cy="177" r="4" fill="#3B82F6" />
      <rect x="264" y="173" width="44" height="8" rx="4" fill="#DBEAFE" />
      <circle cx="252" cy="196" r="4" fill="#22C55E" />
      <rect x="264" y="192" width="34" height="8" rx="4" fill="#DCFCE7" />

      {/* Small stars / sparkle for "AI" flavor */}
      <path d="M336 150 l3 7 l7 3 l-7 3 l-3 7 l-3 -7 l-7 -3 l7 -3 z" fill="#A78BFA" opacity="0.8" />
      <path d="M320 200 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 l5 -2 z" fill="#818CF8" opacity="0.7" />
    </svg>
  );
}
