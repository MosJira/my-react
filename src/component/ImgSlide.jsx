import React, { useState} from 'react'
import {BiChevronLeft, BiChevronRight} from 'react-icons/bi'
import {RxDotFilled} from 'react-icons/rx'


const ImgSlide = () => {

      const slides =[ 
        {
          url: 'https://images.unsplash.com/photo-1676907257333-aa63667475cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          title:'picture',
        }, {

        url: 'https://images.unsplash.com/photo-1676629081623-0f9bd9a64cfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80',
        title:'sushi',
        },{

        url: 'https://images.unsplash.com/photo-1676808527792-2c6937102a99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        title:'pasta',
        },{

          url: 'https://images.unsplash.com/photo-1676900022079-8c725e8b2c4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
         title:'salmon',
         },];
      const [currentIndex, setCurrentIndex] = useState(0)

      const prevSlide =() => {
       const isFirstSlide = currentIndex === 0
       const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
       setCurrentIndex(newIndex)}

      const nextSlide =() => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)}

      const goToSlide = (slidesIndex) => {
        setCurrentIndex(slidesIndex)

      }


  return (
    <div className=' max-w-[1400px] h-[580px] w-full m-auto py16 px4 relative group '>

      <div className=' w-full h-full rounded-2xl bg-center bg-cover duration-500'  
      style={{ backgroundImage: `url(${slides[currentIndex].url})`}}> </div>
   
      {/* Left arrow */}
      <div className=' absolute top-[50%]  translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/30 text-white cursor-pointer'>
        <BiChevronLeft onClick={prevSlide} size={30} />
      </div>

      {/* Right arrow */}
      <div className=' absolute top-[50%]  translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2  group-hover:bg-black/30 text-white cursor-pointer'>
      <BiChevronRight onClick={nextSlide} size={30} />
      </div >
      
          <div className=' flex top-4 justify-center py-2 '>{ slides.map((slides, slidesIndex) => (
              <div className=' text-2xl cursor-pointer ' 
                key= {slidesIndex} onClick ={() => goToSlide(slidesIndex)} > 
                       <RxDotFilled />
                
              </div>
              ))}
          </div>

    </div>
  )
}

export default ImgSlide