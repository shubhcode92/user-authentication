import React from 'react'

const Registers = () => {
  return (
    <form>

      <div className=' px-16 py-12 mx-[590px] my-28 bg-cyan-100'>
        <div className='font-bold text-center text-fuchsia-600 pb-8'>
          <h1>Register Form </h1>
        </div>
        <div>
          <label className='font-bold'>Name:</label>
          <br />
          <input type='text' placeholder='Enter name' required/>
        </div>
        <div className=''>
          <label className='font-bold'>Email:</label>
          <br />
          <input type='email' placeholder='Enter Email'/>
        </div>
        <div>
          <label className='font-bold'>Create Password:</label>
          <br />
          <input type='password' placeholder='Enter Password' required/>
        </div>
        <button type='submit' className='bg-cyan-100 mt-4 px-3 py-2 rounded-xl bg-white text-green-700 border hover:bg-blue-700 hover:text-white'>Register</button>
        
      </div>
    </form>
  )
}

export default Registers;
