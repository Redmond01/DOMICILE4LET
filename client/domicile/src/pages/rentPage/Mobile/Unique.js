import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import imgae1 from '../../../assets/image2.png'
import imgae2 from '../../../assets/image4.png'
import imgae3 from '../../../assets/image6.png'
import imgae4 from '../../../assets/image8.png'
import images3 from '../../../assets/HousePlant.png'
import { BsGeoAltFill, BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import { FaArrowAltCircleRight } from 'react-icons/fa'

const imageArray = [
    imgae1,
    imgae2,
    imgae3,
    imgae4
]

const Unique = () => {

    const [numState, setNumState] = useState(0)

    const right = () => {
        setNumState(function (old) {
            return old + 1
        })
        if (numState >= imageArray.length - 1) {
            setNumState(0)
        }
        // console.log(numState)
        // console.log(imageArray.length)
    }

    const left = () => {
        setNumState(function (old) {
            return old - 1
        })
        if (numState <= 0) {
            setNumState(imageArray.length - 1)
        }
        console.log(numState)
    }


    return (
        <div className='w-full h-[130svh] bg-[#D9D9D9] flex justify-center py-2'>
            <div className='w-[90%] h-full'>
                <div className='w-full h-[50svh] bg-white'>
                    <div className='w-full h-[40svh] relative'>
                        <BsArrowLeftCircle className='text-[calc(1px_+_3svw_+_3svh)] fill-blue bg-white rounded-full absolute left-[0%] top-[50%]' onClick={right}/>
                        <img src={imageArray[numState]} alt='img' className='object-fill  h-auto w-full' />
                        <BsArrowRightCircle className='text-[calc(1px_+_3svw_+_3svh)] fill-blue bg-white rounded-full absolute right-[0%] top-[50%] ' onClick={left}/>
                    </div>
                    <div className='w-full h-[10svh] flex'>
                        <img src={imageArray[1]} alt='img' className='w-[33%] h-full object-fill' />
                        <img src={imageArray[2]} alt='img' className='w-[33%] h-full object-fill' />
                        <img src={imageArray[3]} alt='img' className='w-[33%] h-full object-fill' />
                    </div>
                </div>
                <div className='w-full h-[30svh] border border-blac bg-white'>
                    <div className='w-full h-[30%]'>
                        <h3 className='text-[calc(1px_+_3svw_+_3svh)] font-[900] font-poppins'>N220000</h3>
                    </div>
                    <div className='w-full h-[70%] space-y-2'>
                        <h3 className='text-[calc(1px_+_2svw_+_2svh)] font-[600] font-poppins capitalize'> a room self-contain</h3>
                        <h3 className='text-[calc(1px_+_1.5svw_+_1.5svh)] font-[400] font-poppins capitalize'> this apartment is situated at 4 oremeta street ishara remo</h3>
                        <div className='w-full h-[5svh] items-center flex'>
                            <BsGeoAltFill className='fill-[#565656]' />
                            ishara
                        </div>
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
            </div>
        </div>
    )
}

export default Unique