import { TrendingUp, Users, ShoppingBag, DollarSign } from 'lucide-react';
import CardLayout from '../../layout/CardLayout';

const INSIGHTS = [
    {
        icon: TrendingUp,
        color: 'text-green-500',
        insight: '이메일 마케팅 효과로 수익이 지난달보다 15% 상승했습니다.',
    },
    {
        icon: Users,
        color: 'text-blue-500',
        insight:
            '새로운 멤버십 프로그램 출시 이후 고객 유지율이 8% 개선되었습니다.',
    },
    {
        icon: ShoppingBag,
        color: 'text-purple-500',
        insight:
            '최근 시장 동향에 따르면 "전자제품" 카테고리가 가장 높은 성장 가능성을 보이고 있습니다.',
    },
    {
        icon: DollarSign,
        color: 'text-yellow-500',
        insight:
            '가격 전략을 최적화하면 전체 수익률이 5~7%가량 높아질 수 있습니다.',
    },
];

export default function AIPoweredInsights() {
    return (
        <CardLayout delay={1.0}>
            <h2 className='text-xl font-semibold text-gray-100 mb-4'>
                AI 기반 인사이트
            </h2>
            <div className='space-y-4'>
                {INSIGHTS.map((item, index) => (
                    <div key={index} className='flex items-center space-x-3'>
                        <div
                            className={`p-2 rounded-full ${item.color}/20`}
                        >
                            <item.icon className={`size-6 ${item.color}`} />
                        </div>
                        <p className='text-gray-300'>{item.insight}</p>
                    </div>
                ))}
            </div>
        </CardLayout>
    );
}
