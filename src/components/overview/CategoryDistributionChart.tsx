import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from 'recharts';
import CardLayout from '../../layout/CardLayout';

const categoryData = [
    { name: '전자제품', value: 4500 },
    { name: '패션/의류', value: 3200 },
    { name: '홈/가전', value: 2800 },
    { name: '도서/서적', value: 2100 },
    { name: '스포츠/레저', value: 1900 },
];

const COLORS = ['#6366F1', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B'];

export default function CategoryDistributionChart () {
    return (
        <CardLayout delay={0.3}>
            <h2 className='text-lg font-medium mb-4 text-gray-100'>
                상품 카테고리별 비율
            </h2>
            <div className='h-80'>
                <ResponsiveContainer width={'100%'} height={'100%'}>
                    <PieChart>
                        <Pie
                            data={categoryData}
                            cx={'50%'}
                            cy={'50%'}
                            labelLine={false}
                            outerRadius={80}
                            fill='#8884d8'
                            dataKey='value'
                            label={({ name, percent }) =>
                                `${name} ${(percent * 100).toFixed(0)}%`
                            }
                            isAnimationActive={false}
                        >
                            {categoryData.map((_, index) => (
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
};
