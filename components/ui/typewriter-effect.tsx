"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}) => {
  // words array, but let's make it simpler for the smooth effect
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }))

  const renderWords = () => {
    return (
      <div className={cn("inline", className)}>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.25,
                    delay: idx * 0.5 + index * 0.05,
                  }}
                  className={cn(`dark:text-white text-black `, word.className)}
                  key={`char-${index}`}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className={cn("text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center", className)}>
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className={cn("inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500", cursorClassName)}
      ></motion.span>
    </div>
  )
}

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}) => {
  // join words into a single string
  const wordsArray = words.map((word) => word.text).join(" ")
  const textArray = wordsArray.split("")

  return (
    <div className={cn("flex my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className="text-lg md:text-2xl font-bold"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {words.map((word, idx) => {
            return (
              <span key={`word-${idx}`} className={cn(`dark:text-white text-black `, word.className)}>
                {word.text}
                {idx < words.length - 1 ? " " : ""}
              </span>
            )
          })}
        </div>
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className={cn("block rounded-sm w-[3px] h-5 md:h-7 bg-[#1faaff] ml-1", cursorClassName)}
      ></motion.span>
    </div>
  )
}
