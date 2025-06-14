import { useState } from 'react';
import SettingSection from './SettingSection';
import { HelpCircle, Plus } from 'lucide-react';

export default function ConnectedAccounts() {
    const [connectedAccounts, setConnectedAccounts] = useState([
        {
            id: 1,
            name: 'Google',
            connected: true,
            icon: '/google.png',
        },
        {
            id: 2,
            name: 'Facebook',
            connected: false,
            icon: '/facebook.svg',
        },
        {
            id: 3,
            name: 'Twitter',
            connected: true,
            icon: '/x.png',
        },
    ]);
    return (
        <SettingSection icon={HelpCircle} title={'연결된 계정'}>
            {connectedAccounts.map((account) => (
                <div
                    key={account.id}
                    className='flex items-center justify-between py-3'
                >
                    <div className='flex gap-1'>
                        <img
                            src={account.icon}
                            alt={`${account.name} 아이콘`}
                            className='size-6 object-cover rounded-full mr-2'
                        />
                        <span className='text-gray-300'>{account.name}</span>
                    </div>
                    <button
                        className={`px-3 py-1 rounded ${
                            account.connected
                                ? 'bg-green-600 hover:bg-green-700'
                                : 'bg-gray-600 hover:bg-gray-700'
                        } transition duration-200`}
                        onClick={() => {
                            setConnectedAccounts(
                                connectedAccounts.map((acc) => {
                                    if (acc.id === account.id) {
                                        return {
                                            ...acc,
                                            connected: !acc.connected,
                                        };
                                    }
                                    return acc;
                                })
                            );
                        }}
                    >
                        {account.connected ? '연결됨' : '연결'}
                    </button>
                </div>
            ))}
            <button className='mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200'>
                <Plus size={18} className='mr-2' /> 계정 추가
            </button>
        </SettingSection>
    );
}
