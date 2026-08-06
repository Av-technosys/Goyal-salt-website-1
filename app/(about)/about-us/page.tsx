
import AboutBanner from '@/src/component/aboutbanner'
import AboutCarusal from '@/src/component/aboutcarusal'
import AboutDocument from '@/src/component/aboutdocument'
import AboutSlider from '@/src/component/aboutslider'
import React from 'react'

export const metadata = {
  title: "Goyal Salt Ltd - India's Top Salt Wholesale Suppliers",
  description:
    "Goyal Salt Ltd is one of the top India’s largest salt manufacturers. We serve distributors and suppliers with refined, industrial & edible-grade salt.",
  alternates: {
    canonical: "https://goyalsaltltd.com/about-us",
  },
};

const page = () => {
  return (
    <div className='p-4'>
      <AboutBanner/>
      <AboutSlider/>
      <AboutCarusal/>
      <AboutDocument/>
    </div>
  )
}

export default page