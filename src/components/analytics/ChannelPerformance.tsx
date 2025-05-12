import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import CardLayout from '../../layout/CardLayout';

const channelData = [
    { name: '검색(무료)', value: 4000 },
    { name: '검색(유료)', value: 3000 },
    { name: '직접 유입', value: 2000 },
    { name: 'SNS', value: 2780 },
    { name: '추천 경로', value: 1890 },
    { name: '이메일', value: 2390 },
];
const COLORS = [
    '#8884d8',
    '#82ca9d',
    '#ffc658',
    '#ff8042',
    '#0088FE',
    '#00C49F',
];

export default function ChannelPerformance() {
    return (
        <CardLayout delay={0.3}>
            <h2 className='text-xl font-semibold text-gray-100 mb-4'>
                방문 통계
            </h2>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={channelData}
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
                            {channelData.map((_, index) => (
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
                            formatter={(value, name) => [
                                `${value.toLocaleString()}건`,
                                name,
                            ]}
                        />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </CardLayout>
    );
}
