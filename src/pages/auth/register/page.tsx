import { Eye, EyeOff, Lock, Mail, User as UserIcon } from 'lucide-react'
import { Link } from 'react-router'
import { nftImages } from '@/lib/imageMap'
import InputPill from '@/components/InputPill'
import { useRegisterForm } from '../register/hooks/useRegisterForm'

export default function Register() {
  const cover = nftImages.space_walking
  const {
    register,
    formState: { errors, isSubmitting },
    onSubmit,
    showPw,
    showPw2,
    setShowPw,
    setShowPw2,
  } = useRegisterForm()

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="order-1 -mx-4 sm:-mx-6 md:order-none md:-ml-8 md:mr-0">
          <img
            src={cover}
            alt="Space walkers"
            loading="lazy"
            className="w-full aspect-[4/5] md:aspect-auto md:h-full object-cover rounded-none block"
          />
        </div>

        <section className="flex items-start md:items-center">
          <div className="w-full">
            <h1 className="text-4xl font-extrabold text-white">Create Account</h1>
            <p className="mt-3 max-w-md text-sm text-zinc-300">
              Welcome! enter your details and start creating, collecting and selling NFTs.
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-3 flex flex-col gap-2">
              <InputPill
                leftIcon={<UserIcon className="h-4 w-4 text-zinc-500" aria-hidden />}
                placeholder="Username"
                autoComplete="username"
                {...register('username')}
                error={errors.username?.message}
              />

              <InputPill
                leftIcon={<Mail className="h-4 w-4 text-zinc-500" aria-hidden />}
                type="email"
                placeholder="Email Address"
                autoComplete="email"
                {...register('email')}
                error={errors.email?.message}
              />

              <InputPill
                leftIcon={<Lock className="h-4 w-4 text-zinc-500" aria-hidden />}
                type={showPw ? 'text' : 'password'}
                placeholder="Password"
                autoComplete="new-password"
                {...register('password')}
                rightSlot={
                  <button
                    type="button"
                    aria-label={showPw ? 'Hide password' : 'Show password'}
                    onClick={() => setShowPw((v) => !v)}
                    className="rounded-full p-2 text-zinc-600 hover:bg-zinc-100"
                  >
                    {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                }
                error={errors.password?.message}
              />

              <InputPill
                leftIcon={<Lock className="h-4 w-4 text-zinc-500" aria-hidden />}
                type={showPw2 ? 'text' : 'password'}
                placeholder="Confirm Password"
                autoComplete="new-password"
                {...register('confirmPassword')}
                rightSlot={
                  <button
                    type="button"
                    aria-label={showPw2 ? 'Hide password' : 'Show password'}
                    onClick={() => setShowPw2((v) => !v)}
                    className="rounded-full p-2 text-zinc-600 hover:bg-zinc-100"
                  >
                    {showPw2 ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                }
                error={errors.confirmPassword?.message}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#A259FF] px-6 text-sm font-semibold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? 'Creating…' : 'Create account'}
              </button>

              <p className="mt-3 text-center text-xs text-zinc-400">
                Already have an account{' '}
                <Link to="/login" className="text-zinc-200 underline">
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </section>
      </div>
    </main>
  )
}
