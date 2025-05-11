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

const userGrowthData = [
    { month: '1월', users: 1000 },
    { month: '2월', users: 1500 },
    { month: '3월', users: 2000 },
    { month: '4월', users: 3000 },
    { month: '5월', users: 4000 },
    { month: '6월', users: 5000 },
];

export default function UserGrowthChart() {
    return (
        <CardLayout delay={0.3}>
            <h2 className='text-xl font-semibold text-gray-100 mb-4'>
                회원 증가
            </h2>
            <div className='h-[320px]'>
                <ResponsiveContainer width='100%' height='100%'>
                    <LineChart data={userGrowthData}>
                        <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                        <XAxis dataKey='month' stroke='#9CA3AF' />
                        <YAxis stroke='#9CA3AF' />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                                borderColor: '#4B5563',
                            }}
                            itemStyle={{ color: '#E5E7EB' }}
                            formatter={(value) => [
                                `${value.toLocaleString()}명`,
                                '회원 수',
                            ]}
                        />
                        <Line
                            type='monotone'
                            dataKey='users'
                            stroke='#8B5CF6'
                            strokeWidth={2}
                            dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </CardLayout>
    );
}
