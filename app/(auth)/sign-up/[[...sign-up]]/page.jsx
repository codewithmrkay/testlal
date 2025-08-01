import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return(
      <div className='w-full h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] flex items-center justify-center'>
            <SignUp/>
      </div>
    ) 
}