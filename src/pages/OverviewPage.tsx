import { BarChart2, ShoppingBag, Users, Zap } from 'lucide-react';
import SalesOverviewChart from '../components/overview/SalesOverviewChart';
import CategoryDistributionChart from '../components/overview/CategoryDistributionChart';
import SalesChannelChart from '../components/overview/SalesChannelChart';
import ChartLayout from '../layout/ChartLayout';
import StatCardLayout from '../layout/StatCardLayout';

const statCardData = [
    {
        name: '총 매출액',
        icon: Zap,
        value: '$12,345',
        color: '#6366F1',
    },
    {
        name: '신규 가입자',
        icon: Users,
        value: '1,234',
        color: '#885CF6',
    },
    {
        name: '상품 총개수',
        icon: ShoppingBag,
        value: '567',
        color: '#EC4899',
    },
    {
        name: '구매 전환율',
        icon: BarChart2,
        value: '12.5%',
        color: '#10B981',
    },
];

export default function OverviewPage() {
    return (
        <>
            <StatCardLayout data={statCardData} />

            <ChartLayout>
                <SalesOverviewChart />
                <CategoryDistributionChart />
                <SalesChannelChart />
            </ChartLayout>
        </>
    );
}
