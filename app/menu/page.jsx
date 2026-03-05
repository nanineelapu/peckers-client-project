"use client";
import React, { useState } from 'react'
import BurgerPageText from './BurgerPageText'
import BurgerTitleSection from './BurgerTitleSection'
import Link from 'next/link'
import Navbar from '../Navbar';


const page = () => {
  const [open, setOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [journeyOpen, setJourneyOpen] = useState(false);
  return (
    <div id="main-content">


      <Navbar />

      <BurgerTitleSection />
      <BurgerPageText />

    </div>
  )
}

export default page;