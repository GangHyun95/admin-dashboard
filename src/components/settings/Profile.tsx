import { User } from 'lucide-react';
import SettingSection from './SettingSection';

export default function Profile() {
    return (
        <SettingSection icon={User} title={'프로필'}>
            <div className='flex flex-col sm:flex-row items-center mb-6'>
                <img
                    src='avatar.png'
                    alt='프로필 이미지'
                    className='rounded-full w-20 h-20 object-cover mr-4'
                />

                <div>
                    <h3 className='text-lg font-semibold text-gray-100'>
                        홍길동
                    </h3>
                    <p className='text-gray-400'>hong@example.com</p>
                </div>
            </div>

            <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto'>
                프로필 수정
            </button>
        </SettingSection>
    );
}
