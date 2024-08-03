import React from 'react'
// import { Link } from 'react-router-dom'

function ContactPage(props){
    return(
    <div style={{"backgroundColor":"#FFF9F0"}} className='h-screen w-screen'>
        <section className="text-2xl font-medium pt-2 pl-2">B.planet</section>
        <div className='flex mx-auto my-16 w-3/4 border-2' style={{"borderColor":"#B48F8F"}}>
            <div className='w-1/2 p-8 border-2' style={{"borderColor":"#B48F8F"}}>
                <p className='text-xl font-medium' >Stay Updated</p>
                <p>Need to get in touch with us?</p><br />
                <a href="www.facebook.com" className='text-sm'>Facebook</a><br />
                <a href="www.instagram.com" className='text-sm'>Instagram</a>
            </div>
            <div className='w-1/2 border-2 p-4' style={{"borderColor":"#B48F8F"}}>
                <input type="text" placeholder='Name' className='mb-2 w-3/4 text-white px-2 py-1' style={{"backgroundColor":"#B48F8F"}} /><br/>
                <input type="text" placeholder='Email' className='mb-2 w-3/4 text-white px-2 py-1' style={{"backgroundColor":"#B48F8F"}} /><br/>
                <textarea placeholder='Description' className='mb-2 w-3/4 text-white px-2 py-1' style={{"backgroundColor":"#B48F8F"}}></textarea><br/>
                <button style={{"backgroundColor": "#CABEB0"}} className='px-4 py-1 rounded-full'>Submit</button>
            </div>
        </div>
    </div>
    )
}

export default ContactPage