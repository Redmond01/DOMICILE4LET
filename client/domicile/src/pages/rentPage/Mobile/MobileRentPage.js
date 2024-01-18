import React from 'react'
import MobileNav from '../../sharedNav/NavBar'

const MobileRentPage = () => {
  return (
    <div className='sm:block md:hidden lg:hidden'>
      <MobileNav />
      <div className='bg-[#091A2B] w-full h-[100svh] flex justify-center items-center'>
        <div className='border border-white w-[90%] h-full'>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default MobileRentPage