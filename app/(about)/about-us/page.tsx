import AboutBanner from '@/src/component/aboutbanner'
import AboutDocument from '@/src/component/aboutdocument'
import AdvancedSaltRefining from '@/src/component/AdvancedSaltRefining'
import ImportanceOfSalt from '@/src/component/ImportanceOfSalt'
import QualitySaltCommitment from '@/src/component/QualitySaltCommitment'
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
    <main className='about-page-ui'>
      <AboutBanner/>
      <section className="about-salt-story-ui" aria-label="Salt quality and refining">
        <QualitySaltCommitment/>
        <AdvancedSaltRefining/>
      </section>
      <ImportanceOfSalt/>
      <AboutDocument/>
    </main>
  )
}

export default page
