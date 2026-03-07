"use client";
import React from 'react'
import BurgerPageText from './BurgerPageText'
import BurgerTitleSection from './BurgerTitleSection'

const page = () => {
  return (
    <div id="main-content">

      <BurgerTitleSection />
      <BurgerPageText />
    </div>
  )
}

export default page;