"use client"

import { useEffect, useRef } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { Button } from '@workspace/ui/components/button'
import { Avatar } from '@workspace/ui/components/avatar'
import posthog from 'posthog-js'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const hasTrackedView = useRef(false)

  useEffect(() => {
    if (!loading && !user) {
      router.push('/signin')
    }
  }, [loading, user, router])

  // Track home page view when user is loaded (only once per mount)
  useEffect(() => {
    if (!loading && user && !hasTrackedView.current) {
      hasTrackedView.current = true
      posthog.capture('home_viewed', {
        user_id: user.id,
      })
    }
  }, [loading, user])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-svh">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-sm text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) return null

  const userName = user.name?.split(' ')[0] || 'User'

  return (

    
  )
