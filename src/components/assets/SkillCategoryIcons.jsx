const base = "w-14 h-14";

function IconShell({ className, gradientId, from, to, children }) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={className || base}>
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill={`url(#${gradientId})`} />
      {children}
    </svg>
  );
}

/* Frontend — browser window icon */
export function FrontendIcon({ className }) {
  return (
    <IconShell className={className} gradientId="gradFrontend" from="#2DD4BF" to="#0D9488">
      <g fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="16" y="17" width="32" height="30" rx="4" />
        <line x1="16" y1="26" x2="48" y2="26" />
        <circle cx="21" cy="21.5" r="1.4" fill="white" stroke="none" />
        <circle cx="26" cy="21.5" r="1.4" fill="white" stroke="none" />
        <path d="M24 38 L29 33 L24 28" />
        <line x1="32" y1="38" x2="40" y2="38" />
      </g>
    </IconShell>
  );
}

/* Backend — server rack icon */
export function BackendIcon({ className }) {
  return (
    <IconShell className={className} gradientId="gradBackend" from="#FBBF24" to="#F59E0B">
      <g fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="16" y="16" width="32" height="13" rx="3" />
        <rect x="16" y="35" width="32" height="13" rx="3" />
        <circle cx="22" cy="22.5" r="1.6" fill="white" stroke="none" />
        <line x1="28" y1="22.5" x2="42" y2="22.5" />
        <circle cx="22" cy="41.5" r="1.6" fill="white" stroke="none" />
        <line x1="28" y1="41.5" x2="42" y2="41.5" />
      </g>
    </IconShell>
  );
}

/* Database — cylinder/stack icon */
export function DatabaseIcon({ className }) {
  return (
    <IconShell className={className} gradientId="gradDatabase" from="#A78BFA" to="#7C3AED">
      <g fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="32" cy="20" rx="14" ry="5.5" />
        <path d="M18 20 v10 c0 3 6.3 5.5 14 5.5 s14 -2.5 14 -5.5 V20" />
        <path d="M18 30 v10 c0 3 6.3 5.5 14 5.5 s14 -2.5 14 -5.5 V30" />
      </g>
    </IconShell>
  );
}

/* Languages — code brackets icon */
export function LanguagesIcon({ className }) {
  return (
    <IconShell className={className} gradientId="gradLanguages" from="#FB7185" to="#DB2777">
      <g fill="none" stroke="white" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M25 20 L15 32 L25 44" />
        <path d="M39 20 L49 32 L39 44" />
        <line x1="35" y1="18" x2="29" y2="46" />
      </g>
    </IconShell>
  );
}

/* Tools & Platforms — wrench icon */
export function ToolsIcon({ className }) {
  return (
    <IconShell className={className} gradientId="gradTools" from="#38BDF8" to="#0284C7">
      <g fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M39 17 a9 9 0 0 0 -11.7 11.7 L15 41 v6 h6 l12.3 -12.3 A9 9 0 0 0 44.8 24 l-6 -1 l-1 -6 z" />
      </g>
    </IconShell>
  );
}

/* Other Skills — lightbulb icon */
export function OtherSkillsIcon({ className }) {
  return (
    <IconShell className={className} gradientId="gradOther" from="#34D399" to="#059669">
      <g fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 17 a10 10 0 0 1 6 18 c-1.5 1.2 -2 2.6 -2 4.2 V41 h-8 v-1.8 c0 -1.6 -0.5 -3 -2 -4.2 A10 10 0 0 1 32 17 Z" />
        <line x1="27" y1="46" x2="37" y2="46" />
        <line x1="28.5" y1="50" x2="35.5" y2="50" />
      </g>
    </IconShell>
  );
}
