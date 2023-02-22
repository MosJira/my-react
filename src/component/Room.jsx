import React from 'react'

const Room = () => {
  return (
    <div className=' w-full h-full bg-blue-100 mx-auto my-20 pt-12 lg:mb-[20%]  md:mb-[30%] px-4 grid  gap-6 '>
        <div>
      
             <div className=' md:top-0 flex flex-col items-start md:col-span-2 col-span-2  '>
              <h3 className=' text-2xl font-bold'>Fine Interior Rooms</h3>
              <p className=' pt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque reprehenderit praesentium blanditiis similique vero totam!</p>
            </div>
       </div>


       <div>

              <div className=' grid grid-cols-2 grid-rows-2  col-span-2  '>

                 <img className=' row-span-1 object-cover  w-full h-full p-2' src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="/" />
                 <img className=' row-span-2 object-cover  w-full h-full p-2' src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="/" />
                 <img className=' row-span-1 object-cover  w-full h-full p-2' src="https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="/" />

              </div>
        </div>
            


     </div>
  )
}

export default Room