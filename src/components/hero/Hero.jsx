import React from 'react'

const Hero = () => {
  return (
     <div
     className="hero min-h-screen w-full p-0">
     <div className="hero-overlay bg-opacity-60"></div>
     <div className="hero-content text-neutral-content text-center">
       <div className="max-w-xl">
         <h1 className="mb-5 text-6xl font-bold">Hello there</h1>
         <p className="mb-5 text-3xl font-semibold">
         MAKE YOUR HEALTHY BODY STRONG IS OUR RESPONSIBILITY
         </p>
         <button className="btn btn-primary rounded-none">About Us</button>
       </div>
     </div>
   </div>
  )
}

export default Hero
