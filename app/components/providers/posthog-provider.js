"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect } from "react";

export function PHProvider({ children }) {
  useEffect(() => {
    const key =
      process.env.NEXT_PUBLIC_POSTHOG_KEY ||
      "phc_yM2yvy4tmvUDIXwYjowV0wskT8g19nfhNFVuwaR6JCM";

    if (!key) {
      console.warn("PostHog key is missing");
      return;
    }

    posthog.init(key, {
      api_host: "/ingest",
      ui_host:
        process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com",
      person_profiles: "identified_only",
      capture_pageview: false,
      capture_pageleave: true,
    });
  }, []);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
