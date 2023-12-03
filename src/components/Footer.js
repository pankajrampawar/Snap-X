import React from 'react';

export default function Footer() {

return <div className='bg-black text-slate-300 flex justify-center gap-16 py-20 sm:flex-row flex-col items-start px-20 footer'>
    
    <section className='flex lg:gap-16 lg:flex-row flex-col gap-24'>
        
        <div className='flex flex-col gap-3'>
            <h2 className='text-2xl font-bold'>Snap-X</h2>
            <p className='flex flex-col  gap-2'>
                <span>Start Trial</span>
                <span>Pricing</span>
                <span>Download</span>
            </p>
        </div>

        <div className='flex flex-col gap-3'>
            <h2 className='text-2xl font-bold'>Resources</h2>
            <p className='flex flex-col gap-2'>
                <span>Blog</span>
                <span>Help Center</span>
                <span>Release Notes</span>
                <span>Status</span>
            </p>
        </div>

    </section>

    <section className='flex lg:gap-16 flex-col lg:flex-row gap-10'>
        <div className='flex flex-col gap-3'>
            <h2 className='text-2xl font-bold'>Community</h2>
            <p className='flex flex-col gap-2'>
                <span><a href='https://twitter.com/PankajRamPawar'>Twitter</a></span>
                <span> <a href='https://www.linkedin.com/in/pankaj-ram-pawar'>Likedin</a></span>
                <span> <a href='https://wwww.facebook.com'>Facebook</a></span>
                <span> <a href='https://www.dribble.com'>Dribble</a></span>
                <span> <a href='https://podcasters.apple.com/support/828-test-your-podcast'>Podcast</a></span>
            </p>
        </div>

        <div className='flex flex-col gap-3'>
            <h2 className='text-2xl font-bold'>Company</h2>
            <p className='flex flex-col gap-2'>
                <span>About Us</span>
                <span>Careers</span>
                <span>Legal</span>
            </p>
           
        </div>
    </section>
    
    <section >
            <h3 className='text-2xl font-bold '>Contact Us</h3>
            <p>info@spanX.com</p>
    </section>
</div>
}