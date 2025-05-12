import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend,
} from 'recharts';
import CardLayout from '../../layout/CardLayout';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE'];

const userDemographicsData = [
    { name: '18-24세', value: 20 },
    { name: '25-34세', value: 30 },
    { name: '35-44세', value: 25 },
    { name: '45-54세', value: 15 },
    { name: '55세 이상', value: 10 },
];

export default function UserDemographicsChart() {
    return (
        <CardLayout className='lg:col-span-2' delay={0.5}>
            <h2 className='text-xl font-semibold text-gray-100 mb-4'>
                사용자 연령대 분포
            </h2>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={userDemographicsData}
                            cx='50%'
                            cy='50%'
                            outerRadius={100}
                            fill='#8884d8'
                            dataKey='value'
                            label={({ name, percent }) =>
                                `${name} ${(percent * 100).toFixed(0)}%`
                            }
                            isAnimationActive={false}
                        >
                            {userDemographicsData.map((_, index) => (
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
