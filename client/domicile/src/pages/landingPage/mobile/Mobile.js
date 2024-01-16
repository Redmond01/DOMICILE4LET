import Home from '../../../assets/sideHome.png'
import image1 from '../../../assets/image3.png'
import House1 from '../../../assets/house1.png'
import House2 from '../../../assets/house2.png'
import images1 from '../../../assets/image10.png'
import images2 from '../../../assets/image9.png'
import images3 from '../../../assets/HousePlant.png'
import images4 from '../../../assets/logo.png'
import {FaArrowAltCircleRight, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import styles from '../mobile/style.module.css'
import MobileNav from '../../sharedNav/NavBar'


import { Link, useLocation, useNavigate } from 'react-router-dom'



function Mobile() {
  const navigation = useNavigate()
const handleMobileSubit = (e) => {
  // const location= useLocation()

  navigation('rent')


}

  return (
    <div className="sm:block md:hidden lg:hidden w-full h-[450svh] bg-[#091A2B] relative">
      {/* <div className="w-full h-[10svh] py-[25px] text-white flex justify-between items-center gap-[2rem] px-[25px]">
                <img src={MobileLogo} alt="img" className="w-[2.25rem] h-[2rem]"/>
                <FaAlignJustify className="w-[1.95rem] h-[1.2rem]"/>
            </div> */}
      <MobileNav />
      <div className="w-full h-[35svh] max-h-[40svh] flex justify-center items-center">
        <div className='w-[90%] h-[90%] flex justify-center items-center flex-col'>
          <h3 className={styles.mobile}>
            easy way to <br /> find your <br />dream home
          </h3>
        </div>
      </div>
      <div className="w-full h-[30svh] max-h-[35svh] flex justify-center items-center">
        <div className='w-[90%] h-[90%] flex justify-center items-center flex-shrink'>
          <h3 className='text-[#fff] text-center font-poppins text-[calc(1px_+_1.5vw_+_1.5vh)] font-[300] leading-[150%] tracking-[0.15rem]'>
            Find a variety of properties <br /> that suit you very easily.<br />
            forget all difficulties in <br />finding a residence for you
          </h3>
        </div>
      </div>
      <div className="w-full h-[20svh] max-h-[40svh] flex justify-center items-center">
        <div className='w-[90%] h-[90%] flex justify-center items-center '>
          <form className="flex rounded-md h-[2.2rem] bg-[#CACACA] outline-none" onSubmit={handleMobileSubit}>
            <input type="input" className="bg-[#CACACA] h-[2rem] outline-none placeholder:text-[calc(1px_+_1svw_+_1svh)] placeholder:font-[600] placeholder:leading-[150%] capitalize rounded-s-md" placeholder="search by location" />
            <input type="submit" className="text-[#fff] bg-[#3B4876] font-poppins text-[calc(1px_+_1svw_+_1svh)] font-[600] leading-[150%] capitalize rounded-e-md tracking-[2px] w-[80px]" placeholder="search" />
          </form>
        </div>
      </div>
      <div className="w-full h-[auto] ">
        <img src={Home} alt="img" className='w-full h-[auto] object-contain' />
      </div>
      <div className=" w-full h-[110svh] max-h-[130svh] bg-[#D9D9D9]">
        <div className='w-full h-[5%]'></div>
        <div className="w-full h-[5%] flex justify-start">
          <h3 className="text-[#091A2B] font-poppins text-[calc(1px_+_3svw_+_3svh)] font-[400] leading-[100%] px-6 capitalize">
            porpular residence
          </h3>
        </div>
        <div className="w-full h-[85%] p-[1.5rem] flex flex-col gap-2 flex-wrap flex-shrink-0 justify-center ">
          <div className="w-[50%] h-[40%] p-2 space-y-[5px] bg-[#F1F3F4] rounded-[0.37rem] ">
            <div className='w-full h-[60%]'>
              <img src={image1} alt="img" className="w-full h-full object-cover" />
            </div>
            <div className='w-[90%] h-[40%]'>
              <h3 className="text-[#3b4876] font-poppins text-[calc(1px_+_2svw_+_2svh)] font-[600] leading-[100%]">
                $200,000.
              </h3>
              <h3 className="text-[#091a2b] font-poppins text-[calc(1px_+_1svw_+_1svh)] font-[600] leading-[100%]">
                Domicile4let homes
              </h3>
              <h3 className="text-[#091a2b] font-poppins text-[calc(1px_+_.4svw_+_.4svh)] font-[600] leading-[100%] w-[70%] h-[1.68rem]">
                Lorem ipsum dolor sit amet consectetur. Risus ultricies massa et malesuada pellentesque massa. Tortor cras odio mattis dignissim.
              </h3>
            </div>
          </div>
          <div className="w-[50%] h-[40%] p-2 space-y-[5px] bg-[#F1F3F4] rounded-[0.37rem] ">
            <div className='w-full h-[60%]'>
              <img src={image1} alt="img" className="w-full h-full object-cover" />
            </div>
            <div className='w-[90%] h-[40%]'>
              <h3 className="text-[#3b4876] font-poppins text-[calc(1px_+_2svw_+_2svh)] font-[600] leading-[100%]">
                $200,000.
              </h3>
              <h3 className="text-[#091a2b] font-poppins text-[calc(1px_+_1svw_+_1svh)] font-[600] leading-[100%]">
                Domicile4let homes
              </h3>
              <h3 className="text-[#091a2b] font-poppins text-[calc(1px_+_.4svw_+_.4svh)] font-[600] leading-[100%] w-[70%] h-[1.68rem]">
                Lorem ipsum dolor sit amet consectetur. Risus ultricies massa et malesuada pellentesque massa. Tortor cras odio mattis dignissim.
              </h3>
            </div>
          </div>
          <div className="w-[50%] h-[40%] p-2 space-y-[5px] bg-[#F1F3F4] rounded-[0.37rem] ">
            <div className='w-full h-[60%]'>
              <img src={image1} alt="img" className="w-full h-full object-cover" />
            </div>
            <div className='w-[90%] h-[40%]'>
              <h3 className="text-[#3b4876] font-poppins text-[calc(1px_+_2svw_+_2svh)] font-[600] leading-[100%]">
                $200,000.
              </h3>
              <h3 className="text-[#091a2b] font-poppins text-[calc(1px_+_1svw_+_1svh)] font-[600] leading-[100%]">
                Domicile4let homes
              </h3>
              <h3 className="text-[#091a2b] font-poppins text-[calc(1px_+_.4svw_+_.4svh)] font-[600] leading-[100%] w-[70%] h-[1.68rem]">
                Lorem ipsum dolor sit amet consectetur. Risus ultricies massa et malesuada pellentesque massa. Tortor cras odio mattis dignissim.
              </h3>
            </div>
          </div>
          <div className="w-[50%] h-[40%] p-2 space-y-[5px] bg-[#F1F3F4] rounded-[0.37rem] ">
            <div className='w-full h-[60%]'>
              <img src={image1} alt="img" className="w-full h-full object-cover" />
            </div>
            <div className='w-[90%] h-[40%]'>
              <h3 className="text-[#3b4876] font-poppins text-[calc(1px_+_2svw_+_2svh)] font-[600] leading-[100%]">
                $200,000.
              </h3>
              <h3 className="text-[#091a2b] font-poppins text-[calc(1px_+_1svw_+_1svh)] font-[600] leading-[100%]">
                Domicile4let homes
              </h3>
              <h3 className="text-[#091a2b] font-poppins text-[calc(1px_+_.4svw_+_.4svh)] font-[600] leading-[100%] w-[70%] h-[1.68rem]">
                Lorem ipsum dolor sit amet consectetur. Risus ultricies massa et malesuada pellentesque massa. Tortor cras odio mattis dignissim.
              </h3>
            </div>
          </div>
        </div>
        <div className='w-full h-[5%]'>
          <div className='w-full h-full flex justify-end items-start px-8'>
            <h3 className='w-[25svw] h-[80%] bg-[#0E5093] cursor-pointer rounded-lg text-[calc(1px_+_1.5svw_+_1.5svh)] text-center text-white font-poppins font-[400]'>see more</h3>
          </div>
        </div>
      </div>
      <div className={styles.mobile1}>
        <div className="w-full h-[10%] ">
          <h3 className="capitalize text-[#fff] font-poppins text-[calc(1px_+_3svw_+_3svh)] font-[400] leading-[100%]">
            our values.
          </h3>
        </div>
        <div className="w-full h-[30%] flex justify-center items-center relative">
          <img src={House1} alt="img" className="w-[20svh] h-[auto] absolute top-[0%]" />
          <img src={House2} alt="img" className="w-[20svh] h-[auto] absolute top-[20%]" />
        </div>
        <div className='w-full h-[60%] '>
          <div className="w-full h-[10%] flex justify-center items-center">
            <h3 className="text-[#fff] font-poppins text-[calc(1px_+_1.5svw_+_1.5svh)] font-[700] leading-[100%]">
              Value We Give To You.
            </h3>
          </div>
          <div className="w-full h-[40%] px-16 flex justify-center items-center ">
            <h3 className="text-[#fff] font-poppins text-[calc(1px_+_1svw_+_1svh)] font-[400] leading-[120%]">
              Lorem ipsum dolor sit amet consectetur.<br />Massa nec sit donec nisl feugiat justo <br /> amet. Duis nulla tempus elit sed varius<br /> cursus aliquet.
            </h3>
          </div>
          <div className="w-full h-[40%] px-16 flex justify-center items-center  ">
            <ul>
              <li className="text-[#fff] font-poppins text-[calc(.7px_+_1svw_+_.7svh)] font-[400] leading-[100%] list-disc">
                Best interest rate on the market
              </li><br />
              <li className="text-[#fff] font-poppins text-[calc(.7px_+_1svw_+_.7svh)] font-[400] leading-[10%] list-disc">
                Prevent unstable prices
              </li><br />
              <li className="text-[#fff] font-poppins text-[calc(.7px_+_1svw_+_.7svh)] font-[400] leading-[10%] list-disc">
                Best price on the market
              </li><br />
              <li className="text-[#fff] font-poppins text-[calc(.7px_+_1svw_+_.7svh)] font-[400] leading-[100%] list-disc">
                Providing transparent and accurate info.
              </li><br />
              <li className="text-[#fff] font-poppins text-[calc(.7px_+_1svw_+_.7svh)] font-[400] leading-[100%] list-disc">
                Offering a property at a reasonable market price
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.mobile2}>
        <div className="w-full h-[5%] flex justiify-center items-center py-8">
          <h3 className="text-[#fff] font-poppins text-[calc(1px_+_3svw_+_3svh)] font-[600] leading-[100%]">
            Who we are.
          </h3>
        </div>
        <div className='w-full h-[30%] flex justify-center items-center'>
          <img src={images1} alt='img' className='w-[30svh] h-auto object-cover' />
        </div>
        <div className='w-full h-[3svh] flex justify-center items-center'>
          <h3 className='text-white font-poppins text-[calc(1px_+_2svw_+_2svh)] font-[600] leading-[100%] uppercase '>
            mission
          </h3>
        </div>
        <div className='w-full h-[12svh] flex justify-center items-cente'>
          <h3 className='text-center font-poppins text-[calc(1px_+_1svw_+_1svh)] font-[400] leading-[100%] text-white'>
            Lorem ipsum dolor sit amet consectetur. <br /> Amet sed blandit tristique egestas vitae. <br />Diam gravida duis vulputate.
          </h3>
        </div>
        <div className='w-full h-[25svh] flex justify-center items-center'>
          <img src={images2} alt='img' className='w-[35svh] h-auto' />
        </div>
        <div className='w-full h-[3svh] flex justify-center items-center'>
          <h3 className='text-white font-poppins text-[calc(1px_+_2svw_+_2svh)] font-[600] leading-[100%] uppercase '>
            story
          </h3>
        </div>
        <div className='w-full h-[12svh] flex justify-center items-cente'>
          <h3 className='text-center font-poppins text-[calc(1px_+_1svw_+_1svh)] font-[400] leading-[120%] text-white'>
            Lorem ipsum dolor sit amet consectetur. Amet sed blandit tristique egestas vitae. Diam gravida duis vulputate eros est massa malesuada. Posuere sit eu hendrerit donec at viverra nunc ac.
          </h3>
        </div>
      </div>

      <div className='w-full h-[40svh] bg-[#D9D9D9]'>
        <div className='w-full h-[12svh] flex justify-center items-cente py-8 px-4'>
          <h3 className='text-start font-poppins text-[calc(1px_+_1.2svw_+_1.2svh)] font-[500] leading-[150%] text-black'>
            Our vision is to become the most
            trusted and innovative real estate agency,
            known for delivering exceptional value to our clients.
          </h3>
        </div>
        <div className='w-full h-[28svh] flex' >
          <div className='w-[70%] h-full flex justify-center items-center'>
            <div className='h-[20%] w-full px-5'>
              <div className='w-full h-full flex justify-between items-end'>
                <h3 className='font-sans font-[500] leading-[100%] text-[calc(1px_+_3svw_+_3svh)] text-[#000]'>
                  Email
                </h3>
                <Link to={'#'}><FaArrowAltCircleRight fill='black' className='text-[1.7rem]' /></Link>
              </div>
              <hr className='w-[98%] h-[3px] bg-black border-[2px] border-black'></hr>
            </div>
          </div>
          <div className='w-[30%] h-full flex justify-center items-start'>
            <img src={images3} alt='img' className='w-[5svh] h-auto' />
          </div>
        </div>
      </div>
      <div className={styles.mobile3}>
        <div className='w-full h-[10svh] flex justify-center items-center'>
          <img src={images4} alt='img' className='w-[25svh] h-auto' />
        </div>
        <div className='w-full h-[20svh] '>

        </div>
        <div className='w-full h-[9svh] flex justify-center items-center gap-8'>
          <Link to={'#'}><FaFacebook fill='blue' className='text-[6svh]' /></Link>
          <Link to={'#'}><FaInstagram fill='white' className='text-[6svh]' /></Link>
          <Link to={'#'}><FaLinkedin fill='skyblue' className='text-[6svh]' /></Link>
        </div>
      </div>
    </div>
  )
}
export default Mobile