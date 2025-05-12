import { Lock } from 'lucide-react';
import SettingSection from './SettingSection';
import ToggleSwitch from './ToggleSwitch';
import { useState } from 'react';

export default function Security() {
    const [twoFactor, setTwoFactor] = useState(false);

    return (
        <SettingSection icon={Lock} title={'보안 설정'}>
            <ToggleSwitch
                label={'2단계 인증'}
                isOn={twoFactor}
                onToggle={() => setTwoFactor(!twoFactor)}
            />
            <div className='mt-4'>
                <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200'>
                    비밀번호 변경
                </button>
            </div>
        </SettingSection>
    );
}
