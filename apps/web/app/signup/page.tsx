import Image from "next/image"
import Link from "next/link"
import SignUpForm from "./signup-form"

export default function SignUpPage() {
  return (
    <main className="min-h-svh flex justify-center bg-[var(--color-background)]">
      <div className="w-full max-w-screen-2xl mx-auto px-6 py-6 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-auto md:flex-1 max-w-2xl flex flex-col justify-center">
          <div className="mb-6">
            <Image src="/placerLogo-WithoutText.svg" alt="Placer logo" width={32} height={32} />
          </div>

          <h1 className="text-3xl font-semibold text-[var(--color-foreground)] mb-2">Get Started!</h1>
          <p className="text-sm text-[var(--color-muted-foreground)] mb-6">Create your account</p>

          <SignUpForm />

          <p className="text-sm text-[var(--color-muted-foreground)] mt-6">
            Already have an account? <Link href="/signin" className="underline">Sign in</Link>
          </p>
        </div>

        <div className="hidden md:block flex-1 rounded-2xl bg-[var(--color-foreground)]" aria-hidden>
        </div>
      </div>
    </main>
  )
}
