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

const dailyOrdersData = [
    { date: '07/01', orders: 45 },
    { date: '07/02', orders: 52 },
    { date: '07/03', orders: 49 },
    { date: '07/04', orders: 60 },
    { date: '07/05', orders: 55 },
    { date: '07/06', orders: 58 },
    { date: '07/07', orders: 62 },
];

export default function DailyOrders() {
    return (
        <CardLayout>
            <h2 className='text-xl font-semibold text-gray-100 mb-4'>
                일별 주문 현황
            </h2>

            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <LineChart data={dailyOrdersData}>
                        <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                        <XAxis dataKey='date' stroke='#9CA3AF' />
                        <YAxis stroke='#9CA3AF' />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                                borderColor: '#4B5563',
                            }}
                            itemStyle={{ color: '#E5E7EB' }}
                            formatter={(value) => [`${value.toLocaleString()}건`, `주문 수`]}
                        />
                        <Line
                            type='monotone'
                            dataKey='orders'
                            stroke='#8B5CF6'
                            strokeWidth={2}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </CardLayout>
    );
}
