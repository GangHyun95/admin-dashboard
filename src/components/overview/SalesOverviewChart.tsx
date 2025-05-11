import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import CardLayout from '../../layout/CardLayout';

const salesData = [
    { name: '7월', sales: 4200 },
    { name: '8월', sales: 3800 },
    { name: '9월', sales: 5100 },
    { name: '10월', sales: 4600 },
    { name: '11월', sales: 5400 },
    { name: '12월', sales: 7200 },
    { name: '1월', sales: 6100 },
    { name: '2월', sales: 5900 },
    { name: '3월', sales: 6800 },
    { name: '4월', sales: 6300 },
    { name: '5월', sales: 7100 },
    { name: '6월', sales: 7500 },
];

export default function SalesOverviewChart() {
    return (
        <CardLayout>
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
                            formatter={(value,) => [`$${value.toLocaleString()}`, '매출']}
                        />
                        <Line
                            type='monotone'
                            dataKey='sales'
                            stroke='#6366F1'
                            strokeWidth={3}
                            dot={{ fill: '#6366F1', strokeWidth: 2, r: 6 }}
                            activeDot={{ r: 8, strokeWidth: 2 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </CardLayout>
    );
}
