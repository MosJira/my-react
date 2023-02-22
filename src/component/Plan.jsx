import React from 'react'

const plan = () => {
  return (
    <div className='   w-full h-full mx-auto my-20 pt-10  md:mb-[10%] px-1 grid md:grid-cols-2 gap-6 '>

     
      <div className=' grid grid-cols-2 grid-rows-2  '>
            {/* {Left Side} */}
            <img className=' row-span-3 object-left-bottom w-full h-full p-1' src="https://images.unsplash.com/photo-1540202404-a2f29016b523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80" alt="/" />
            <img className=' row-span-2 object-left-bottom w-full h-full p-1' src="https://images.unsplash.com/photo-1516815231560-8f41ec531527?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80" alt="/" />
            <img className=' row-span-2 object-left-bottom w-full h-full p-1' src="https://images.unsplash.com/photo-1599832976672-5923b10683d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80" alt="/" />
            <img className=' row-span-3 object-left-bottom w-full h-full p-1' src="https://images.unsplash.com/photo-1515723563805-d42188f2948e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="/" />
            <img className=' row-span-2 object-left-bottom w-full h-full p-1' src="https://images.unsplash.com/photo-1587641859881-d6b741b69820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="/" />
      
      </div>
        
        {/* {Right Side} */}
        
        <div className='  flex flex-col pt-10   '>
            <h3 className=' text-3xl md:text-6x font-bold'> Plan your Next Trip</h3>
            <p className=' text-2xl py-6'> Lorem ipsum dolor  sit amet consectetur adipisicing elit. Nisi, eveniet.</p>
            <p className=' pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eligendi esse dolore expedita dolor fugiat laboriosam a provident incidunt possimus nihil voluptas quod ex sit ratione distinctio ad impedit hic.</p>
            
             <div>
                <button className='  bg-black  text-white border-black hover:shadow-xl'>Book Your Trip</button>       
                <button className=' border-black  ml-6 hover:shadow-xl'>Learn More</button>
            </div>
       </div>
     

     

    </div>
  )
}

export default plan