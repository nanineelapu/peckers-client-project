"use client";
import React, { useState } from "react";
import SaucePageOne from "./saucepageone";
import Navbar from "../Navbar";

const page = () => {
    const [open, setOpen] = useState(false);
    const [locationsOpen, setLocationsOpen] = useState(false);

    return (
        <div id="main-content">
            <SaucePageOne />
        </div>
    );
};

export default page;