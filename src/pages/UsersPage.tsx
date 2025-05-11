import { UserCheck, UserPlus, UsersIcon, UserX } from 'lucide-react';
import StatCardLayout from '../layout/StatCardLayout';
import UsersTable from '../components/users/UsersTable';
import UserGrowthChart from '../components/users/UserGrowthChart';
import UserActivityHeatmap from '../components/users/UserActivityHeatmap';
import UserDemoGraphicsChart from '../components/users/UserDemoGraphicsChart';
import GridLayout from '../layout/GridLayout';

const statCardData = [
    {
        name: '전체 회원 수',
        icon: UsersIcon,
        value: '152,845',
        color: '#6366F1',
    },
    {
        name: '신규 가입자',
        icon: UserPlus,
        value: '243',
        color: '#10B981',
    },
    {
        name: '활성 회원',
        icon: UserCheck,
        value: '98,520',
        color: '#F59E0B',
    },
    {
        name: '탈퇴한 회원',
        icon: UserX,
        value: '2.4%',
        color: '#EF4444',
    },
];

export default function UsersPage() {
    return (
        <>
            <StatCardLayout data={statCardData} />
            <UsersTable />

            <GridLayout>
                <UserGrowthChart />
                <UserActivityHeatmap />
                <UserDemoGraphicsChart />
            </GridLayout>
        </>
    );
}
