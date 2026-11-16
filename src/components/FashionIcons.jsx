/* OLED Black Fashion Icons — SVG components
   Each icon: 48×48 viewBox, fill #000000, white negative-space
   Wrapped in .icon-badge for the rounded-square badge style
*/

export function WomensIcon({ className = 'icon-badge' }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Dress silhouette */}
        <path d="M24 4C21.5 4 19.5 5.5 18 7L14 14H20L16 44H32L28 14H34L30 7C28.5 5.5 26.5 4 24 4Z" fill="#000"/>
        <circle cx="24" cy="4" r="3" fill="#000"/>
      </svg>
    </div>
  )
}

export function MensIcon({ className = 'icon-badge' }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Suit/blazer silhouette */}
        <rect x="14" y="4" width="20" height="40" rx="2" fill="#000"/>
        <path d="M14 4L10 44H24V4H14Z" fill="#000"/>
        <path d="M34 4L38 44H24V4H34Z" fill="#000"/>
        {/* Collar */}
        <path d="M20 4L24 14L28 4" fill="#fff"/>
        {/* Tie */}
        <path d="M22 14L21 28L24 32L27 28L26 14L24 16L22 14Z" fill="#fff"/>
        {/* Buttons */}
        <circle cx="24" cy="22" r="1.5" fill="#fff"/>
        <circle cx="24" cy="28" r="1.5" fill="#fff"/>
        {/* Lapels */}
        <path d="M14 4L10 44H38L34 4L28 4L24 14L20 4L14 4Z" fill="#000"/>
        <path d="M20 4L24 14L28 4" fill="#fff"/>
      </svg>
    </div>
  )
}

export function AccessoriesIcon({ className = 'icon-badge' }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Handbag silhouette */}
        <rect x="8" y="20" width="32" height="24" rx="4" fill="#000"/>
        {/* Handle */}
        <path d="M17 20V16C17 11.6 20.1 8 24 8C27.9 8 31 11.6 31 16V20" stroke="#000" strokeWidth="4" fill="none"/>
        {/* Clasp */}
        <rect x="20" y="17" width="8" height="6" rx="2" fill="#fff"/>
        <circle cx="24" cy="20" r="1.5" fill="#000"/>
      </svg>
    </div>
  )
}

export function FootwearIcon({ className = 'icon-badge' }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* High heel shoe silhouette */}
        <path d="M6 36C6 36 8 38 12 38H38C40 38 42 36 42 34V30H34C30 30 28 28 28 24V12C28 10 26 8 24 8C22 8 20 10 20 12V24C20 28 18 30 14 30H10L6 36Z" fill="#000"/>
        {/* Heel */}
        <path d="M42 34V40H36V34" fill="#000"/>
        {/* Sole highlight */}
        <path d="M12 38H38" stroke="#fff" strokeWidth="1.5"/>
      </svg>
    </div>
  )
}

export function TailoringIcon({ className = 'icon-badge' }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Scissors */}
        <circle cx="13" cy="13" r="6" fill="#000"/>
        <circle cx="13" cy="13" r="3" fill="#fff"/>
        <circle cx="35" cy="13" r="6" fill="#000"/>
        <circle cx="35" cy="13" r="3" fill="#fff"/>
        <line x1="17" y1="17" x2="39" y2="39" stroke="#000" strokeWidth="4" strokeLinecap="round"/>
        <line x1="31" y1="17" x2="9" y2="39" stroke="#000" strokeWidth="4" strokeLinecap="round"/>
        {/* Thread */}
        <path d="M24 24L24 42" stroke="#000" strokeWidth="2" strokeDasharray="3 2"/>
      </svg>
    </div>
  )
}

export function LuxuryIcon({ className = 'icon-badge' }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Crown silhouette */}
        <path d="M6 36H42L38 18L30 28L24 10L18 28L10 18L6 36Z" fill="#000"/>
        {/* Jewels on crown */}
        <circle cx="24" cy="12" r="3" fill="#fff"/>
        <circle cx="12" cy="20" r="2.5" fill="#fff"/>
        <circle cx="36" cy="20" r="2.5" fill="#fff"/>
        {/* Base */}
        <rect x="6" y="36" width="36" height="4" rx="2" fill="#000"/>
      </svg>
    </div>
  )
}

export function HeartIcon({ filled = false }) {
  return (
    <svg viewBox="0 0 24 24" fill={filled ? '#e53e3e' : 'none'} stroke={filled ? '#e53e3e' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  )
}

export function CartIconSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
    </svg>
  )
}

export function SearchIconSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  )
}

export function PlusIconSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  )
}

export function ChevronDownSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  )
}

export function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}

/* --- About page MVV icons --- */
export function MissionIcon({ className = 'icon-badge' }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Rocket silhouette */}
        <path d="M24 4C24 4 14 12 14 26H20V38L24 44L28 38V26H34C34 12 24 4 24 4Z" fill="#000"/>
        <ellipse cx="24" cy="20" rx="5" ry="5" fill="#fff"/>
        <path d="M14 26L8 30L14 34V26Z" fill="#000"/>
        <path d="M34 26L40 30L34 34V26Z" fill="#000"/>
      </svg>
    </div>
  )
}

export function VisionIcon({ className = 'icon-badge' }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Eye silhouette */}
        <path d="M4 24C4 24 12 10 24 10C36 10 44 24 44 24C44 24 36 38 24 38C12 38 4 24 4 24Z" fill="#000"/>
        <circle cx="24" cy="24" r="8" fill="#fff"/>
        <circle cx="24" cy="24" r="5" fill="#000"/>
        <circle cx="26" cy="22" r="1.5" fill="#fff"/>
      </svg>
    </div>
  )
}

export function ObjectivesIcon({ className = 'icon-badge' }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Target/bullseye */}
        <circle cx="24" cy="24" r="20" fill="#000"/>
        <circle cx="24" cy="24" r="14" fill="#fff"/>
        <circle cx="24" cy="24" r="8" fill="#000"/>
        <circle cx="24" cy="24" r="3" fill="#fff"/>
        {/* Arrow */}
        <line x1="30" y1="10" x2="24" y2="22" stroke="#000" strokeWidth="3" strokeLinecap="round"/>
        <path d="M28 8L34 8L34 14" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}
