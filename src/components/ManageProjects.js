import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './Footer';

export default function ManageProjects() {

    const navigate = useNavigate();

    return <div>
        <header>
            <nav>
                <Navbar/>
            </nav>

            <section className='bg-teal-800 py-16 px-2 md:px-10'>
                <div className='flex text-sm items-center '><span className='hover:underline ' onClick={()=>{navigate('/')}}>Span-X</span> <img src='/assests/arrowRight.svg'/> <span>Manage organizations, teams and projects</span> </div>
                <div className='flex flex-col gap-2 mt-4'>
                    <h1 className='text-3xl font-bold sm:text-5xl'>Manage organizations, teams and projects</h1>
                    <p className='text-lg sm:text-xl'>Use Span-X organizations, teams and projects to organize your people and your work</p>
                </div>
            </section>
        </header>

        <main className='py-20 px-4 bg-slate-100 sm:py-28 lg:flex lg:justify-center lg:gap-10'>
            <section className='sm:flex gap-16 lg:order-2'>
                <div>
                    <h2 className='text-3xl font-semibold sm:text-4xl'>Manage your organization</h2>
                    <ul className='list-disc ml-4 mt-3 sm:text-lg sm:py-'>
                        <li>How to create new organization (for existing users)</li>
                        <li>Organization overview</li>
                        <li>Joining and organization</li>
                        <li>Send an invitation</li>
                        <li>Understand seat and role types</li>
                        <li>Manage user permissions and access</li>
                    </ul>
                </div>

                <div className='mt-7 sm:mt-0'>
                    <h2 className='text-3xl font-semibold sm:text-4xl'>Manage your teams</h2>
                    <ul className='list-disc ml-4 mt-3 sm:text-lg sm:py-'>
                        <li>Create and manage teams</li>
                    </ul>
                </div>
                
            </section>
                
            <section className='mt-7 lg:mt-0 lg:order-1'>
                <h2 className='text-3xl font-semibold sm:text-4xl'>Manage your projects</h2>
                <ul className='list-disc ml-4 mt-3 sm:text-lg sm:py-'>
                    <li>Create a project</li>
                    <li>Project permissions</li>
                    <li>Organize your projects with sections</li>
                    <li>Archive or delete a project</li>
                    <li>Duplicate a project</li>
                    <li>Transfer a project</li>
                </ul>
            </section>
        </main>

        <footer>
            <Footer/>
        </footer>
    </div>
}