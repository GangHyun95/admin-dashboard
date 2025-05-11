import { AlertTriangle, DollarSign, Package, TrendingUp } from 'lucide-react';
import StatCardLayout from '../layout/StatCardLayout';
import GridLayout from '../layout/GridLayout';
import CategoryDistributionChart from '../components/overview/CategoryDistributionChart';
import SalesTrendChart from '../components/products/SalesTrendChart';
import ProductsTable from '../components/products/ProductsTable';

const statCardData = [
    {
        name: '전체 상품 수',
        icon: Package,
        value: '1,234',
        color: '#6366F1',
    },
    {
        name: '가장 많이 판매된 상품',
        icon: TrendingUp,
        value: '89',
        color: '#10B981',
    },
    {
        name: '재고 소진 임박',
        icon: AlertTriangle,
        value: '23',
        color: '#F59E0B',
    },
    {
        name: '총 매출액',
        icon: DollarSign,
        value: '$543,210',
        color: '#EF4444',
    },
];

export default function ProductsPage() {
    return (
        <>
            <StatCardLayout data={statCardData} />

            <ProductsTable />
            <GridLayout>
                <SalesTrendChart />
                <CategoryDistributionChart />
            </GridLayout>
        </>
    );
}
