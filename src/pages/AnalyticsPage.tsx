import AIPoweredInsights from '../components/analytics/AIPoweredInsights';
import ChannelPerformance from '../components/analytics/ChannelPerformance';
import CustomerSegmentation from '../components/analytics/CustomerSegmentation';
import OverviewCards from '../components/analytics/OverviewCards';
import ProductPerformance from '../components/analytics/ProductPerformance';
import RevenueChart from '../components/analytics/RevenueChart';
import UserRetention from '../components/analytics/UserRetention';
import GridLayout from '../layout/GridLayout';

export default function AnalyticsPage() {
    return (
        <>
            <OverviewCards />
            <RevenueChart />
            <GridLayout className='mb-8'>
                <ChannelPerformance />
                <ProductPerformance />
                <UserRetention />
                <CustomerSegmentation />
            </GridLayout>

            <AIPoweredInsights />
        </>
    );
}
