import React from 'react'
import styles from '../style'
import { studio } from '../constants'

const Studio = () => {
  return (
    <section className='z-0 '>
      <h2 className='my-10'>Studio</h2>
        <div className={`${styles.flexBetween} gap-3 md:gap-6`}>
          {studio.map((item, index) => (
            <div key={index} className="w-[350px] h-[120px] bg-third relative rounded-lg p-6 md:px-16 px-5 hover:scale-110 transition-all duration-300 cursor-pointer flex flex-col items-center group shadow-md">
              <video src={item.video} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover rounded-md z-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></video>
              <img src={item.Image} className={`m-auto ${index === 1 || index === 0 || index === 4 || index === 2 ? "h-[60px]" : ""}`} />
            </div>
          ))}
        </div>
    </section>
   

  
  )
}

export default Studio