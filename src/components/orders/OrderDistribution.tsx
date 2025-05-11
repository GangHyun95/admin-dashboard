import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend,
} from 'recharts';
import CardLayout from '../../layout/CardLayout';

const orderStatusData = [
    { name: '대기 중', value: 30 },
    { name: '처리 중', value: 45 },
    { name: '배송 중', value: 60 },
    { name: '배송 완료', value: 120 },
];
const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FED766', '#2AB7CA'];

export default function OrderDistribution() {
    return (
        <CardLayout delay={0.3}>
            <h2 className='text-xl font-semibold text-gray-100 mb-4'>
                주문 상태
            </h2>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={orderStatusData}
                            cx='50%'
                            cy='50%'
                            outerRadius={80}
                            fill='#8884d8'
                            dataKey='value'
                            label={({ name, percent }) =>
                                `${name} ${(percent * 100).toFixed(0)}%`
                            }
                            isAnimationActive={false}
                        >
                            {orderStatusData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                                borderColor: '#4B5563',
                            }}
                            itemStyle={{ color: '#E5E7EB' }}
                            formatter={(value, name) => [`${value.toLocaleString()}건`, name]}
                        />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </CardLayout>
    );
}
