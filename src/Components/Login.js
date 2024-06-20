import React, { useState } from 'react';
import user_icon from './Assets/person.png'
import email_icon from './Assets/email.png'
import password_icon from './Assets/password.png'

function Login() {
  const [Action, setAction] = useState('LOG IN')
  function SignupHandler(){
    setAction("SIGN UP")
  }
  function LoginHandler(){
    setAction("LOG IN")

  }
  return (
    <div className='flex justify-center items-center flex-col min-h-screen bg-white'>
      <div className='border border-black  rounded-2xl p-10 m-4 gap-3 flex flex-col'>
        <div className='Header'>
          <div className='text-center text-2xl mb-1'>{Action}</div>
          <div className='bg-blue-300 h-0.5 w-10 m-auto'></div>
        </div>
        <div className='inputs'>

          { (Action ==='LOG IN')? <></>:
            <div className='input'>
            <img src={user_icon} alt='userIcon'/>
          <input type='text' placeholder='Enter username'/>
              </div>
          }
          {      <div className='input'>
            <img src={email_icon} alt='emailIcon'/>
          <input type='email' placeholder='Enter Email'/>
              </div>}
          {      <div className='input'>
            <img src={password_icon} alt='passwordIcon'/>
          <input type='password' placeholder='Enter passowrd'/>
              </div>}
          {
            <div className='flex justify-evenly m-2'>
                <button className='bg-slate-300 px-3  rounded-l-xl' onClick={SignupHandler}>Sign Up</button>
                <button className='bg-slate-300 px-3 rounded-r-xl' onClick={LoginHandler}>Login</button>
            </div>
          }
      

        </div>
      </div>
    </div>
  )
}

export default Login
