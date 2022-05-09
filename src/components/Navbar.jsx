import React, {useState, useCallback} from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-scroll'


function Navbar() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const navigate = useNavigate();
    const loginClick = useCallback(() => navigate('/login', {replace: true}), [navigate]);
    const signupClick = useCallback(() => navigate('/signup', {replace: true}), [navigate]);
    const homeClick = useCallback(() => navigate('/', {replace: true}), [navigate]);

  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>DyadLearning</h1>
                <ul className='hidden md:flex hover:cursor-pointer'>
                    <li><Link to="home" smooth={true} duration={500} onClick={homeClick}>Home</Link></li>
                    <li><Link to="support" smooth={true} offset={-75} duration={500}>Support</Link></li>
                    <li><Link to="faq" smooth={true} offset={50} duration={500}>FAQ</Link></li>
                </ul>
            </div>
            <div className='hidden md:flex pr-4'>
                <button className='border-none bg-transparent text-black mr-4' onClick={loginClick}>Sign In</button>                
                <button className='px-8 py-3' onClick={signupClick}>Sign Up</button>                
            </div>
            <div className='md:hidden mr-4' onClick={handleClick}>
                {!nav ? <MenuIcon className='w-5'/> : <XIcon className='w-5' /> }
            </div>
        </div>

        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
            <li className='border-b-2 border-zinc-300 w-full'>FAQ</li>
            <li className='border-b-2 border-zinc-300 w-full'>Home</li>
            <li className='border-b-2 border-zinc-300 w-full'>Support</li>
            <div className='flex flex-col my-4'>
                <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
                <button className='px-8 py-3'>Sign Up</button>
            </div>
        </ul>
    </div>
  )
}

export default Navbar
