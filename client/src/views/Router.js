import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

const LandingPage = lazy(() => import("../views/LandingPage"));
const CreateAccount = lazy(() => import("../views/CreateAccount"));

export const Router = () => {
  return (
    <BrowserRouter basename="/">
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};
