import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';



const NotFound = () => {
  return (
    <main className="flex-1 flex flex-col items-center justify-center bg-background text-primary-dark dark:bg-background-dark dark:text-primary transition-colors">
      <DotLottieReact
        className='h-64'
        src="https://lottie.host/789aaa1e-4152-4eee-bdb5-46d2f9dc8932/ESZHTElgK2.lottie"
        loop
        autoplay
      />
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">404 – Az oldal nem található</h2>
      <p className="text-base md:text-lg">A keresett oldal nem létezik.</p>
    </main>
  );
}

export default NotFound