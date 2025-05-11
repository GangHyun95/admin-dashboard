import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import CardLayout from '../../layout/CardLayout';

const dailySalesData = [
    { name: '월', sales: 1000 },
    { name: '화', sales: 1200 },
    { name: '수', sales: 900 },
    { name: '목', sales: 1100 },
    { name: '금', sales: 1300 },
    { name: '토', sales: 1600 },
    { name: '일', sales: 1400 },
];

export default function DailySalesTrend() {
    return (
        <CardLayout delay={0.4}>
            <h2 className='text-xl font-semibold text-gray-100 mb-4'>
                요일별 매출 현황
            </h2>

            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <BarChart data={dailySalesData}>
                        <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                        <XAxis dataKey='name' stroke='#9CA3AF' />
                        <YAxis stroke='#9CA3AF' />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                                borderColor: '#4B5563',
                            }}
                            itemStyle={{ color: '#E5E7EB' }}
                        />
                        <Bar dataKey='sales' name='매출' fill='#10B981' />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </CardLayout>
    );
}
