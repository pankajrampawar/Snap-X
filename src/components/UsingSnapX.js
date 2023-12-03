import React from 'react';
import Navbar from './navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

export default function UsingSnapX() {

    const navigate = useNavigate();

    return <div>
        <header className='bg-teal-800'>
            <Navbar/>
            <section className='flex justify-start flex-col py-14 px-4 gap-6 md:px-20'>
                <div className='flex text-sm'><span className='hover:underline' onClick={()=> navigate('/')}>Snap-X</span><img src='/assests/arrowRight.svg'/><span className='hover:underline'>using Snap-x</span></div>

                <div className='flex flex-col items-start gap-4'>
                    <h1 className='text-4xl font-semibold tracking-wide sm:text-5xl sm:text-bold'>Using Snap-X</h1>
                    <p className='text-lg sm:text-xl' >Snap-X lets you manage, version and document your designs in one place.</p>
                </div>
            </section>
        </header>

        <main className='py-20 flex flex-col gap-8 bg-slate-100 px-6 sm:px-2 md:items-center'>

            <section className='flex flex-col gap-8 sm:flex-row md:justify-between lg:gap-40  md:max-w-[1020px] '>
               
                <div className='flex flex-col gap-6 sm:w-1/2 '>
                    <h2 className='text-3xl font-semibold md:text-4xl'>Get Started in Snap-x</h2>
                    <ul className='list-disc ml-5 text-xl flex flex-col gap-3'>
                        <li>Try out Snap-X</li>
                        <li>The Snap-x design Workflow</li>
                        <li>Start working in Snap-X</li>
                        <li>Practice Abstract workflow</li>
                        <li>Glossary</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-6 sm:w-1/2'>
                    <h2 className='text-3xl font-semibold md:text-4xl'>Using the Snap-X Desktop App</h2>
                    <ul className='list-disc ml-5 text-xl flex flex-col gap-3'>
                        <li>Update the newest version of Snap-X</li>
                        <li>Backing up your work in Snap-X</li>
                        <li>System requirements</li>
                        <li>Downloading the Sanp-X Desktop Application</li>
                        <li>The Abstract Plugin</li>
                        <li>Keyboard Shorcuts</li>
                    </ul>
                </div>
            </section>

            <section className='flex flex-col gap-8 sm:flex-row md:gap-10 lg:gap-40 md:max-w-[1020px] w-full'>

                <div className='flex flex-col gap-6 sm:w-1/2 '>
                    <h2 className='text-3xl font-semibold md:text-4xl'>Working in projects</h2>
                    <ul className='list-disc ml-5 text-xl flex flex-col gap-3'>
                        <li>Name your projects</li>
                        <li>Add files to your project</li>
                        <li>Create a branch</li>
                        <li>Open untracked vs. Creating a branch</li>
                        <li>Change branch status</li>
                        <li>Rename a branch</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-6 sm:w-1/2 '>
                    <h2 className='text-3xl font-semibold md:text-4xl'> Commit your work</h2>
                    <ul className='list-disc ml-5 text-xl flex flex-col gap-3'>
                        <li>A guide to commit</li>
                        <li>Commiting changes in a branch</li>
                        <li>Commit history</li>
                        <li>Troubleshoot your commits</li>
                    </ul>
                </div>

            </section>

            <section className='flex flex-col gap-8 sm:flex-row md:gap-10 lg:gap-40 md:max-w-[1020px] w-full'>

                <div className='flex flex-col gap-6 sm:w-1/2 '>
                    <h2 className='text-3xl font-semibold md:text-4xl'>Merge Your work</h2>
                    <ul className='list-disc ml-5 text-xl flex flex-col gap-3'>
                        <li>A guide to merging</li>
                        <li>Merging to the main branch</li>
                        <li>Resolve conflicts</li>
                        <li>Restore the previous commits</li>
                        <li>Merge restrictions</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-6 sm:w-1/2 '>
                    <h2 className='text-3xl font-semibold md:text-4xl'>Work with libraries</h2>
                    <ul className='list-disc ml-5 text-xl flex flex-col gap-3'>
                        <li>Libraries overview</li>
                        <li>Add a library</li>
                        <li>Link a library</li>
                        <li>Update a library</li>
                        <li>Work with dependencies</li>
                    </ul>
                </div>
                
            </section>

            <section className='flex flex-col gap-8 sm:flex-row md:gap-10 lg:gap-40 md:max-w-[1020px] w-full'>

                <div className='flex flex-col gap-6 sm:w-1/2 '>
                    <h2 className='text-3xl font-semibold md:text-4xl'>Collaborate in projects</h2>
                    <ul className='list-disc ml-5 text-xl flex flex-col gap-3'>
                        <li>Share your designs</li>
                        <li>Request a design review</li>
                        <li>Use Collections</li>
                        <li>Sections wiht collecitons</li>
                        <li>Leave comments and annotations</li>
                        <li>Assests</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-6 sm:w-1/2 '>
                    <h2 className='text-3xl font-semibold md:text-4xl'>Troubleshooting Abstract</h2>
                    <ul className='list-disc ml-5 text-xl flex flex-col gap-3'>
                        <li>General Troubleshooting</li>
                        <li>Troubleshooting sync errors</li>
                        <li>Resolve a pending commit</li>
                        <li>Resolve diverged branches</li>
                        <li>Previews and asset generation</li>
                        <li>Sync library components in sketch</li>
                    </ul>
                </div>  

            </section>
        </main>

        <fotter>
            <Footer/>
        </fotter>
    </div>
}