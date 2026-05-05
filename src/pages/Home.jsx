import React from 'react'
import { HeroSection } from '../components/home/HeroSection'
import { PopularCats } from '../components/home/PopularCats'
import { CollectionCTA } from '../components/home/CollectionCTA'
import { BestSeller } from '../components/home/BestSeller'
import { Services } from '../components/home/Services'
import { TrustedBy } from '../components/home/TrustedBy'
import { TopCollection } from '../components/home/TopCollection'
import { Testimonial } from '../components/home/Testimonial'
import { Favorites } from '../components/home/Favorites'
import { CtaSection } from '../components/home/CtaSection'
import { InstagramSlider } from '../components/home/InstagramSlider'

export const Home = () => {
    return (
        <>
            <HeroSection />
            <PopularCats />
            <CollectionCTA />
            <BestSeller />
            <Services />
            <TrustedBy />
            <TopCollection />
            <Testimonial />
            <Favorites />
            <CtaSection />
            <InstagramSlider />
        </>
    )
}
