'use client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { useEffect } from 'react'

export function PHProvider({ children }) {
  useEffect(() => {
    posthog.init("phc_yM2yvy4tmvUDIXwYjowV0wskT8g19nfhNFVuwaR6JCM", {
      api_host:"https://app.posthog.com",
      capture_pageview: false, 
      capture_pageleave: true,
    });
  }, [])

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}