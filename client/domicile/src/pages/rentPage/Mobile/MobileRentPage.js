import React from 'react'
import MobileNav from '../../sharedNav/NavBar'
import styles from './styles.module.css'
import {BsSliders, BsSortUpAlt} from 'react-icons/bs'
const MobileRentPage = () => {
  return (
    <div className='sm:block md:hidden lg:hidden'>
      <MobileNav />
      <div className='bg-[#D9D9D9] w-full h-[100svh] flex justify-center items-center'>
        <div className='border border-white w-[90%] h-full'>
          <div className='w-full h-[5svh]'></div>
          <div className='w-full h-[10svh] border border-white flex justify-between items-center relative'>
            <BsSliders fill='[#091A2B]' className='border border-black p-1.5 rounded-full text-[2rem]'/>
            <BsSortUpAlt fill='[#091A2B]' className='border border-black p-1.5 rounded-full text-[2rem]'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileRentPage