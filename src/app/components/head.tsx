import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Wrapper from './shared/Wrapper'
export default function Head() {
  return (
    <Wrapper>
          <header className='flex justify-between max-w-screen-xl mx-auto px-3 sticky top-0 pt-2 items-center'>
        {/* logo */}
        <div>
        <h2 className='text-xl font-bold'>Panaverse DAO</h2> */}
        <Image src={"/logo.png"} alt="Panaverse dao logo" width={100} height={100} />
        </div>
        {/* navigation bar */}
        <ul className='flex space-x-4 font-medium'>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/Courses"}>Courses</Link></li>
             
        </ul>
      </header>
      </Wrapper>

     )
}
