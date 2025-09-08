export default function Section({ title, subtitle, action, children }:
  { title: string; subtitle?: string; action?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8">
      <div className="mb-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-2xl font-semibold text-white">{title}</h2>
          {subtitle && <p className="text-sm text-zinc-400">{subtitle}</p>}
        </div>
        {action}
      </div>
      {children}
    </section>
  )
}
