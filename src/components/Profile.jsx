import React from 'react'
import { profile } from '../assets'

const Profile = () => {
  return (
    <main className='w-full '>
      <div className='max-w-7xl mx-auto flex flex-col'>
        <div className='grid grid-cols-2 gap-x-8'>
          <img src={profile} alt="" className='w-full h-full object-cover rounded-2xl' />
          <div className='border-2 rounded-2xl p-10'>
            <h2>Nama: Raka Eldiansyah Putra</h2>
            <h2>Nim: </h2>
            <div className='my-10'>
              <p>Deskripsi App: </p>
            </div>
            
            <div>
              <h2>WorkFlow app cara buat: </h2>
            </div>
          </div>
        </div>
        
      </div>
    </main>
  )
}

export default Profile