import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './Footer';

export default function ManageBilling() {

    const navigate = useNavigate();

    return <div>

        <header>
           <nav>
            <Navbar/>
           </nav>

            <section className='bg-teal-800 py-16 px-4'>
                <div className='flex text-sm items-center'><span className='hover:underline' onClick={()=>navigate('/')}>Snap-X</span> <img src='/assests/arrowRight.svg' /><span>Manage billing</span></div>
                <div className='mt-6'>
                    <h1 className='text-4xl tracking-wide font-bold md:text-6xl'>Manage billing</h1>
                    <p className='text-lg mt-3'>Change subscriptions and payment details.</p>
                </div>
            </section>
        </header>

        <main className='bg-slate-100 py-24 px-4 md:px-24'>
            <h2 className='text-3xl font-semibold md:text-5xl'>Manage billing</h2>
            <ul className='list-disc ml-4 mt-4 flex flex-col gap-2 text-lg'>
                <li>Change your subscriptions</li>
                <li>Manage billing details</li>
                <li>View your billing details and invoices</li>
            </ul>
        </main>


        <footer>
            <Footer/>
        </footer>
    </div>
}