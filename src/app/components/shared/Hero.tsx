import React from 'react'
import Wrapper from '../../components/shared/Wrapper'
import Image from 'next/image'
import Button from './Button'
const Hero = () => {
  return (
    
    <Wrapper>
  
      <div  className='flex flex-col md:flex-row  items-center '>
            {/*left side */}
            <div className='flex-1'>
                <h4 className='text-[#00616C] font-semibold text-lg '>
                Presidential Initiative for Artificial Intelligence and Computing (PIAIC)
                </h4>
                <h1 className={'text-5xl sm:text-6xl font-bold leading text-gray-900 md:text-red-400 lg:text-blue-900'}>Certified Web 3.0 and <br />
                 Metaverse Developer</h1>
           
            <p className='mt-6 text-xl text-slate-700 '>A One and Quarter Years Panaverse DAO Earn as you Learn <br /> Program Getting Ready for the Next Generation of the Internet
            Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),<br /> Cloud, Edge, Ambient Computing/IoT, Network Automation, and <br />Bioinformatics Technologies</p>
<div className='mt-5'>
            <Button text={"Learn More"}/>
            
            </div>
        </div>
        <div className='flex-1'>
        {/* Right side */}
    <Image src="/images/Hero Poster.png" alt="hero Poster" width={500} height={500}/>
    </div>
    </div>
    
        </Wrapper>
    
    
            
  )
}


export default Hero
