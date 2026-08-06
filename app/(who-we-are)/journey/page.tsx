import React from 'react'
import Formjourney from './Formjourney'
import BannerJourney from './BannerJourney'
import QuoteSection from './QuoteSection'

export const metadata = {
  title: "Goyal Salt Limited Journey | Company Story & Progress",
  description:
    "Discover the journey of Goyal Salt Ltd, the story of progress, innovation, growth phases and key moments that define who we are today as a company.",
  alternates: {
    canonical: "https://goyalsaltltd.com/journey",
  },
};


const page = () => {
  return (
    <div>
      <BannerJourney />
    <Formjourney/>
    <QuoteSection />
    </div>
  )
}

export default page