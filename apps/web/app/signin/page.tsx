import Image from "next/image"
import Link from "next/link"
import SignInForm from "./signin-form"

export default function SignInPage() {
  return (
    <main className="min-h-svh flex justify-center bg-[var(--color-background)]">
      <div className="w-full max-w-screen-2xl mx-auto px-0 py-6 flex flex-col md:flex-row gap-18">
        <div className="w-full md:w-auto md:flex-1 max-w-2xl flex flex-col justify-center">
          <div className="mb-6">
            <Image src="/placerLogo-WithoutText.svg" alt="Placer logo" width={32} height={32} />
          </div>

          <h1 className="text-3xl font-semibold text-[var(--color-foreground)] mb-2">Welcome Back!</h1>
          <p className="text-sm text-[var(--color-muted-foreground)] mb-6">Sign in to your account</p>

          <SignInForm />

          <p className="text-sm text-[var(--color-muted-foreground)] mt-6">
            Don't have an account? <Link href="/signup" className="underline">Sign up</Link>
          </p>
        </div>

        <div className="hidden md:block flex-1 rounded-2xl bg-[var(--color-foreground)]" aria-hidden>
        </div>
      </div>
    </main>
  )
}