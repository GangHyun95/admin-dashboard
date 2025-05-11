import {
    ResponsiveContainer,
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Legend,
    Tooltip,
} from 'recharts';
import CardLayout from '../../layout/CardLayout';

const customerSegmentationData = [
    { subject: '참여도', A: 120, B: 110, fullMark: 150 },
    { subject: '재구매율', A: 98, B: 130, fullMark: 150 },
    { subject: '만족도', A: 86, B: 130, fullMark: 150 },
    { subject: '지출 금액', A: 99, B: 100, fullMark: 150 },
    { subject: '방문 빈도', A: 85, B: 90, fullMark: 150 },
    { subject: '최근 구매', A: 65, B: 85, fullMark: 150 },
];

export default function CustomerSegmentation() {
    return (
        <CardLayout delay={0.6}>
            <h2 className='text-xl font-semibold text-gray-100 mb-4'>
                고객 분석
            </h2>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <RadarChart
                        cx='50%'
                        cy='50%'
                        outerRadius='80%'
                        data={customerSegmentationData}
                    >
                        <PolarGrid stroke='#374151' />
                        <PolarAngleAxis dataKey='subject' stroke='#9CA3AF' />
                        <PolarRadiusAxis
                            angle={30}
                            domain={[0, 150]}
                            stroke='#9CA3AF'
                        />
                        <Radar
                            name='그룹 A'
                            dataKey='A'
                            stroke='#8B5CF6'
                            fill='#8B5CF6'
                            fillOpacity={0.6}
                        />
                        <Radar
                            name='그룹 B'
                            dataKey='B'
                            stroke='#10B981'
                            fill='#10B981'
                            fillOpacity={0.6}
                        />
                        <Legend />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                                borderColor: '#4B5563',
                            }}
                            itemStyle={{ color: '#E5E7EB' }}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </CardLayout>
    );
}