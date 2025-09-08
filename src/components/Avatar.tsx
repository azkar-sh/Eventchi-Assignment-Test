function hashColor(seed: string) {
  const colors = ['bg-rose-500','bg-amber-500','bg-emerald-500','bg-sky-500','bg-indigo-500','bg-fuchsia-500','bg-purple-500','bg-blue-500']
  let h = 0; for (let i=0;i<seed.length;i++) h = (h*31 + seed.charCodeAt(i)) & 0xffffffff
  return colors[Math.abs(h)%colors.length]
}
export default function Avatar({ seed, size=40 }: { seed: string, size?: number }) {
  const s = { width: size, height: size }
  return <div className={`inline-flex items-center justify-center rounded-full text-white ${hashColor(seed)}`} style={s}>
    <span className="text-sm">{seed[0]?.toUpperCase() || 'A'}</span>
  </div>
}
