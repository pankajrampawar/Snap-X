import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './navbar';

export default function GetInTouch() {

    const navigate = useNavigate();

    return <div>
        <header>
            <nav>
                <Navbar/>
            </nav>

            <section className='py-16 bg-teal-800 px-5 md:px-16'>
                <div className='flex text-sm items-center'><span className='hover:underline' onClick={()=>navigate('/')}>Snap-X</span><img src='/assests/arrowRight.svg'/><span>Snap-X support</span></div>

                <h1 className='text-4xl font-bold md:text-5xl mt-5'>Snap-X support</h1>
                <p className='text-lg md:text-xl mt-3'>Get in touch with human</p>
            </section>
        </header>

        <main className='bg-slate-100 py-24 flex flex-col gap-4 md:px-24 px-5'>
            <h2 className='text-4xl font-bold'>Mail us..</h2>
            <input className='border-2 border-teal-900 h-10 max-w-[700px]'
                placeholder='your email here'
            />
            <input className='border-2 border-teal-900 h-48 max-w-[700px] flex items-start'
                placeholder='your message for us'
            />
            <button className='border-2 bg-teal-900 max-w-[300px] py-2 text-white text-xl font-semibold tracking-widest hover:bg-teal-600'>Submit</button>

            <p className='lg text-gray-800 mt-10'>Note: we will reply your message withing 2 working days, if the issue is really important please try contacting us via our social media platforms.</p>
        </main>

        <footer>
            <Footer/>
        </footer>
    </div>
}