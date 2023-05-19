import { Outlet } from 'react-router-dom'
import logo from '../assets/Logo.svg';

const Public = () => {
    return (
        <div className='min-h-screen bg-slate-800 flex flex-col justify-center items-center gap-10'>
            <div className=''>
                <img className='w-[300px]' src={logo} alt="Cronos app" />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Public
