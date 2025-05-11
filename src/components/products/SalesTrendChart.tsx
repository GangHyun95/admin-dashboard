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
    { name: '1월', 매출: 4000 },
    { name: '2월', 매출: 3000 },
    { name: '3월', 매출: 5000 },
    { name: '4월', 매출: 4500 },
    { name: '5월', 매출: 6000 },
    { name: '6월', 매출: 5500 },
];

const SalesTrendChart = () => {
    return (
        <CardLayout delay={0.3}>
            <h2 className='text-xl font-semibold text-gray-100 mb-4'>
                판매 트렌드
            </h2>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <LineChart data={salesData}>
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
                        <Line
                            type='monotone'
                            dataKey='매출'
                            stroke='#8B5CF6'
                            strokeWidth={2}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </CardLayout>
    );
};
export default SalesTrendChart;
