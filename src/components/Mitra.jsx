import React from 'react'
import PolisiImg from '../../assets/img/logopolisi.png'
import TniImg from '../../assets/img/TNI.jpg'
import KejaksaanImg from '../../assets/img/kejaksaan.jpg'
import SmdImg from '../../assets/img/logosmd.png'


export default function Mitra() {
  return (
    <div className='mt-16  justify-center items-center flex'>
<div className="container justify-center text-center lg:text-3xl xs:text-2xl  ss:text-lg ss:-mt-4 font-sans font-medium
                text-[#3F3D56]">
                Mitra
               <div className='justify-center flex mt-9 space-x-10'>
                   <img src={PolisiImg} alt="" className='h-28 w-28 transition duration-200 opacity-60 hover:contrast-100  hover:opacity-100' />
                   <img src={TniImg} alt="" className='h-28 w-28 transition duration-200 opacity-60 hover:contrast-100  hover:opacity-100' />
                   <img src={KejaksaanImg} alt="" className='h-28 w-28 transition duration-200 opacity-60 hover:contrast-100  hover:opacity-100' />
                   <img src={SmdImg} alt="" className='h-28 w-28 transition duration-200 opacity-60 hover:contrast-100  hover:opacity-100' />
               </div>
            </div>

    </div>
  )
}