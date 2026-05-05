import React from 'react'
import { PrimaryButton } from '../ui/Button'


// cta section
export const CtaSection = () => {
  return (
    <>
      <section className="sm:my-25 my-18.5 text-center flex justify-center items-center overflow-hidden">
        <div className="container">
            <div className="bg-primary rounded-2xl overflow-hidden p-12.5 max-w-6xl sm:mx-auto mx-4">
                <p className='text-gold-100 text-3xl font-medium md:mb-12 mb-8'>Subscribe To Our Newseller</p>
                <form className='sm:space-y-0 space-y-4'>
                    <div className="input-group flex items-center border border-gold-500/25 bg-white/25 rounded-md ps-4 pe-2 py-2 backdrop-blur-md max-w-3xl mx-auto focus-within:border-gold-500 focus-within:shadow-[0_0px_35px_rgba(var(--color-gold-rgb),0.25)]">
                      <input type="email" placeholder='Enter Your Email'  id="ctaEmail" name="ctaEmail" className="flex-1 bg-transparent text-white text-base placeholder-white/50 sm:px-2 sm:py-2 focus:outline-none" required/>
                      <PrimaryButton type="submit" size="sm" className="rounded-md hover:translate-y-0 sm:block hidden">Subscribe</PrimaryButton>
                    </div>
                    <PrimaryButton type="submit" size="sm" className="rounded-md hover:translate-y-0 sm:hidden block mx-auto">Subscribe</PrimaryButton>
                </form>
            </div>
        </div>
      </section>
    </>
  )
}
