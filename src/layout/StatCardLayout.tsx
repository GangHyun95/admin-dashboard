import React from 'react';
import { motion } from 'framer-motion';
import StatCard from '../components/common/StatCard';

type StatCardData = {
    name: string;
    icon: React.ComponentType<{
        size?: number;
        className?: string;
        style?: { color: string };
    }>;
    value: string;
    color: string;
};
export default function StatCardLayout({ data }: { data: StatCardData[] }) {
    return (
        <motion.div
            className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            {data.map((item, index) => (
                <StatCard
                    key={index}
                    name={item.name}
                    icon={item.icon}
                    value={item.value}
                    color={item.color}
                />
            ))}
        </motion.div>
    );
}
