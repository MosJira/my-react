import React from 'react'
import {FaFacebook, FaInstagram,FaTwitter} from 'react-icons/fa'
import {TiSocialPinterest} from 'react-icons/ti'


const Footer = () => {
  return (
    <div className=' w-full  mt-24 bg-gray-800 text-gray-300 py-2 px-2'>
      <div className=' max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-gray-600 py-8 px-4'>

          <div>
          <h6 className=' font-bold uppercase pt02'>Solution</h6>
          <ul>
            <li>Travel</li>
            <li>Booking</li>
            <li>Flights</li>
            <li>Ground</li>
          </ul>
          </div>

          <div>
            <h6>Support</h6>
            <ul>
              <li className=' py-1'>Pricing</li>
              <li className=' py-1'>Documentation</li>
              <li className=' py-1'>Tours</li>
              <li className=' py-1'>Refunds</li>           
           </ul>
          </div>

          <div>
            <h6>Company</h6>
            <ul>
              <li className=' py-1'>About</li>
              <li className=' py-1'>Blog</li>
              <li className=' py-1'>Jobs</li>
              <li className=' py-1'>Press</li>           
              <li className=' py-1'>Partimes</li>           
            </ul>
          </div>

          <div>
            <h6>Legal</h6>
            <ul>
              <li className=' py-1'>Cleams</li>
              <li className=' py-1'>Privacy</li>
              <li className=' py-1'>Terms</li>
              <li className=' py-1'>Policies</li>           
              <li className=' py-1'>Condition</li>           
            </ul>
          </div>

          <div className=' col-span-2 py-8 md:pt-2'>
            <p className=' font-bold uppercase'>Suubscrice to our newletters</p>
            <p className=' py-4'>The Latest deals , articles and resources sent to your inbox weekly.</p>
            <form className=' flex flex-col sm:flex-row'>
              <input className=' w-full p-2 mr-4 rounded-md mb-4' type="email"  placeholder='Enter email..'/>
              <button className=' p-2 mb-4 rounded-md'>Subscrite</button>
            </form>
          </div>

         </div>

            <div className=' flex flex-col max-w-[1400px] px-2 mx-auto justify-between sm:flex-row text-center text-gray-500'>
            <p className=' py-4'>2022 Experiences, LLC. All right reserved</p>
                <div className=' flex justify-between'>
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitter/>
                <TiSocialPinterest size={30}/>
                </div>
            </div>

         </div>
  )
}

export default Footer