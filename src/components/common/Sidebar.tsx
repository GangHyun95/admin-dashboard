import {
    BarChart2,
    DollarSign,
    Menu,
    Settings,
    ShoppingBag,
    ShoppingCart,
    TrendingUp,
    Users,
} from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const SIDEBAR_ITEMS = [
    { name: '개요', icon: BarChart2, color: '#6366f1', href: '/' },
    { name: '상품', icon: ShoppingBag, color: '#8B5CF6', href: '/products' },
    { name: '사용자', icon: Users, color: '#EC4899', href: '/users' },
    { name: '매출', icon: DollarSign, color: '#10B981', href: '/sales' },
    { name: '주문', icon: ShoppingCart, color: '#F59E0B', href: '/orders' },
    { name: '분석', icon: TrendingUp, color: '#3B82F6', href: '/analytics' },
    { name: '설정', icon: Settings, color: '#6EE7B7', href: '/settings' },
];

export default function Sidebar() {
    const isMobile = window.innerWidth <= 768;
    const [isSidebarOpen, setSidebarOpen] = useState(!isMobile);

    return (
        <motion.div
            className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out md:relative md:z-10 md:flex-shrink-0 ${
                isSidebarOpen ? 'w-64' : 'w-20'
            }`}
            animate={{
                width: isSidebarOpen ? (isMobile ? '100%' : 256) : 80,
            }}
            // transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
            <div className='h-full bg-gray-800/50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700'>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSidebarOpen(!isSidebarOpen)}
                    className='p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit'
                >
                    <Menu size={24} />
                </motion.button>
                <nav className='mt-8 flex-grow'>
                    {SIDEBAR_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            to={item.href}
                            onClick={() => isMobile && setSidebarOpen(false)}
                        >
                            <motion.div className='flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2'>
                                <item.icon
                                    size={20}
                                    style={{
                                        color: item.color,
                                        minWidth: 20,
                                    }}
                                />
                                <AnimatePresence>
                                    {isSidebarOpen && (
                                        <motion.span
                                            className='ml-4 whitespace-nowrap'
                                            initial={{ opacity: 0, width: 0 }}
                                            animate={{
                                                opacity: 1,
                                                width: 'auto',
                                            }}
                                            exit={
                                                isMobile
                                                    ? undefined
                                                    : { opacity: 0, width: 0 }
                                            }
                                            transition={{
                                                duration: 0.2,
                                                delay: 0.3,
                                            }}
                                        >
                                            {item.name}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </Link>
                    ))}
                </nav>
            </div>
        </motion.div>
    );
}
