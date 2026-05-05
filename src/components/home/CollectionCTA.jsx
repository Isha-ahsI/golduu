import React from 'react'
import { PrimaryButton } from '../ui/Button'

export const CollectionCTA = () => {
    return (
        <>
            <section className='md:flex md:flex-row gap-2.5 relative'>
                {/* left side content */}
                <div className="w-full md:w-1/2 md:relative absolute z-30 md:top-0 md:left-0 md:translate-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <div className='rounded-2xl overflow-hidden xl:size-122.5 sm:size-80 size-50 absolute ma:top-0 md:left-2.5 left-2 top-0 md:translate-y-0 -translate-y-1/2 z-10 shadow-lg'>
                        <img src="/images/collection/chain/img4.jpg" alt="Collection Image" className='w-full h-full object-cover' />
                    </div>
                    <div className='rounded-2xl overflow-hidden relative bg-primary px-5 py-8 z-20 inline-block xl:max-w-md max-w-sm xl:mx-0 mx-4 shadow-2xl'>
                        <h1 className='xl:text-5xl md:text-2xl font-medium text-gold-500'>Refined jewelry created for modern living and effortless beauty.</h1>
                        <PrimaryButton size="sm" className='mt-8'>Our Collection</PrimaryButton>
                    </div>
                    <div className='rounded-2xl overflow-hidden xl:size-122.5 sm:size-80 size-50 absolute md:bottom-0 md:right-0 right-2 bottom-0 md:translate-y-0 translate-y-1/2 z-10 shadow-lg'>
                        <img src="/images/collection/product3.jpg" alt="Collection Image" className='w-full h-full object-cover' />
                    </div>
                </div>
                {/* right side image */}
                <div className="w-full md:w-1/2 relative overflow-hidden z-10 xl:ms-10">
                    <div className="absolute inset-0 bg-black/50 z-20 md:hidden backdrop-blur-xs"></div>
                    <img
                        src="/images/collection/product1.jpg"
                        alt="Collection Image"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>
        </>
    )
}
