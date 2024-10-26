import { BsCoin } from "react-icons/bs";
import logo from '../../assets/image/logo.png';
import bannerMain from '../../assets/image/banner-main.png';
import './Header.css';

import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Header = ({handleClaimCoins,claimCoins}) => {
    return (
        
    <div className=''>

        <div className=' pb-28   '>
            <nav className='flex  backdrop-blur-xl pb-3 bg-white/60 fixed top-0 right-0 left-0 pr-6 pl-6 md:pr-28 md:pl-28 pt-5 justify-between items-center  '>
                <div>
                    <img className="w-12 h-12" src={logo} alt="" />
                </div>
                <div className='space-x-3 font-bold flex items-center  text-lg'>
                    <a className="hidden md:block" href="">Home</a>
                    <a className="hidden md:block" href="">Team</a>
                    <a className="hidden md:block" href="">Blogs</a>
                    <button className="flex items-center gap-2 p-2 bg-lime-400 rounded-lg border">coins : {claimCoins} <span className="text-yellow-700 text-xl"><BsCoin></BsCoin></span>  </button>
                </div>
            </nav>
        </div>

        <div className='md:w-10/12 w-11/12 mx-auto'>    

            {/* banner section */}

            <div className='banner-div bg-black text-white p-10  text-center space-y-3'>
                <img className='mx-auto' src={bannerMain} alt="" />
                <h1 className='text-2xl font-bold'>
                    Assemble Your Ultimate Dream 11 Cricket Team
                </h1>
                <p className='text-gray-400'>
                    Beyond Boundaries Beyond Limits
                </p>
                <div>
                <button onClick={handleClaimCoins} className='py-3 px-6 rounded-lg bg-lime-400 text-black font-bold border '>Claim Coins</button>
                <ToastContainer  > </ToastContainer>
                </div>
            </div>


        </div>

    </div>

    );
};

export default Header;