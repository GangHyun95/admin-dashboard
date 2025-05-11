import { motion } from 'framer-motion';
import React from 'react';

type CardLayoutProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
};

export default function CardLayout({
    children,
    className = '',
    delay = 0.2,
}: CardLayoutProps) {
    return (
        <motion.div
            className={`bg-gray-800/50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 ${className}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay }}
        >
            {children}
        </motion.div>
    );
}
