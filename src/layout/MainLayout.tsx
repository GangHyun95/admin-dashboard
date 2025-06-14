import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/common/Sidebar';
import Header from '../components/common/Header';
import { useEffect, useRef } from 'react';

export default function MainLayout() {
    const location = useLocation();
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const getTitle = () => {
        switch (location.pathname) {
            case '/':
                return '개요';
            case '/products':
                return '상품';
            case '/users':
                return '사용자';
            case '/sales':
                return '매출';
            case '/orders':
                return '주문';
            case '/analytics':
                return '분석';
            case '/settings':
                return '설정';
            default:
                return '';
        }
    };

    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo(0, 0);
        }
    }, [location.pathname]);
    return (
        <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden pl-20 md:pl-0'>
            <div className='fixed inset-0 z-0'>
                <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
                <div className='absolute inset-0 backdrop-blur-sm' />
            </div>

            <Sidebar />

            <div
                ref={scrollContainerRef}
                className='flex-1 overflow-auto relative z-10 bg-gray-900'
            >
                <Header title={getTitle()} />
                <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
