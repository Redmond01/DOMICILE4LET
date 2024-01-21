import React, { useCallback, useEffect, useRef} from 'react'
import styles from '../landingPage/mobile/style.module.css'


import { FaAlignJustify,FaHeadset, FaSignOutAlt } from 'react-icons/fa'
import MobileLogo from '../../assets/mobilelogo.png'
import { Link, useLocation} from 'react-router-dom'
import { BsArrowRightSquare, BsHouse, BsBagCheck , BsCart2, BsPeople, BsSliders} from 'react-icons/bs'

//reducers
import { setSideNavOff, setSideNavOn } from '../../redux-store/appSlice/LandingPageSlice/mobileSlice/mobileSlice'
import { useSelector, useDispatch } from 'react-redux'


const NavBar = () => {
    const dispatch = useDispatch()
    const sliderState = useSelector(function (state) {
        return state.mobile.SideNavOn
    })
    const handleOnSlider = useCallback(function () {
        dispatch(setSideNavOn(true));
    }, [dispatch])

    const handleOffSlider = useCallback(function () {
        dispatch(setSideNavOff(false));
    }, [dispatch])

    const location = useLocation()

    const url = useRef(location.pathname)

    useEffect(function(){
        const currentUrl= location.pathname
        if(currentUrl !== url){
            handleOffSlider()
        }
    },[location.pathname, handleOffSlider])
    return (
        <div>
            {/*mobile shared Nav bar*/}
            <div className=" sm:flex md:hidden lg:hidden bg-[#091A2B]">
                <div className='relative  w-full h-[10svh] py-[25px] text-white flex justify-between items-center'>
                    <div className='w-[50%] h-full flex justify-start items-center px-4'>
                        <Link to={'/'}><img src={MobileLogo} alt="img" className="w-[2.25rem] h-[2rem]" /></Link>
                    </div>
                    <div className='w-[50%] h-full flex justify-end items-center px-4'>
                        <FaAlignJustify fill='white' className='text-[calc(1px_+_2svw_+_2svh)]' onClick={handleOnSlider} />
                    </div>
                </div>


                {/* filter animation */}
                {sliderState ? <div className={styles.mobile__filter__animation__on}>
                    <div className='w-full h-[10%] flex justify-between items-center px-3'>
                        <BsArrowRightSquare className='text-[calc(1px_+_2.5svw_+_2.5svh)] fill-[#091A2B]' onClick={handleOffSlider} />
                        <BsSliders className='text-[calc(1px_+_2.5svw_+_2.5svh)] fill-[#091A2B] border border-black rounded-full p-1' />
                    </div>
                    <div className='w-full h-[90%] flex flex-col py-2' >
                    <div className='w-full h-[70%] flex flex-col gap-4'>
                        <div className='w-full h-[7svh] border border-white flex items-center gap-2 px-6'>
                        <BsHouse className='fill-[#091A2B] text-[calc(1px_+_2.5svw_+_2.5svh)]'/>
                        <h3 className='text-[400] font-poppins text-[#091A2B] text-[calc(1px_+_2svw_+_2svh)]'>Home</h3>
                        </div>
                        <div className='w-full h-[7svh] border border-white flex items-center gap-2 px-6'>
                        <BsBagCheck className='fill-[#091A2B] text-[calc(1px_+_2.5svw_+_2.5svh)]'/>
                        <h3 className='text-[400] font-poppins text-[#091A2B] text-[calc(1px_+_2svw_+_2svh)]'>Rent</h3>
                        </div>
                        <div className='w-full h-[7svh] border border-white flex items-center gap-2 px-6'>
                        <BsCart2 className='fill-[#091A2B] text-[calc(1px_+_2.5svw_+_2.5svh)]'/>
                        <h3 className='text-[400] font-poppins text-[#091A2B] text-[calc(1px_+_2svw_+_2svh)]'>Sell</h3>
                        </div>
                        <div className='w-full h-[7svh] border border-white flex items-center gap-2 px-6'>
                        <BsPeople className='fill-[#091A2B] text-[calc(1px_+_2.5svw_+_2.5svh)]'/>
                        <h3 className='text-[400] font-poppins text-[#091A2B] text-[calc(1px_+_2svw_+_2svh)]'>About Us</h3>
                        </div>
                    </div>
                    <div className='w-full h-[30%] px-5 flex justify-center flex-col gap-4'>
                        <div className='w-full h-[7svh] flex items-center gap-4 px-6 bg-[#091A2B] rounded-lg'>
                            <FaHeadset className='fill-[white] text-[calc(1px_+_2.5svw_+_svh)]'/>
                            <h3 className='text-white font-poppins font-[400] capitalize text-[calc(1px_+_2svw_+_2svh)]'>contact support</h3>
                        </div>
                        <div className='w-full h-[7svh] flex items-center gap-4 px-6 bg-[#091A2B] rounded-lg'>
                            <FaSignOutAlt className='fill-[white] text-[calc(1px_+_2.5svw_+_svh)]'/>
                            <h3 className='text-white font-poppins font-[400] capitalize text-[calc(1px_+_2svw_+_2svh)]'>contact support</h3>
                        </div>
                    </div>
                    </div>

                </div> :''}

            </div>
        </div>
    )
}

export default NavBar