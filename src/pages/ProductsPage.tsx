import { motion } from 'framer-motion';
import StatCard from '../components/common/StatCard';
import { AlertTriangle, DollarSign, Package, TrendingUp } from 'lucide-react';
import ChartLayout from '../layout/ChartLayout';
import CategoryDistributionChart from '../components/overview/CategoryDistributionChart';
import SalesTrendChart from '../components/products/SalesTrendChart';
import ProductsTable from '../components/products/ProductsTable';
export default function ProductsPage() {
    return (
        <>
            <motion.div
                className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <StatCard
                    name='전체 상품 수'
                    icon={Package}
                    value='1234'
                    color='#6366F1'
                />
                <StatCard
                    name='가장 많이 판매된 상품'
                    icon={TrendingUp}
                    value='89'
                    color='#10B981'
                />
                <StatCard
                    name='재고 소진 임박'
                    icon={AlertTriangle}
                    value='23'
                    color='#F59E0B'
                />
                <StatCard
                    name='총 매출액'
                    icon={DollarSign}
                    value='$543,210'
                    color='#EF4444'
                />
            </motion.div>

            <ProductsTable />
            <ChartLayout>
                <SalesTrendChart />
                <CategoryDistributionChart />
            </ChartLayout>
        </>
    );
}
