"use client";
import React, { useState } from "react";
import SaucePageOne from "./saucepageone";
import Navbar from "../Navbar";

const SaucesPage = ({ initialSaucesData }) => {
    const [open, setOpen] = useState(false);
    const [locationsOpen, setLocationsOpen] = useState(false);

    return (
        <div id="main-content">
            <SaucePageOne initialData={initialSaucesData} />
        </div>
    );
};

export default SaucesPage;