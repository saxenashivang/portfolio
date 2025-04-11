"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden w-full rounded-md z-0",
        isDark ? "bg-slate-950" : "bg-slate-50",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className={cn(
            "absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic text-white [--conic-position:from_70deg_at_center_top]",
            isDark
              ? "from-gray-100 via-transparent to-transparent"
              : "from-gray-200 via-transparent to-transparent"
          )}
        >
          <div
            className={cn(
              "absolute w-[100%] left-0 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]",
              isDark ? "bg-slate-950" : "bg-slate-50"
            )}
          />
          <div
            className={cn(
              "absolute w-40 h-[100%] left-0 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]",
              isDark ? "bg-slate-950" : "bg-slate-50"
            )}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className={cn(
            "absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic text-white [--conic-position:from_290deg_at_center_top]",
            isDark
              ? "from-transparent via-transparent to-gray-500"
              : "from-transparent via-transparent to-gray-400"
          )}
        >
          <div
            className={cn(
              "absolute w-40 h-[100%] right-0 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]",
              isDark ? "bg-slate-950" : "bg-slate-50"
            )}
          />
          <div
            className={cn(
              "absolute w-[100%] right-0 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]",
              isDark ? "bg-slate-950" : "bg-slate-50"
            )}
          />
        </motion.div>
        <div
          className={cn(
            "absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 blur-2xl",
            isDark ? "bg-slate-950" : "bg-slate-50"
          )}
        ></div>
        <div
          className={cn(
            "absolute top-1/2 z-50 h-48 w-full bg-transparent backdrop-blur-md",
            isDark ? "opacity-20" : "opacity-10"
          )}
        ></div>
        <div
          className={cn(
            "absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full blur-3xl",
            isDark ? "bg-gray-500 opacity-40" : "bg-gray-400 opacity-30"
          )}
        ></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className={cn(
            "absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full blur-2xl",
            isDark ? "bg-gray-400" : "bg-gray-300"
          )}
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className={cn(
            "absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem]",
            isDark ? "bg-gray-400" : "bg-gray-300"
          )}
        ></motion.div>

        <div
          className={cn(
            "absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem]",
            isDark ? "bg-slate-950" : "bg-slate-50"
          )}
        ></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
