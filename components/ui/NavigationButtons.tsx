"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface NavigationButtonsProps {
  onBack?: () => void;
  onContinue?: () => void;
  backLabel?: string;
  continueLabel?: string;
}

export default function NavigationButtons({
  onBack,
  onContinue,
  backLabel = "Back",
  continueLabel = "Continue",
}: NavigationButtonsProps) {
  return (
    <motion.div
      className="fixed bottom-8 left-0 right-0 z-50 flex justify-center gap-6 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      {onBack && (
        <motion.button
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 backdrop-blur-md hover:bg-purple-500/30 transition-all"
          whileHover={{ scale: 1.05, x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft size={20} />
          <span className="hidden sm:inline">{backLabel}</span>
        </motion.button>
      )}

      {onContinue && (
        <motion.button
          onClick={onContinue}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-200 backdrop-blur-md hover:bg-cyan-500/30 transition-all"
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="hidden sm:inline">{continueLabel}</span>
          <ArrowRight size={20} />
        </motion.button>
      )}
    </motion.div>
  );
}