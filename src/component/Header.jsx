import React from 'react'


function Header() {
  return (
    <div className=' w-full h-screen'>

          <img className=' object-cover absolute top-0 left-0  h-full w-full  ' src=" https://images.unsplash.com/photo-1537162998323-3d3675e0e87c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80 " alt="/" />
      
            <div className='bg-black/30 absolute top-0 left-0 w-full h-full'/>         9
        
                 
                <div className=' absolute top-[20%] left-[8%] max-w-md  text-white flex flex-wrap' >
                    <p className=' py-2'>All Inclusive</p>
                    <h1 className='font-bold text-4xl '>Private Beach&Get away</h1>
                    <p className=' max-w-[400px] drop-shadow-2xl py-4 text-xl '> Lorem ipsum dolor sit amet consectetur adipisicing elit  dignissimos,  doloremque</p>
                    <button className='bg-white text-black hover:bg-red-300 hover:text-white '>Reser Now</button>
                <div/>
                     
            </div>
    </div>
  )
}

export default Header