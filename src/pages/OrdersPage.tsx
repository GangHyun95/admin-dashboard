import { CheckCircle, Clock, DollarSign, ShoppingBag } from 'lucide-react';
import GridLayout from '../layout/GridLayout';
import StatCardLayout from '../layout/StatCardLayout';
import DailyOrders from '../components/orders/DailyOrders';
import OrderDistribution from '../components/orders/OrderDistribution';
import OrdersTable from '../components/orders/OrdersTable';

const statCardData = [
    {
        name: '총 주문 수',
        icon: ShoppingBag,
        value: '1,234',
        color: '#6366F1',
    },
    {
        name: '대기 중인 주문',
        icon: Clock,
        value: '56',
        color: '#F59E0B',
    },
    {
        name: '완료된 주문',
        icon: CheckCircle,
        value: '1,178',
        color: '#10B981',
    },
    {
        name: '총 매출액',
        icon: DollarSign,
        value: '$98,765',
        color: '#EF4444',
    },
];

export default function OrdersPage() {
    return (
        <>
            <StatCardLayout data={statCardData} />

            <GridLayout className='mb-8'>
                <DailyOrders />
                <OrderDistribution />
            </GridLayout>

            <OrdersTable />
        </>
    );
}
