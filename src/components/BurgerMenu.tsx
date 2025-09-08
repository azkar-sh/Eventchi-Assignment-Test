import { twJoin } from 'tailwind-merge'

const BurgerMenu: React.FC<{
  isOpen: boolean
  onClick?: () => void
  className?: string
}> = ({ onClick, isOpen, className = '' }) => {
  return (
    <button
      aria-label="Navbar Toggle"
      aria-expanded={isOpen}
      onClick={onClick}
      className={twJoin('relative h-6 w-6 text-white', className)}
    >
      <span
        className={twJoin(
          'absolute left-0 top-0 block h-0.5 w-4 bg-current transition-transform duration-300',
          isOpen ? 'translate-y-2 rotate-45' : 'translate-y-0 rotate-0'
        )}
      />
      <span
        className={twJoin(
          'absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 bg-current transition-opacity duration-300',
          isOpen ? 'opacity-0' : 'opacity-100'
        )}
      />
      <span
        className={twJoin(
          'absolute left-0 bottom-0 block h-0.5 w-4 bg-current transition-transform duration-300',
          isOpen ? '-translate-y-2 -rotate-45' : 'translate-y-0 rotate-0'
        )}
      />
    </button>
  )
}

export default BurgerMenu
