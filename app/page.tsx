import React from 'react'


const Home = () => {
  return (
    
     
      <div className='bg-gray-200 h-screen flex items-center justify-center gap-10'>
 {/* //  left side */}
        <div>
        <h1 className='text-blue-900 text-7xl text-bold'>facebook</h1>

        <p className='text-bold text-2xl text-gray-900 ml-2 mt-3
        '>Facebook helps you connect and <br/>share with the people in your life.</p>
        {/* right side */}
        </div>


        <div className='bg-white  flex flex-col p-10 rounded-xl w-1/3'>
          <input className='my-2 border border-1 border-gray-100 px-3 rounded-md focus:outline-1 outline-blue-600' type="text" placeholder="Email address or phone number" />
          
          <input className='my-2 border border-1 border-gray-100 p-4  focus:outline-1 outline-blue-600' type="passward" placeholder="passward" />
          <button className='bg-blue-600 py-1 px-2 mt-2 text-lg text-bold text-white rounded-md hover:bg-blue-200'>log in</button>
          <p className='mt-3 px-24 hover:underline cursor-pointer'>Forgotten password?</p>
          <span className='mt-2'>

            <hr />
          </span>
          <button className='mt-4 bg-green-500 hover:bg-green-600 text-lg font-bold rounded-md text-white w-fit mx-auto'>Create New Acount</button>

        </div>





      </div>
      
  )
}

export default Home
