import * as React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  leftIcon?: React.ReactNode
  rightSlot?: React.ReactNode
  error?: string
}

const InputPill = React.forwardRef<HTMLInputElement, Props>(
  ({ leftIcon, rightSlot, error, className, ...props }, ref) => {
    return (
      <div>
        <div className="flex items-center gap-2 rounded-full bg-white px-4 py-3">
          {leftIcon}
          <input
            ref={ref}
            {...props}
            className={twMerge(
              'w-full bg-transparent text-sm outline-none placeholder:text-zinc-400',
              className
            )}
          />
          {rightSlot}
        </div>
        {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
      </div>
    )
  }
)

InputPill.displayName = 'InputPill'
export default InputPill
