import React from 'react'
import MobileNav from '../../sharedNav/NavBar'
// import styles from './styles.module.css'
import Image1 from '../../../assets/image1.png'
import { BsGeoAltFill } from 'react-icons/bs'
const MobileRentPage = () => {
  return (
    <div className='sm:block md:hidden lg:hidden'>
      <MobileNav />
      <div className='bg-[#D9D9D9] w-full h-[100svh] flex flex-col justify-center items-center'>
        <div className='w-full h-[5svh]'></div>
        <div className='w-[90%] h-[90%] flex flex-col flex-wrap gap-2'>
          <div className='w-[50%] h-[40svh]  rounded-2xl bg-white border border-[#091A2B] shadow-black shadow-lg'>
            <div className='w-full h-[60%] '>
              <img src={Image1} alt='img' className='object-fill w-full h-full' />
            </div>
            <div className='w-full h-[40%]  px-2'>
              <div className=' w-full h-[40%]'>
                <h3 className=' text-[calc(1px_+_1.2svw_+_1.2svh)] font-poppins font-[800] capitalize'>
                  2 bedroom flat
                </h3>
              </div>
              <div className=' w-full h-[30%] flex items-center'>
                <h3 className=' text-[calc(1px_+_1svw_+_1svh)] font-poppins font-[400]'>
                  300000
                </h3>
              </div>
              <div className=' w-full h-[30%] flex items-center'>
                  <BsGeoAltFill className='fill-[grey] text-[calc(1px_+_1.5svw_+_1.5svh)]'/>
                <h3 className=' text-[calc(1px_+_1svw_+_1svh)]'>
                  saapade
                </h3>
              </div>
            </div>
          </div>
          <div className='w-[50%] h-[40svh]  rounded-2xl bg-white border border-[#091A2B] shadow-black shadow-lg'>
            <div className='w-full h-[60%] '>
              <img src={Image1} alt='img' className='object-fill w-full h-full' />
            </div>
            <div className='w-full h-[40%]  px-2'>
              <div className=' w-full h-[40%]'>
                <h3 className=' text-[calc(1px_+_1.2svw_+_1.2svh)] font-poppins font-[800] capitalize'>
                  A room self contain
                </h3>
              </div>
              <div className=' w-full h-[30%] flex items-center'>
                <h3 className=' text-[calc(1px_+_1svw_+_1svh)] font-poppins font-[400]'>
                  150000
                </h3>
              </div>
              <div className=' w-full h-[30%] flex items-center'>
                  <BsGeoAltFill className='fill-[grey] text-[calc(1px_+_1.5svw_+_1.5svh)]'/>
                <h3 className=' text-[calc(1px_+_1svw_+_1svh)]'>
                  ishara
                </h3>
              </div>
            </div>
          </div>
          <div className='w-[50%] h-[40svh]  rounded-2xl bg-white border border-[#091A2B] shadow-black shadow-lg'>
            <div className='w-full h-[60%] '>
              <img src={Image1} alt='img' className='object-fill w-full h-full' />
            </div>
            <div className='w-full h-[40%]  px-2'>
              <div className=' w-full h-[40%]'>
                <h3 className=' text-[calc(1px_+_1.2svw_+_1.2svh)] font-poppins font-[800] capitalize'>
                  2 bedroom flat
                </h3>
              </div>
              <div className=' w-full h-[30%] flex items-center'>
                <h3 className=' text-[calc(1px_+_1svw_+_1svh)] font-poppins font-[400]'>
                  300000
                </h3>
              </div>
              <div className=' w-full h-[30%] flex items-center'>
                  <BsGeoAltFill className='fill-[grey] text-[calc(1px_+_1.5svw_+_1.5svh)]'/>
                <h3 className=' text-[calc(1px_+_1svw_+_1svh)]'>
                  saapade
                </h3>
              </div>
            </div>
          </div>
          <div className='w-[50%] h-[40svh]  rounded-2xl bg-white border border-[#091A2B] shadow-black shadow-lg'>
            <div className='w-full h-[60%] '>
              <img src={Image1} alt='img' className='object-fill w-full h-full' />
            </div>
            <div className='w-full h-[40%]  px-2'>
              <div className=' w-full h-[40%]'>
                <h3 className=' text-[calc(1px_+_1.2svw_+_1.2svh)] font-poppins font-[800] capitalize'>
                  A room self contain
                </h3>
              </div>
              <div className=' w-full h-[30%] flex items-center'>
                <h3 className=' text-[calc(1px_+_1svw_+_1svh)] font-poppins font-[400]'>
                  150000
                </h3>
              </div>
              <div className=' w-full h-[30%] flex items-center'>
                  <BsGeoAltFill className='fill-[grey] text-[calc(1px_+_1.5svw_+_1.5svh)]'/>
                <h3 className=' text-[calc(1px_+_1svw_+_1svh)]'>
                  ishara
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileRentPage 