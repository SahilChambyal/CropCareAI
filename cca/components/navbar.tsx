import {UserButton} from '@clerk/nextjs'
import Image from 'next/image'

const Navbar = () => {

    return(
        <div className='top-3 py-4 shadow-2xl z-[10] bg-[#fff]'> 
        <div className='flex space-x-4 justify-center'>
            <div className='max-w-80% flex space-x-4 justify-evenly z-10 '>
            <div className='cursor-pointer rounded-md px-[20px] mt-2 py-2 hover:scale-110 transition-all text-[#242021]'>
                <Image src={'/images/apple.png'} alt='logo' height={30} width={30}/>
            </div>
            <div className='cursor-pointer rounded-md px-[20px] mt-2 py-2 hover:scale-110 transition-all text-[#242021]'>News</div>
            <div className='cursor-pointer rounded-md px-[20px] mt-2 py-2 hover:scale-110 transition-all text-[#242021]'>Contact</div>
            <div className='cursor-pointer rounded-md px-[20px] mt-2 py-2 hover:scale-110 transition-all text-[#242021]'>About Us</div>
            </div>
            <div className='pr-[50px] flex justify-center'>
            <UserButton className='text-xxl'/>
                
            </div>
        </div>
        </div>
    )
}

export default Navbar