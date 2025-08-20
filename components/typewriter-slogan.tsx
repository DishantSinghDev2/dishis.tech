"use client"

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"

export function TypewriterSlogan() {
  const words = [
    {
      text: "Do",
      className:
        "text-lg md:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-500",
    },
    {
      text: "It",
      className:
        "text-lg md:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-500",
    },
    {
      text: "Together",
      className:
        "text-lg md:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-500",
    },
  ]

  return <TypewriterEffectSmooth words={words} />
}
