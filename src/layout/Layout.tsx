import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/common/Sidebar';
import Header from '../components/common/Header';

export default function Layout() {
    const location = useLocation();
    const isMobile = window.innerWidth <= 768;
    
    const getTitle = () => {
        switch (location.pathname) {
            case '/':
                return '개요';
            case '/products':
                return '제품';
            default:
                return '';
        }
    };
    return (
        <div className={`flex h-screen bg-gray-900 text-gray-100 overflow-hidden ${isMobile ?' pl-20' : ''}`}>
            <div className='fixed inset-0 z-0'>
                <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
                <div className='absolute inset-0 backdrop:blur-sm' />
            </div>

            <Sidebar />

            <div className='flex-1 overflow-auto relative z-10'>
                <Header title={getTitle()} />
                <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
