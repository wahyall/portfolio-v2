"use client"

import { useMotionValue, motion, useMotionTemplate } from "motion/react"
import React, { MouseEvent as ReactMouseEvent, useState } from "react"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

export const CardSpotlight = ({
  children,
  radius = 350,
  className,
  ...props
}: {
  radius?: number
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>) => {
  const { theme, systemTheme } = useTheme()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const currentTheme = theme === "system" ? systemTheme : theme

  const color = currentTheme === "dark" ? "#262626" : "#f5f5f5"

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect()

    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const [isHovering, setIsHovering] = useState(false)
  const handleMouseEnter = () => setIsHovering(true)
  const handleMouseLeave = () => setIsHovering(false)
  return (
    <div
      className={cn(
        "group/spotlight p-10 relative dark:bg-black/80 dark:text-neutral-100 text-neutral-900 rounded-xl border",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      >
        {isHovering && (
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
            colors={[
              [59, 130, 246],
              [139, 92, 246],
            ]}
            dotSize={3}
          />
        )}
      </motion.div>
      {children}
    </div>
  )
}
