"use client";

import React, { useState } from "react";
import UniquenessLandingPage from "./LandingPage";
import SubSections from "./SubSections";
import SubFooter from "./SubFooter";
import Navbar from "../Navbar";
import Footer from "../Footer";

const page = () => {
  const [open, setOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [journeyOpen, setJourneyOpen] = useState(false);
  return (
    <div id="main-content" className="uniqueness-page">

      <UniquenessLandingPage />
      <SubSections />


    </div>
  )
}

export default page;