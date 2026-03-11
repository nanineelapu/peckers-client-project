"use client";

import { motion } from "motion/react";

interface AnimatedMaskProps {
    className?: string;
    animate?: boolean;
}

export function AnimatedMask({ className = "", animate = true }: AnimatedMaskProps) {
    return (
        <svg
            viewBox="0 0 400 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Background */}
            <rect width="400" height="600" fill="#000000" />

            {/* Head outline */}
            <motion.path
                d="M 200 550 C 120 550 80 480 80 400 L 80 200 C 80 120 120 50 200 50 C 280 50 320 120 320 200 L 320 400 C 320 480 280 550 200 550 Z"
                fill="#000000"
                initial={animate ? { scale: 0.8, opacity: 0 } : {}}
                animate={animate ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
            />

            {/* Crown */}
            <motion.g
                initial={animate ? { y: -20, opacity: 0 } : {}}
                animate={animate ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <motion.path
                    d="M 140 200 C 130 180 120 140 130 110 C 135 90 145 80 155 85 C 165 90 165 120 160 150 C 157 170 150 190 140 200 Z"
                    fill="#C9393F"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{ transformOrigin: "150px 140px" }}
                />

                <motion.path
                    d="M 200 190 C 190 160 185 110 195 70 C 198 50 205 40 215 45 C 225 50 225 80 220 120 C 217 150 210 180 200 190 Z"
                    fill="#C9393F"
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                    style={{ transformOrigin: "207px 120px" }}
                />

                <motion.path
                    d="M 260 200 C 270 180 280 140 270 110 C 265 90 255 80 245 85 C 235 90 235 120 240 150 C 243 170 250 190 260 200 Z"
                    fill="#C9393F"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    style={{ transformOrigin: "250px 140px" }}
                />
            </motion.g>

            {/* Face */}
            <motion.path
                d="M 200 270 L 240 290 L 260 320 L 260 380 L 240 420 L 200 440 L 160 420 L 140 380 L 140 320 L 160 290 L 200 270 Z"
                fill="#FFFFFF"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                style={{ transformOrigin: "200px 355px" }}
            />

            {/* Nose */}
            <motion.path
                d="M 200 380 L 220 400 L 200 440 L 180 400 L 200 380 Z"
                fill="#C9393F"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.1, 1] }}
                transition={{ duration: 0.4, delay: 0.6 }}
                style={{ transformOrigin: "200px 410px" }}
            />

            {/* Bottom */}
            <motion.path
                d="M 200 470 C 180 465 165 475 155 490 C 150 500 150 515 155 525 C 165 540 180 545 200 545 C 220 545 235 540 245 525 C 250 515 250 500 245 490 C 235 475 220 465 200 470 Z"
                fill="#C9393F"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            />

            {/* Mouth */}
            <motion.path
                d="M 200 485 L 210 500 L 200 510 L 190 500 L 200 485 Z"
                fill="#000000"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
            />
        </svg>
    );
}