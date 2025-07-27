"use client"
import { useAuth } from '@clerk/nextjs'
import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { FaSpinner } from 'react-icons/fa'
function Rolepage() {
    const [selected, setSelected] = useState(null)

    const options = [
        { id: 'teacher', src: '/teacher.svg', alt: 'Teacher' },
        { id: 'user', src: '/user.svg', alt: 'User' },
    ]
    const { isLoaded, isSignedIn } = useAuth();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleDashboard = () => {
        if (!isLoaded) return;
        setIsLoading(true);
        const destination = isSignedIn ? '/dashboard' : '/sign-in';
        router.push(destination);
    };
    return (

        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="flex flex-col md:flex-row items-center justify-between md:justify-center md:gap-5 lg:gap-20 w-full h-[90%]">
                {options.map((option) => (
                    <div
                        key={option.id}
                        onClick={() => setSelected(option.id)}
                        className={`relative bg-blue-700
            aspect-square w-[250px] md:w-[500px] flex items-center justify-center opacity-80
            rounded-xl overflow-hidden border-2 transition-all duration-300
            cursor-pointer hover:border-white hover:shadow-md hover:opacity-100
            ${selected === option.id ? 'border-white opacity-100' : ' border-[#757dd9] shadow-lg'}
          `}
                    >
                        <Image className="w-full" src={option.src} width={400} height={400} alt={option.alt} />
                        <p className="absolute bottom-0  text-center bg-[#8E97FD] w-[200px] rounded-t-lg text-white text-lg lg:text-2xl drop-shadow-sm">
                            {option.alt}
                        </p>
                    </div>
                ))}
            </div>
            <div className='flex items-center justify-center w-full h-[10%] '>

                <button
                    onClick={handleDashboard}
                    disabled={isLoading}
                    className={`
          z-2 flex items-center justify-center space-x-2 cursor-pointer
          text-lg lg:text-xl h-10 w-40 lg:h-15 lg:w-50 
          rounded-xl bg-[#8E97FD] text-white
          hover:bg-[#757dd9]
          disabled:cursor-not-allowed disabled:opacity-50
        `}
                >
                    {isLoading && (
                        <FaSpinner className="animate-spin h-5 w-5" />
                    )}
                    <span>{isLoading ? 'Loading...' : 'Next'}</span>
                </button>
            </div>
        </div>

    )
}
export default Rolepage