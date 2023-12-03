import React from 'react';
import Navbar from './navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

export default function Account() {

    const navigate = useNavigate();

    return <div>
        <header>
            <nav>
                <Navbar/>
            </nav>
            
            <section className='bg-teal-800 py-16 px-4'>
                <div className='flex text-sm gap-2 items-center'> <span className='hover:underline' onClick={()=>{navigate('/')}}>Span-X</span><img src='/assests/arrowRight.svg'/><span>Manage your account</span></div>

                <div className='mt-4 flex flex-col gap-4'>
                    <h1 className='text-3xl font-bold md:text-5xl'>Manage your account</h1>
                    <p className='text-lg md:text-xl'>Configure your account settings such as your email, profile details and password.</p>
                </div>
            </section>
        </header>      


        <main className='py-24 px-5 md:px-44'>
            <div>
                <h2 className='text-3xl font-semibold mb-4'>Manage your account</h2>
                <ul className='list-disc ml-5 flex flex-col gap-4'>
                    <li>Change your eamil settings</li>
                    <li>Change your account settings</li>
                    <li>Delete your account</li>
                    <li>Troubleshooting login issues</li>
                    <li>Domains officially associated with Span-X</li>
                </ul>
            </div>
        </main> 

        <footer>
            <Footer/>
        </footer> 
    </div>
}