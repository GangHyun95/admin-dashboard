import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import CardLayout from '../../layout/CardLayout';

const salesByCategory = [
    { name: '전자제품', value: 400 },
    { name: '패션/의류', value: 300 },
    { name: '홈/가전', value: 200 },
    { name: '도서/서적', value: 100 },
    { name: '기타', value: 150 },
];
const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE'];

export default function SalesByCategoryChart() {
    return (
        <CardLayout delay={0.3}>
            <h2 className='text-xl font-semibold text-gray-100 mb-4'>
                카테고리별 매출
            </h2>

            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={salesByCategory}
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
                            {salesByCategory.map((_, index) => (
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
                        />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </CardLayout>
    );
}
