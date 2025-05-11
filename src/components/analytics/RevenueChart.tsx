import { useState } from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import CardLayout from '../../layout/CardLayout';

const revenueData = [
    { month: '1월', revenue: 4000, target: 3800 },
    { month: '2월', revenue: 3000, target: 3200 },
    { month: '3월', revenue: 5000, target: 4500 },
    { month: '4월', revenue: 4500, target: 4200 },
    { month: '5월', revenue: 6000, target: 5500 },
    { month: '6월', revenue: 5500, target: 5800 },
    { month: '7월', revenue: 7000, target: 6500 },
];

export default function RevenueChart() {
    const [selectedTimeRange, setSelectedTimeRange] = useState('이번 달');

    return (
        <CardLayout className='mb-8'>
            <div className='flex justify-between items-center mb-6'>
                <h2 className='text-xl font-semibold text-gray-100'>
                    매출 vs 목표
                </h2>
                <select
                    className='bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    value={selectedTimeRange}
                    onChange={(e) => setSelectedTimeRange(e.target.value)}
                >
                    <option>이번 주</option>
                    <option>이번 달</option>
                    <option>이번 분기</option>
                    <option>이번 해</option>
                </select>
            </div>

            <div style={{ width: '100%', height: 400 }}>
                <ResponsiveContainer>
                    <AreaChart data={revenueData}>
                        <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                        <XAxis dataKey='month' stroke='#9CA3AF' />
                        <YAxis stroke='#9CA3AF' />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                                borderColor: '#4B5563',
                            }}
                            itemStyle={{ color: '#E5E7EB' }}
                            formatter={(value, name) => [`${value.toLocaleString()}`, name === 'revenue' ? '매출' : '목표']}
                        />
                        <Legend formatter={(value) => (value === 'revenue' ? '매출' : '목표')} />
                        <Area
                            type='monotone'
                            dataKey='revenue'
                            stroke='#8B5CF6'
                            fill='#8B5CF6'
                            fillOpacity={0.3}
                        />
                        <Area
                            type='monotone'
                            dataKey='target'
                            stroke='#10B981'
                            fill='#10B981'
                            fillOpacity={0.3}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </CardLayout>
    );
}