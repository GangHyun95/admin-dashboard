import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import { useState } from 'react';
import CardLayout from '../../layout/CardLayout';

const monthlySalesData = [
    { month: '1월', sales: 4000 },
    { month: '2월', sales: 3000 },
    { month: '3월', sales: 5000 },
    { month: '4월', sales: 4500 },
    { month: '5월', sales: 6000 },
    { month: '6월', sales: 5500 },
    { month: '7월', sales: 7000 },
];

export default function SalesOverviewChart() {
    const [selectedTimeRange, setSelectedTimeRange] = useState('This Month');

    return (
        <CardLayout className='lg:col-span-2'>
            <div className='flex items-center justify-between mb-6'>
                <h2 className='text-xl font-semibold text-gray-100'>
                    매출 현황
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

            <div className='w-full h-80'>
                <ResponsiveContainer>
                    <AreaChart data={monthlySalesData}>
                        <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                        <XAxis dataKey='month' stroke='#9CA3AF' />
                        <YAxis stroke='#9CA3AF' />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                                borderColor: '#4B5563',
                            }}
                            itemStyle={{ color: '#E5E7EB' }}
                            formatter={(value: number) => [
                                `매출: $${value.toLocaleString()}`,
                            ]}
                        />
                        <Area
                            type='monotone'
                            dataKey='sales'
                            stroke='#8B5CF6'
                            fill='#8B5CF6'
                            fillOpacity={0.3}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </CardLayout>
    );
}
