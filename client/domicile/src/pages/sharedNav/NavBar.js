import React, { useCallback, useEffect, useRef } from 'react'
import styles from '../landingPage/mobile/style.module.css'


import { FaAlignJustify } from 'react-icons/fa'
import MobileLogo from '../../assets/mobilelogo.png'
import { Link, useLocation } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

//reducers
import { setSideNavOff, setSideNavOn } from '../../redux-store/appSlice/LandingPageSlice/mobileSlice/mobileSlice'
import { useSelector, useDispatch } from 'react-redux'


const NavBar = () => {


    const dispatch = useDispatch()
    const location = useLocation()
    const currentUrl = useRef(location.pathname)



    const sliderState = useSelector(function (state) {
        return state.mobile.SideNavOn
    })
    const handleOnSlider = useCallback(function () {
        dispatch(setSideNavOn(true));
    }, [dispatch])

    const handleOffSlider = useCallback(function () {
        dispatch(setSideNavOff(false));
    }, [dispatch])


    useEffect(function () {
        const currentUrlN = location.pathname
        if (currentUrlN !== currentUrl) {
            handleOffSlider()
        }
    }, [location.pathname, handleOffSlider])

    // const navigate = useNavigate()

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
                    <div className='w-full h-[20%] flex justify-end items-center px-3'>
                        <FaTimes fill='black' className='text-[calc(1px_+_3svw_+_3svh)]' onClick={handleOffSlider} />
                    </div>
                    <div className='w-full h-[90%] flex flex-col'>
                        <Link to={'/rent'}><div className='w-full h-[20%] text-center text-[calc(1px_+_3svw_+_3svh)] text-[#6f6f6f] capitalize font-[800] font-poppins flex justify-center items-center'>rent</div></Link>
                        <Link to={'/'}><div className='w-full h-[20%] text-center text-[calc(1px_+_3svw_+_3svh)] text-[#6f6f6f] capitalize font-[800] font-poppins flex justify-center items-center'>sell</div></Link>
                        <div className='w-full h-[20%] text-center text-[calc(1px_+_3svw_+_3svh)] text-[#6f6f6f] capitalize font-[800] font-poppins flex justify-center items-center'>about us</div>
                        <div className='w-full h-[20%] text-center text-[calc(1px_+_3svw_+_3svh)] text-[#6f6f6f] capitalize font-[800] font-poppins flex justify-center items-center'>sign up</div>
                    </div>

                </div> : ''}

            </div>
        </div>
    )
}

export default NavBar