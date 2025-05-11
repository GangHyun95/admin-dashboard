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

const userRetentionData = [
    { name: '1주차', retention: 100 },
    { name: '2주차', retention: 75 },
    { name: '3주차', retention: 60 },
    { name: '4주차', retention: 50 },
    { name: '5주차', retention: 45 },
    { name: '6주차', retention: 40 },
    { name: '7주차', retention: 38 },
    { name: '8주차', retention: 35 },
];

export default function UserRetention() {
    return (
        <CardLayout delay={0.5}>
            <h2 className='text-xl font-semibold text-gray-100 mb-4'>
                이용 지속률
            </h2>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <LineChart data={userRetentionData}>
                        <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                        <XAxis dataKey='name' stroke='#9CA3AF' />
                        <YAxis stroke='#9CA3AF' />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                                borderColor: '#4B5563',
                            }}
                            itemStyle={{ color: '#E5E7EB' }}
                            formatter={(value) => `${value}%`}
                        />
                        <Line
                            type='monotone'
                            dataKey='retention'
                            name='이용 지속률'
                            stroke='#8B5CF6'
                            strokeWidth={2}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </CardLayout>
    );
}
