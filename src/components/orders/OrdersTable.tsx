import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Eye } from 'lucide-react';
import CardLayout from '../../layout/CardLayout';

const orderData = [
    {
        id: 'ORD001',
        customer: '김철수',
        total: 235.4,
        status: '배송 완료',
        date: '2023-07-01',
    },
    {
        id: 'ORD002',
        customer: '이영희',
        total: 412.0,
        status: '처리 중',
        date: '2023-07-02',
    },
    {
        id: 'ORD003',
        customer: '박민수',
        total: 162.5,
        status: '배송 중',
        date: '2023-07-03',
    },
    {
        id: 'ORD004',
        customer: '최수진',
        total: 750.2,
        status: '대기 중',
        date: '2023-07-04',
    },
    {
        id: 'ORD005',
        customer: '정다은',
        total: 95.8,
        status: '배송 완료',
        date: '2023-07-05',
    },
    {
        id: 'ORD006',
        customer: '한지훈',
        total: 310.75,
        status: '처리 중',
        date: '2023-07-06',
    },
    {
        id: 'ORD007',
        customer: '김민재',
        total: 528.9,
        status: '배송 중',
        date: '2023-07-07',
    },
    {
        id: 'ORD008',
        customer: '박지수',
        total: 189.6,
        status: '배송 완료',
        date: '2023-07-08',
    },
];

export default function OrdersTable() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredOrders, setFilteredOrders] = useState(orderData);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = orderData.filter(
            (order) =>
                order.id.toLowerCase().includes(term) ||
                order.customer.toLowerCase().includes(term)
        );
        setFilteredOrders(filtered);
    };

    return (
        <CardLayout className='lg:col-span-2' delay={0.4}>
            <div className='flex justify-between items-center mb-6'>
                <h2 className='text-xl font-semibold text-gray-100'>
                    주문 목록
                </h2>
                <div className='relative'>
                    <input
                        type='text'
                        placeholder='주문 검색...'
                        className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <Search
                        className='absolute left-3 top-2.5 text-gray-400'
                        size={18}
                    />
                </div>
            </div>

            <div className='overflow-x-auto'>
                <table className='min-w-full divide-y divide-gray-700'>
                    <thead>
                        <tr>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                주문 ID
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                고객명
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                총 금액
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                상태
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                날짜
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                작업
                            </th>
                        </tr>
                    </thead>

                    <tbody className='divide divide-gray-700'>
                        {filteredOrders.map((order) => (
                            <motion.tr
                                key={order.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
                                    {order.id}
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
                                    {order.customer}
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
                                    ${order.total.toLocaleString()}
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                                    <span
                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                            order.status === '배송 완료'
                                                ? 'bg-green-100 text-green-800'
                                                : order.status === '처리 중'
                                                ? 'bg-yellow-100 text-yellow-800'
                                                : order.status === '배송 중'
                                                ? 'bg-blue-100 text-blue-800'
                                                : 'bg-red-100 text-red-800'
                                        }`}
                                    >
                                        {order.status}
                                    </span>
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                                    {order.date}
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                                    <button className='text-indigo-400 hover:text-indigo-300 mr-2'>
                                        <Eye size={18} />
                                    </button>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </CardLayout>
    );
}
