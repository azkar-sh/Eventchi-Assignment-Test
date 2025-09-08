type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' }
export default function Button({ className = '', variant = 'primary', ...rest }: Props) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 font-medium transition duration-300 cursor-pointer disabled:cursor-not-allowed'
  const styles =
    variant === 'primary'
      ? 'bg-[#A259FF] text-white hover:opacity-80'
      : 'bg-transparent text-white hover:opacity-50 border border-[#A259FF]'
  return <button className={`${base} ${styles} ${className}`} {...rest} />
}
