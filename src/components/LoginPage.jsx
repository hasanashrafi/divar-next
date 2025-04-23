'use client'
import axios from 'axios';
import React, { useState } from 'react'

function LoginPage() {
    const [phoneNumber, setPhoneNumber] = useState('');
const submitHandler = (e) => {
    e.preventDefault();
   axios.post('/api/login', { phoneNumber })
}
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-4'>
      <div className='w-1/2 mx-auto flex flex-col gap-2 '>
      <p className='text-xl text-start p-2 text-red-800'>ورود به دیوار</p>
      <form onSubmit={submitHandler} className=' p-2 flex gap-x-2 items-center justify-center w-full'>
        <input type="text" placeholder='شماره تلفن' className='w-full border-2 border-red-800 outline-none rounded-md p-2' />
        <button type='submit' className='bg-red-800 text-white p-2 w-1/2 rounded-md ' > ارسال کد تایید</button>
      </form>
      </div>
    </div>
  )
}

export default LoginPage
