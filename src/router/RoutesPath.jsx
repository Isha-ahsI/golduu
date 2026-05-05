import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Collection } from "../pages/Collection";
import { SignIn } from "../pages/SignIn";
import { NotFound } from "../pages/NotFound";
import { ComingSoon } from "../pages/ComingSoon";

export const RoutesPath = () => {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/coming-soon" element={<ComingSoon />} />

        {/* Protected Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/collections" element={<Collection />} />
        <Route path="/contactus" element={<Contact />} />
        
         {/* 404 Route - Must be last and public */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
