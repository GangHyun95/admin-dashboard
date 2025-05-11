import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import CardLayout from '../../layout/CardLayout';

const productPerformanceData = [
    { name: '상품 A', sales: 4000, revenue: 2400, profit: 2400 },
    { name: '상품 B', sales: 3000, revenue: 1398, profit: 2210 },
    { name: '상품 C', sales: 2000, revenue: 9800, profit: 2290 },
    { name: '상품 D', sales: 2780, revenue: 3908, profit: 2000 },
    { name: '상품 E', sales: 1890, revenue: 4800, profit: 2181 },
];

export default function ProductPerformance() {
    return (
        <CardLayout delay={0.4}>
            <h2 className='text-xl font-semibold text-gray-100 mb-4'>
                상품별 판매 현황
            </h2>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <BarChart data={productPerformanceData}>
                        <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                        <XAxis dataKey='name' stroke='#9CA3AF' />
                        <YAxis stroke='#9CA3AF' />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                                borderColor: '#4B5563',
                            }}
                            itemStyle={{ color: '#E5E7EB' }}
                            formatter={(value, name) => [
                                `${value.toLocaleString()}원`,
                                name === 'sales'
                                    ? '판매량'
                                    : name === 'revenue'
                                    ? '매출'
                                    : '이익',
                            ]}
                        />
                        <Legend
                            formatter={(value) =>
                                value === 'sales'
                                    ? '판매량'
                                    : value === 'revenue'
                                    ? '매출'
                                    : '이익'
                            }
                        />
                        <Bar dataKey='sales' fill='#8B5CF6' />
                        <Bar dataKey='revenue' fill='#10B981' />
                        <Bar dataKey='profit' fill='#F59E0B' />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </CardLayout>
    );
}
