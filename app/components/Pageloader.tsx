"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { AnimatedMask } from "./AnimatedMask";

interface PageLoaderProps {
    loading: boolean;
    onComplete?: () => void;
}

export default function PageLoader({ loading, onComplete }: PageLoaderProps) {
    useEffect(() => {
        if (loading) {
            const timer = setTimeout(() => {
                onComplete?.();
            }, 2500); // Pecker animation duration
            return () => clearTimeout(timer);
        }
    }, [loading, onComplete]);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="fixed inset-0 z-[10000] flex items-center justify-center bg-black overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit={{ 
                        opacity: 0,
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                >
                    <div className="relative w-[280px] h-[400px] md:w-[400px] md:h-[600px] flex items-center justify-center">
                        <AnimatedMask className="w-full h-full" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}