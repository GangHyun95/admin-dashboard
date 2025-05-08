import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import { motion } from 'framer-motion';

const salesData = [
    { name: '7월', 매출: 4200 },
    { name: '8월', 매출: 3800 },
    { name: '9월', 매출: 5100 }, 
    { name: '10월', 매출: 4600 },
    { name: '11월', 매출: 5400 },
    { name: '12월', 매출: 7200 },
    { name: '1월', 매출: 6100 },
    { name: '2월', 매출: 5900 },
    { name: '3월', 매출: 6800 },
    { name: '4월', 매출: 6300 },
    { name: '5월', 매출: 7100 },
    { name: '6월', 매출: 7500 },
];

export default function SalesOverviewChart() {
    return (
        <motion.div
            className='bg-gray-800/50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <h2 className='text-lg font-medium mb-4 text-gray-100'>
                월별 매출 현황
            </h2>

            <div className='h-80'>
                <ResponsiveContainer width={'100%'} height={'100%'}>
                    <LineChart data={salesData}>
                        <CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
                        <XAxis dataKey={'name'} stroke='#9ca3af' />
                        <YAxis stroke='#9ca3af' />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                                borderColor: '#4B5563',
                            }}
                            itemStyle={{ color: '#E5E7EB' }}
                            formatter={(value: number) => `$${value.toLocaleString()}`}
                        />
                        <Line
                            type='monotone'
                            dataKey='매출'
                            stroke='#6366F1'
                            strokeWidth={3}
                            dot={{ fill: '#6366F1', strokeWidth: 2, r: 6 }}
                            activeDot={{ r: 8, strokeWidth: 2 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
}