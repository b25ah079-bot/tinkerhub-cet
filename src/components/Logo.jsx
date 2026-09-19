export default function Logo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#10262c" />
      <rect x="8" y="10" width="30" height="14" rx="3" fill="#3ec6c9" />
      <rect x="42" y="10" width="14" height="14" rx="3" fill="#1a4d8f" />
      <rect x="8" y="28" width="30" height="14" rx="3" fill="#f5c518" />
      <rect x="42" y="28" width="14" height="14" rx="3" fill="#e85d4c" />
      <rect x="8" y="46" width="14" height="14" rx="3" fill="#7cb342" />
      <rect x="26" y="46" width="14" height="14" rx="3" fill="#5a8f32" />
    </svg>
  )
}
