import React from 'react'
import { Link } from 'react-router-dom'

function LoginPage(){
    return(
        <div style={{"backgroundColor":"#FFF9F0"}} className='h-screen w-screen'>
            <div className='m-auto flex justify-between p-2'>
                <h2 className='text-2xl font-medium m-auto'>B.planet</h2>
                <button className="border-2 border-black rounded-2xl px-2 mr-2"><Link to="https://tejaswini-1002.github.io/b-planet/contact/">Contact us</Link></button>
            </div>
            <div className='mx-auto mt-16 flex w-1/2 h-64 justify-center border-2' style={{"borderColor": "#B48F8F"}}>
                <div className='w-1/2'>
                <img src="../Images/LoginImg.png" alt='login' className='h-full' style={{"backgroundColor": "#CCC2B6"}}></img>
                </div>
                <div className='w-1/2 py-4'>
                    <p className='text-xl'>Login</p>
                    <p className='text-xs mt-1'>Welcome back!!</p>
                    <p className='text-xs mt-2'>Email</p>
                    <input type='text' className='bg-slate-300 px-1.5 py-0.5' />
                    <p className='text-xs mt-2'>Password</p>
                    <input type='password' className='bg-slate-300 px-1.5 py-0.5' /><br/>
                    <button className='mx-14 mt-4 rounded-full px-4' style={{"backgroundColor": "#CCC2B6"}}>Login</button>
                    <p className='text-xs mt-2 font-medium'>Dont’t have an account yet ? &nbsp;
                        <a href='/login' className='text-xs font-light hover:font-medium'>Sign up for free</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage