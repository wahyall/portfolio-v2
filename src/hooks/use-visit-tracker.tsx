"use client";

import { useEffect, useRef } from "react";

export function useVisitTracker() {
  const hasTracked = useRef(false);

  useEffect(() => {
    // Only track once per session
    if (hasTracked.current) return;

    const trackVisit = async () => {
      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userAgent: navigator.userAgent,
            referer: document.referrer,
          }),
        });

        if (response.ok) {
          const result = await response.json();
          console.log("Visit tracked successfully:", result.messageId);
          hasTracked.current = true;
        } else {
          const errorData = await response.json();
          console.error("Failed to track visit:", errorData.error);
        }
      } catch (error) {
        console.error("Error tracking visit:", error);
      }
    };

    // Track visit after a small delay to ensure the page has loaded
    const timeoutId = setTimeout(trackVisit, 1000);

    return () => clearTimeout(timeoutId);
  }, []);
}
