import React from 'react'
import { FaAlignJustify } from 'react-icons/fa'
import MobileLogo from '../../assets/mobilelogo.png'
import { Link } from 'react-router-dom'
import styles from '../landingPage/mobile/style.module.css'
import { FaTimes } from 'react-icons/fa'

//reducers
import { setOffSideNav, setSideNavOn } from '../../redux-store/appSlice/LandingPageSlice/mobileSlice/mobileSlice'
import { useSelector, useDispatch } from 'react-redux'

const NavBar = () => {
    const dispatch = useDispatch()
    const sliderState = useSelector(function (state) {
        return state.mobile.SideNavOn
    })

    const handleOnSlider = () => {
        dispatch(setSideNavOn())
        console.log(sliderState);
    }

    const handleOffSlider = () => {
        // dispatch(setOnSideNav())
        console.log(sliderState)
    }

    return (
        <div>
            {/*mobile shared Nav bar*/}
            <div className=" sm:flex md:hidden lg:hidden">
                <div className='relative  w-full h-[10svh] py-[25px] text-white flex justify-between items-center'>
                    <div className='w-[50%] h-full flex justify-start items-center px-4'>
                        <Link><img src={MobileLogo} alt="img" className="w-[2.25rem] h-[2rem]" /></Link>
                    </div>
                    <div className='w-[50%] h-full flex justify-end items-center px-4'>
                        <FaAlignJustify fill='white' className='text-[calc(1px_+_2svw_+_2svh)]' onClick={handleOnSlider} />
                    </div>
                </div>


                {/* filter animation */}


                 {sliderState? <div className={styles.mobile__filter__animation__on}>
                    <div className='w-full h-[10%] border border-black flex justify-end items-center px-3'>
                        <FaTimes fill='white' className='text-[calc(1px_+_2svw_+_2svh)]' onClick={handleOffSlider} />
                    </div>
                    <div className='w-full h-[90%] flex flex-col '>
                        <div className='w-full h-[25%] border border-black'>rent</div>
                        <div className='w-full h-[25%] border border-black'>rent</div>
                        <div className='w-full h-[25%] border border-black'>rent</div>
                        <div className='w-full h-[25%] border border-black'>rent</div>
                    </div>

                </div>:''}

            </div>
        </div>
    )
}

export default NavBar