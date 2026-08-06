import React from 'react'
import Formproduct from './Formproduct'

export const metadata = {
  title: "Our Premium Salt Products Range | Goyal Salt Limited ",
  description:
    "Browse the wide range of high-quality salt products from Goyal Salt Ltd. From iodised salt to black & pink salt and mediplus salt. Order online today.",
  alternates: {
    canonical: "https://goyalsaltltd.com/products",
  },
};

const page = () => {
  return (
    <div>
      <Formproduct/>
    </div>
  )
}

export default page