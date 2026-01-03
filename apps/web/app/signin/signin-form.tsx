"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Label } from "@workspace/ui/components/label"
import { Alert, AlertTitle, AlertDescription } from "@workspace/ui/components/alert"
import { HugeiconsIcon } from "@hugeicons/react"
import { AlertCircleIcon } from "@hugeicons/core-free-icons"
import { useAuth } from "@/hooks/useAuth"
import posthog from "posthog-js"
import { CircleAlertIcon } from "lucide-react"

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const { signIn, loading } = useAuth()
  const router = useRouter()

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    try {
      await signIn(email, password)
      // Identify user and capture sign-in event
      posthog.identify(email, { email })
      posthog.capture('user_signed_in', {
        method: 'email',
      })
      router.push('/home')
    } catch (err: any) {
      setError(err?.message || 'Sign in failed')
      posthog.capture('user_sign_in_failed', {
        method: 'email',
        error_message: err?.message || 'Sign in failed',
      })
    }
  }

  const handleSocialLogin = (provider: 'google' | 'apple') => {
    posthog.capture('social_login_clicked', { provider })
  }

  return (
    <form className="w-full" onSubmit={onSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        <Button size="lg" variant="outline" className="w-full rounded-2xl" aria-label="Log in with Google" onClick={() => handleSocialLogin('google')}>
          <Image src="/login-page/google-brands-solid-full.svg" alt="Google" width={18} height={18} />
          <span className="font-medium">Log in with Google</span>
        </Button>

        <Button size="lg" variant="outline" className="w-full rounded-2xl" aria-label="Log in with Apple" onClick={() => handleSocialLogin('apple')}>
          <Image src="/login-page/apple-brands-solid-full.svg" alt="Apple" width={18} height={18} />
          <span className="font-medium">Log in with Apple</span>
        </Button>
      </div>

      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 border-t border-border" />
        <span className="text-sm text-center text-[var(--color-muted-foreground)] px-3">or</span>
        <div className="flex-1 border-t border-border" />
      </div>

      <div className="mb-4">
        <Label htmlFor="signin-email" className="mb-2 text-sm text-[var(--color-foreground)]">Email address</Label>
        <Input id="signin-email" type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>

      <div className="mb-2 flex items-center justify-between">
        <Label htmlFor="signin-password" className="text-sm text-[var(--color-foreground)]">Password</Label>
        <Link href="#" className="text-sm underline text-[var(--color-muted-foreground)]">Forgot Password ?</Link>
      </div>

      <div className="mb-2">
        <div className="relative">
          <Input
            id="signin-password"
            type={showPassword ? "text" : "password"}
            placeholder="A minimum of 8 Characters"
            className="pr-10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={8}
          />
          <button /* weird thingy with this but TODO: investigate later */
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6"
          >
            <Image
              src={showPassword ? "/login-page/eye-closed.svg" : "/login-page/eye.svg"}
              alt={showPassword ? "Hide" : "Show"}
              width={18}
              height={18}
            />
          </button>
        </div>
        <p className="text-xs text-[var(--color-muted-foreground)] mt-2">A minimum of 8 Characters</p>
      </div>

      {error && (
        <Alert variant="error" className="mt-4">
          <HugeiconsIcon icon={AlertCircleIcon} />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="mt-6">
        <Button size="lg" className="w-full rounded-2xl" type="submit" disabled={loading}>
          {loading && (
            <svg aria-hidden viewBox="0 0 24 24" className="animate-spin" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-20" />
              <path d="M22 12a10 10 0 00-10-10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          )}
          {loading ? 'Signing in...' : 'Login'}
        </Button>
      </div>
    </form>
  )
}
