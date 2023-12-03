import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './Footer';


export default function Authenticate() {

    const navigate = useNavigate();

    return <div>
        <header>
            <nav>
                <Navbar/>
            </nav>

            <section className='bg-teal-800 py-16 px-4 md:px-10'>
                <div className='flex items-center text-sm'><span className='hover:underline' onClick={()=>{navigate('/')}}>Snap-X</span> <img src='/assests/arrowRight.svg'/> <span>Authenticate to Snap-X</span></div>

                <h1 className='mt-4 mb-3 text-4xl font-bold tracking-wide md:text-5xl'>Authenticate to Snap-X</h1>
                <p className='text-lg'>Set up and configure SSO, SCIM and Just-in-Time provisioning</p>
            </section>
        </header>

        <main className='py-24 px-5 bg-slate-100 md:px-24'>
            <h2 className='text-4xl font-semibold'>Authenticate to Snap-X</h2>
            <ul className='list-disc ml-5 text-lg mt-5 flex flex-col gap-3'>
                <li>Understand single sign-on</li>
                <li>Configure single sign-on using ADFS</li>
                <li>Configure single sign-on using Azure AD</li>
                <li>Configure single sign-on using Google SAML</li>
                <li>Configure single sign-on using Okta</li>
            </ul>
        </main>

        <footer>
            <Footer/>
        </footer>
    </div>
}