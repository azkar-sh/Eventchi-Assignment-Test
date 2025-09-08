export default function Card({
  children,
  className = '',
  variant = 'default',
}: {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'padless'
}) {
  return (
    <div
      className={`rounded-2xl border border-zinc-800/70 ${variant === 'padless' ? 'p-0' : 'p-4'} ${className}`}
    >
      {children}
    </div>
  )
}
