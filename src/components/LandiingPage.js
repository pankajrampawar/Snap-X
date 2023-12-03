import React from 'react';
import Navbar from './navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';


export default function LandingPage() {

    const navigate = useNavigate();

    return <div>
        <header>
            <nav>
                <Navbar/>
            </nav>

            <section className='bg-teal-800 flex flex-col items-center p-28 px-0 gap-8'>
                <div className='md:text-7xl text-5xl text-center'>How can we help?</div>
                <div className='relative'>
                    <input className='border border-black shadow-2xl rounded-lg h-12 md:w-[600px] w-[300px] px-5' id='search' placeholder='search'/>
                </div>
            </section>
        </header>

        <main className='bg-slate-100 py-24 flex justify-center lg:gap-24 sm:gap-6 gap-16 px-4 flex-col sm:flex-row items-center'>
            <section className=' max-w-[420px] flex flex-col gap-14'>
                <article className='flex items-center gap-5'>
                    <div>
                        <img src='/assests/use.svg' alt='folder' className='h-14'/>
                    </div>
                    <div className='w-3/4'>
                        <h2 className='text-xl font-bold text-teal-950'>Using Snap-X</h2>
                        <p className='text-lg text-teal-900'>Sanp-X lets you manage, version and document your designs in one place.</p>
                        <span className='text-teal-600 hover:underline cursor-pointer' onClick={()=>{navigate('/help/usingSnapX')}}>Learn More</span>
                    </div>
                </article>

                <article className='flex items-center gap-5'>
                    <div>
                        <img src='/assests/folder.svg' alt='folder' className='h-14'/>
                    </div>
                    <div className='w-3/4'>
                        <h2 className='text-xl font-bold text-teal-950'>Manage organizations, teams and projects</h2>
                        <p className='text-lg text-teal-900'>Use Sanp-X organizations, teams and projects to organize your people and your work.</p>
                        <span className='text-teal-600 hover:underline cursor-pointer' onClick={()=>{navigate('/help/manageProjects')}}>Learn more</span>
                    </div>
                </article>

                <article className='flex items-center gap-5'>
                    <div>
                        <img src='/assests/key.svg' alt='key'className='h-14' />
                    </div>
                    <div className='w-3/4'>
                        <h2 className='text-xl font-bold text-teal-950'>Authenticate to Sanp-X</h2>
                        <p className='text-lg text-teal-900'>Set up and configure SSO, SCIM and Just-in-Time provisioning.</p>
                        <span className='text-teal-600 hover:underline cursor-pointer' onClick={()=>{navigate('/help/Authenticate')}}>Learn more</span>
                    </div>
                </article>
            </section>
           
            <section className=' max-w-[420px] flex flex-col gap-14'>
                <article className='flex items-center gap-5'>
                    <div>
                        <img src='/assests/account.svg' alt='account' className='h-14'/>
                    </div>
                    <div className='w-3/4'>
                        <h2 className='text-xl font-bold text-teal-950'>Manage your account</h2>
                        <p className='text-lg text-teal-900'>Configure your account settings such as your email, profile details and passowrd.</p>
                        <span className='text-teal-600 hover:underline cursor-pointer' onClick={()=>{navigate('/help/managingAccount')}}>Learn more</span>
                    </div>
                </article>
                <article className='flex items-center gap-5'>
                    <div>
                        <img src='/assests/billing.svg' alt='dollar' className='h-14'/>
                    </div>
                    <div className='w-3/4'>
                        <h2 className='text-xl font-bold text-teal-950'>Manage billing</h2>
                        <p className='text-lg text-teal-900'>Change your subscriptions and payment details.</p>
                        <span className='text-teal-600 hover:underline cursor-pointer' onClick={()=>{navigate('/help/manageBilling')}}>Learn more</span>
                    </div>
                </article>

                <article className='flex items-center gap-5'>
                    <div>
                        <img src='/assests/support.svg' alt='support' className='h-14'/>
                    </div>
                    <div className='w-3/4'>
                        <h2 className='text-xl font-bold text-teal-950'>Sanp-X support.</h2>
                        <p className='text-lg text-teal-900'>Get in touch with a human</p>
                        <span className='text-teal-600 hover:underline cursor-pointer' onClick={()=>{navigate('/help/Support')}}>Learn more</span>
                    </div>
                </article>
            </section>
        </main>

        <footer>
            <Footer/>
        </footer>

    </div>
}

 