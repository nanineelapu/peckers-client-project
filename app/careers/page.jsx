"use client";
import React, { useState } from "react";
import CareersLandingPage from "./CareersLandingPage";
import CrewPage from "./CrewPage";
import RolesWithPeckers from "./RolesWithPeckers";
import ApplyDetailsPage from "./ApplyDetailsPage";
import Navbar from "../Navbar";

const CareersPage = () => {
    const [open, setOpen] = useState(false);
    const [locationsOpen, setLocationsOpen] = useState(false);
    const [journeyOpen, setJourneyOpen] = useState(false);

    return (

        <div id="main-content">
            <CareersLandingPage />
            <CrewPage />
            <RolesWithPeckers />
            <ApplyDetailsPage />
        </div>
    )
}

export default CareersPage;
