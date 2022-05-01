import React from 'react'
import GREEN_ARROW from './../images/arrow-right.svg'
import MAIN_IMAGE from './../images/featured-image.png'
type Props = {
  children?: any
}

export function FirstSection({}: Props) {
  return (
    <div className="w-full lg:w-4/5 flex flex-col lg:flex-row">
      {/* LEFT */}
      <div className="flex flex-col mb-8 lg:w-1/2 pr-8">
        <h1 className="font-serif font-bold text-rocket-blog-button text-4xl 2xl:text-5xl mb-8 lg:mb-5">
          Veja o guia definitivo para conquistar seus objetivos como DEV em 2022
        </h1>
        <p className="font-sans font-normal text-white text-xl  2xl:text2xl mb-8 lg:mb-5 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu
          in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed
          tristique placerat hac.
        </p>
        <span className="flex justify-center lg:justify-start items-center  font-sans font-semibold text-white cursor-pointer hover:text-rocket-blog-button transition-colors text-base lg:text-xl">
          Veja mais
          <img src={GREEN_ARROW} className="ml-3" />
        </span>
      </div>
      <div className="mb-8 flex lg:w-1/2 justify-end lg:items-center">
        <img src={MAIN_IMAGE} alt="" className="w-full" />
      </div>
    </div>
  )
}
