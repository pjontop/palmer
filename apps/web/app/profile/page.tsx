"use client"

import { useEffect, useRef } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import posthog from 'posthog-js'

export default function ProfilePage() {
  const { user, loading, signOut } = useAuth()
  const router = useRouter()
  const hasTrackedView = useRef(false)

  useEffect(() => {
    if (!loading && !user) {
      router.push('/signin')
    }
  }, [loading, user, router])

  // Track profile view when user is loaded (only once per mount)
  useEffect(() => {
    if (!loading && user && !hasTrackedView.current) {
      hasTrackedView.current = true
      posthog.capture('profile_viewed', {
        user_id: user.id,
      })
    }
  }, [loading, user])

  const handleSignOut = () => {
    posthog.capture('user_signed_out')
    posthog.reset()
    signOut()
  }

  if (loading) return <div>Loading...</div>
  if (!user) return null

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Welcome, {user.username || user.email}</h1>
      <p className="mt-2 text-sm text-muted-foreground">User ID: {user.id}</p>
      <button onClick={handleSignOut} className="mt-4 px-3 py-2 bg-red-500 text-white rounded">Sign out</button>
    </div>
  )
}
