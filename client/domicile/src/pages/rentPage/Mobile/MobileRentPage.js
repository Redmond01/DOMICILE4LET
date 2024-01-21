import React from 'react'
import MobileNav from '../../sharedNav/NavBar'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import Image1 from '../../../assets/image1.png'
import images4 from '../../../assets/logo.png'
import { BsGeoAltFill, BsSearch, BsFacebook, BsLinkedin, BsInstagram } from 'react-icons/bs'
const MobileRentPage = () => {
  return (
      <div className='sm:block md:hidden lg:hidden'>
        <MobileNav />
        <div className='bg-[#D9D9D9] w-full h-[250svh] flex flex-col justify-start items-center gap-5'>
          <div className='w-[90%] h-[7%] space-y-2'>
            <h3 className='w-full h-[30%] text-[calc(1px_+_2svw_+_2svh)] capitalize text-[#091A2B] text-center font-poppins font-[600]'>rent listing</h3>
            <div className='w-full h-[70%] rounded-lg border border-black'>
              <form className='flex justify-center items-center w-full h-full'>
                <input type='text' className='w-[80%] h-[80%] placeholder:px-2 placeholder:font-poppins bg-transparent outline-none text-[calc(1px_+_2svw_+_2svh)] px-2' placeholder='saapade' />
                <div className='w-[20%] h-full  flex items-center bg-[#091A2B] rounded-e-lg'>
                  <BsSearch className='w-full fill-white text-[calc(1px_+_3svw_+_3svh)]' />
                </div>
              </form>
            </div>
          </div>

          <div className='w-[90%] h-[77%] flex flex-col flex-wrap gap-4'>
            <div className='w-[48%] h-[40svh]  rounded-2xl bg-white border border-[#091A2B] shadow-black shadow-lg'>
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
                  <BsGeoAltFill className='fill-[grey] text-[calc(1px_+_1.5svw_+_1.5svh)]' />
                  <h3 className=' text-[calc(1px_+_1svw_+_1svh)]'>
                    saapade
                  </h3>
                </div>
              </div>
            </div>
            <div className='w-[48%] h-[40svh]  rounded-2xl bg-white border border-[#091A2B] shadow-black shadow-lg'>
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
                  <BsGeoAltFill className='fill-[grey] text-[calc(1px_+_1.5svw_+_1.5svh)]' />
                  <h3 className=' text-[calc(1px_+_1svw_+_1svh)]'>
                    saapade
                  </h3>
                </div>
              </div>
            </div>
            <div className='w-[48%] h-[40svh]  rounded-2xl bg-white border border-[#091A2B] shadow-black shadow-lg'>
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
                  <BsGeoAltFill className='fill-[grey] text-[calc(1px_+_1.5svw_+_1.5svh)]' />
                  <h3 className=' text-[calc(1px_+_1svw_+_1svh)]'>
                    saapade
                  </h3>
                </div>
              </div>
            </div>
            <div className='w-[48%] h-[40svh]  rounded-2xl bg-white border border-[#091A2B] shadow-black shadow-lg'>
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
                  <BsGeoAltFill className='fill-[grey] text-[calc(1px_+_1.5svw_+_1.5svh)]' />
                  <h3 className=' text-[calc(1px_+_1svw_+_1svh)]'>
                    saapade
                  </h3>
                </div>
              </div>
            </div>
            <div className='w-[48%] h-[40svh]  rounded-2xl bg-white border border-[#091A2B] shadow-black shadow-lg'>
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
                  <BsGeoAltFill className='fill-[grey] text-[calc(1px_+_1.5svw_+_1.5svh)]' />
                  <h3 className=' text-[calc(1px_+_1svw_+_1svh)]'>
                    saapade
                  </h3>
                </div>
              </div>
            </div>
            <div className='w-[48%] h-[40svh]  rounded-2xl bg-white border border-[#091A2B] shadow-black shadow-lg'>
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
                  <BsGeoAltFill className='fill-[grey] text-[calc(1px_+_1.5svw_+_1.5svh)]' />
                  <h3 className=' text-[calc(1px_+_1svw_+_1svh)]'>
                    ishara
                  </h3>
                </div>
              </div>
            </div>
            <div className='w-[48%] h-[40svh]  rounded-2xl bg-white border border-[#091A2B] shadow-black shadow-lg'>
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
                  <BsGeoAltFill className='fill-[grey] text-[calc(1px_+_1.5svw_+_1.5svh)]' />
                  <h3 className=' text-[calc(1px_+_1svw_+_1svh)]'>
                    saapade
                  </h3>
                </div>
              </div>
            </div>
            <div className='w-[48%] h-[40svh]  rounded-2xl bg-white border border-[#091A2B] shadow-black shadow-lg'>
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
                  <BsGeoAltFill className='fill-[grey] text-[calc(1px_+_1.5svw_+_1.5svh)]' />
                  <h3 className=' text-[calc(1px_+_1svw_+_1svh)]'>
                    ishara
                  </h3>
                </div>
              </div>
            </div>
          </div>


          <div className={styles.footer}>
            <div className='w-full h-[10svh] flex justify-center items-center'>
              <img src={images4} alt='img' className='w-[25svh] h-auto' />
            </div>
            <div className='w-full h-[20svh] '>

            </div>
            <div className='w-full h-[9svh] flex justify-center items-center gap-8'>
              <Link to={'#'}><BsFacebook fill='blue' className='text-[6svh]' /></Link>
              <Link to={'#'}><BsInstagram fill='white' className='text-[6svh]' /></Link>
              <Link to={'#'}><BsLinkedin fill='skyblue' className='text-[6svh]' /></Link>
            </div>
          </div>


        </div>
      </div>
  )
}

export default MobileRentPage 