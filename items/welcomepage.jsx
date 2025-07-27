// app/page.jsx
'use client';

import { useAuth } from '@clerk/nextjs';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function WelcomePage() {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();

  const handleGetStarted = () => {
    if (!isLoaded) {
      // optionally show a spinner or disable button
      return;
    }
    if (isSignedIn) {
      router.push('/role');
    } else {
      router.push('/sign-in');
    }
  };

  return (
    <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center ">
      <div className='flex-1/2 flex flex-col w-full h-full items-center justify-center  lg:gap-5'>
        <h1 className='text-center text-3xl lg:text-5xl'> <span className='text-[#8E97FD]'>Welcome</span> to SattvaStreak</h1>
        <div className='aspect-video w-full max-w-[370px] sm:max-w-[430px] lg:max-w-[530px] overflow-hidden flex items-center justify-center'>
          <Image className=' scale-150' src={'/logo.svg'} width={700} height={100} alt='logo' />
        </div>
        <div className='w-full max-w-[550px]'>
          <p className='small z-2 text-center text-xl lg:text-3xl'>SattvaStreak helps you stay consistent with your daily Sudarshan Kriya and meditation practice making it as effortless and joyful.</p>
        </div>
      </div>
      <div className="flex-1/2 flex flex-col gap-2 lg:gap-0 w-full h-full items-center justify-center bg-[url('/welcome.svg')] bg-contain bg-no-repeat bg-[position:center_calc(50%_-_20px)]">
        <div className="w-full h-full max-w-[450px] lg:max-w-full flex items-center justify-center ">
        </div>
        <div
          onClick={handleGetStarted}
          className='flex-1/4 flex items-center justify-center w-full'>
          <button
            className='z-2 hover:bg-[#757dd9] cursor-pointer text-lg lg:text-xl h-10 w-50 lg:h-15 lg:w-80 rounded-xl bg-[#8E97FD] text-white'>Get Started</button>
        </div>
      </div>
    </div>

  );
}
