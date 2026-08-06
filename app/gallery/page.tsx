
import PhotoSection from '@/src/component/PhotoSection'
import React from 'react'

export const metadata = {
  title: "Goyal Salt Limited Gallery | Visual Moments & Activities",
  description:
    "View images showcasing Goyal Salt Limited’s facilities, events, and achievements. Experience our journey through a collection of visual highlights.",
  alternates: {
    canonical: "https://goyalsaltltd.com/gallery",
  },
};

  const page = () => {
    return (
      <div>
        
         <PhotoSection/>
      </div>
    )
  }

  export default page