import React from 'react';

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const toggleMenu = ()=>{
        setIsMenuOpen(prev => !prev);
    }

    return <div>
        <nav className={`w-screen bg-black text-white flex justify-between px-2 sm:px-16 py-5 items-center ${isMenuOpen ? 'border-b': ''} relative`}>
            <div className='flex gap-2'>
                <span className='text-3xl after:content'>Snap-X |</span>
                <span className='text-xl self-end'>Help Center</span>
            </div>
            <div className='sm:flex gap-4 hidden'>
                <button className='text-xl font-extralight border p-2 rounded-lg hover:border-teal-950 hover:text-teal-300'>Submit a request</button>
                <button className='text-xl font-light border p-2 rounded-lg bg-teal-900 hover:bg-black hover:text-teal-200'>Sign in</button>
            </div>
            <div className='sm:hidden flex items-center justify-center'>
                {!isMenuOpen ? 
                    <div onClick={toggleMenu} className='menu '><img src='/assests/menu.svg' alt='menu icon' /></div>:
                    <div onClick={toggleMenu} className='pr-3 text-xl '>X</div>
                }
            </div>
        </nav>
        { <div className={`absolute botton-0 h-44 bg-black w-full flex flex-col items-center text-white justify-center gap-3 drawer ${isMenuOpen? 'show': ''} sm:hidden`}>
            <span className='text-3xl font-thin border-b pb-3 tracking-wider'>Submit a request</span>
            <span className='text-xl font-light tracking-wider'>Sign in</span>
        </div>}

    </div>
}

export default Navbar;