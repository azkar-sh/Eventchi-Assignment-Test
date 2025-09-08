export default function Placeholder({
  tone = 'indigo',
  className = '',
}: {
  tone?: string
  className?: string
}) {
  const map: any = {
    indigo: 'from-indigo-500 to-fuchsia-500',
    sky: 'from-sky-400 to-blue-600',
    purple: 'from-purple-500 to-rose-500',
    emerald: 'from-emerald-500 to-teal-600',
    fuchsia: 'from-fuchsia-500 to-pink-600',
    cyan: 'from-cyan-400 to-sky-600',
    rose: 'from-rose-400 to-orange-500',
    amber: 'from-amber-400 to-yellow-500',
    blue: 'from-blue-400 to-indigo-600',
    yellow: 'from-yellow-400 to-amber-600',
  }
  return (
    <div className={`h-full w-full bg-gradient-to-br ${map[tone] || map.indigo} ${className}`} />
  )
}
