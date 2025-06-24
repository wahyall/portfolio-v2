"use client";

import { useVisitTracker } from "@/hooks/use-visit-tracker";

export function VisitTracker() {
  useVisitTracker();

  return null; // This component doesn't render anything visible
}
