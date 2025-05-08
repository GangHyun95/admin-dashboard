import { motion } from 'framer-motion';
import StatCard from '../components/common/StatCard';
import { BarChart2, ShoppingBag, Users, Zap } from 'lucide-react';
import SalesOverviewChart from '../components/overview/SalesOverviewChart';
import CategoryDistributionChart from '../components/overview/CategoryDistributionChart';
import SalesChannelChart from '../components/overview/SalesChannelChart';
export default function OverviewPage() {
    return (
        <>
            <motion.div
                className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <StatCard
                    name='총 매출액'
                    icon={Zap}
                    value='$12,345'
                    color='#6366F1'
                />
                <StatCard
                    name='신규 가입자'
                    icon={Users}
                    value='1,234'
                    color='#885CF6'
                />
                <StatCard
                    name='상품 총개수'
                    icon={ShoppingBag}
                    value='567'
                    color='#EC4899'
                />
                <StatCard
                    name='구매 전환율'
                    icon={BarChart2}
                    value='12.5%'
                    color='#10B981'
                />
            </motion.div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <SalesOverviewChart />
                <CategoryDistributionChart />
                <SalesChannelChart />
            </div>
        </>
    );
}
