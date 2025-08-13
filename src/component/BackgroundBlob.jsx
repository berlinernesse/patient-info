import React from 'react'
import blobOne from "../assets/Vector.svg"
import blobTwo from "../assets/Vector-1.svg"
import blobThree from "../assets/Vector-2.svg"
import blobFour from "../assets/Vector-3.svg"

export default function BackgroundBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <img src={blobOne}   alt="" className="absolute -top-10 -left-10  w-[220px] md:w-[280px] lg:w-[320px] opacity-70" />
      <img src={blobTwo}   alt="" className="absolute -top-16 -right-6  w-[240px] md:w-[300px] lg:w-[340px] opacity-70" />
      <img src={blobThree} alt="" className="absolute -bottom-24 -left-12 w-[340px] md:w-[420px] lg:w-[520px] opacity-60" />
      <img src={blobFour}  alt="" className="absolute -bottom-28 -right-16 w-[520px] md:w-[620px] lg:w-[720px] opacity-60" />
    </div>
  )
}