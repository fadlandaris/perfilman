import React from 'react'
import styles from '../style'
import { hero } from '../constants'

const Hero = () => {
  return (
    <section id='Hero'>
       <div className={` ${styles.flexCenter}`}>
        <div className='text-center text-5xl font-medium leading-[55px] text-secondary'>
        <h2><span className='text-gray-400'>Perfilman,</span> Our passport <br /> to unforgettable <br /> movie experiences </h2>
          <div className={`text-white gap-x-4 ${styles.flexCenter} mt-10`}>
            {hero.map((stat, index) => {
              return (
                <button key={stat.id} className={`px-6 py-[10px] bg-primary rounded-full text-sm  font-normal ${index === hero.length - 1 ? "bg-white text-secondary border-secondary border-[1px] font-semibold" : "bg-primary"}`}>{stat.title}</button>
              )
            })}
          </div>
        </div>
       </div>
    </section>
  )
}

export default Hero