# PostHog post-wizard report

The wizard has completed a deep integration of PostHog into your Next.js application. The integration includes client-side initialization using `instrumentation-client.ts` (the recommended approach for Next.js 15.3+), server-side PostHog client setup, user identification on sign-in, automatic error tracking, and key business events throughout the authentication flow.

## Summary of Changes

### Files Created
- `.env` - Added PostHog environment variables (`NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST`)
- `instrumentation-client.ts` - Client-side PostHog initialization with error tracking enabled
- `lib/posthog-server.ts` - Server-side PostHog client for backend event tracking

### Files Modified
- `app/signin/signin-form.tsx` - Added user identification and sign-in related events
- `app/profile/page.tsx` - Added profile view and sign-out events with `posthog.reset()` on logout
- `app/global-error.tsx` - Added PostHog error tracking with `captureException`

## Events Instrumented

| Event Name | Description | File |
|------------|-------------|------|
| `user_signed_in` | User successfully signed in with email/password | `app/signin/signin-form.tsx` |
| `user_sign_in_failed` | User sign-in attempt failed with an error | `app/signin/signin-form.tsx` |
| `social_login_clicked` | User clicked Google or Apple social login button | `app/signin/signin-form.tsx` |
| `terms_accepted` | User checked the Terms & Conditions checkbox during sign-in | `app/signin/signin-form.tsx` |
| `profile_viewed` | User viewed their profile page (top of retention funnel) | `app/profile/page.tsx` |
| `user_signed_out` | User signed out from their account | `app/profile/page.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

### Dashboard
- [Analytics basics](https://us.posthog.com/project/276384/dashboard/964754) - Core analytics dashboard with conversion, engagement, and churn metrics

### Insights
- [Sign-in Conversion Funnel](https://us.posthog.com/project/276384/insights/Z84KbmbS) - Tracks users from viewing sign-in page to successfully signing in
- [Sign-in Failures](https://us.posthog.com/project/276384/insights/kFB55kUJ) - Tracks failed sign-in attempts over time
- [User Sign-outs (Churn Indicator)](https://us.posthog.com/project/276384/insights/W0qftOtk) - Tracks user sign-out events as a potential churn indicator
- [Social Login Clicks by Provider](https://us.posthog.com/project/276384/insights/SZlRjbJ5) - Tracks social login button clicks broken down by provider
- [Profile Views](https://us.posthog.com/project/276384/insights/amueaVIy) - Tracks profile page views over time as an engagement metric
