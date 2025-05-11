import { motion } from 'framer-motion';
import {
    DollarSign,
    Users,
    ShoppingBag,
    Eye,
    ArrowDownRight,
    ArrowUpRight,
} from 'lucide-react';

const overviewData = [
    { name: '총 매출', value: '$1,234,567', change: 12.5, icon: DollarSign },
    { name: '사용자 수', value: '45,678명', change: 8.3, icon: Users },
    { name: '주문 수', value: '9,876건', change: -3.2, icon: ShoppingBag },
    { name: '페이지 조회수', value: '1,234,567회', change: 15.7, icon: Eye },
];

export default function OverviewCards() {
    return (
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
            {overviewData.map((item, index) => (
                <motion.div
                    key={item.name}
                    className='bg-gray-800/50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <div className='flex items-center justify-between'>
                        <div>
                            <h3 className='text-sm font-medium text-gray-400'>
                                {item.name}
                            </h3>
                            <p className='mt-1 text-xl font-semibold text-gray-100'>
                                {item.value}
                            </p>
                        </div>

                        <div
                            className={`p-3 rounded-full ${
                                item.change >= 0 ? 'bg-green-500/20' : 'bg-red-500/20'
                            }`}
                        >
                            <item.icon
                                className={`size-6 z-10 ${
                                    item.change >= 0
                                        ? 'text-green-500'
                                        : 'text-red-500'
                                } `}
                            />
                        </div>
                    </div>
                    <div
                        className={`mt-4 flex items-center ${
                            item.change >= 0 ? 'text-green-500' : 'text-red-500'
                        }`}
                    >
                        {item.change >= 0 ? (
                            <ArrowUpRight size='20' />
                        ) : (
                            <ArrowDownRight size='20' />
                        )}
                        <span className='ml-1 text-sm font-medium'>
                            {Math.abs(item.change)}%
                        </span>
                        <span className='ml-2 text-sm text-gray-400'>
                            지난 기간 대비
                        </span>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}