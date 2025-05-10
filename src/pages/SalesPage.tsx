import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';
import ChartLayout from '../layout/ChartLayout';
import StatCardLayout from '../layout/StatCardLayout';
import SalesOverviewChart from '../components/sales/SalesOverviewChart';
import SalesByCategoryChart from '../components/sales/SalesByCategoryChart';
import DailySalesTrend from '../components/sales/DailySalesTrend';

const statCardData = [
    {
        name: '총 매출액',
        icon: DollarSign,
        value: '$1,234,567',
        color: '#6366F1',
    },
    {
        name: '평균 주문 금액',
        icon: ShoppingCart,
        value: '$78.90',
        color: '#10B981',
    },
    {
        name: '구매 전환율',
        icon: TrendingUp,
        value: '3.45%',
        color: '#F59E0B',
    },
    {
        name: '매출 증가율',
        icon: CreditCard,
        value: '12.3%',
        color: '#EF4444',
    },
];
const SalesPage = () => {
    return (
        <>
            <StatCardLayout data={statCardData} />
            <SalesOverviewChart />
            <ChartLayout>
                <SalesByCategoryChart />
                <DailySalesTrend />
            </ChartLayout>
        </>
    );
};
export default SalesPage;
