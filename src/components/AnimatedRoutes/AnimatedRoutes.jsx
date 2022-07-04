import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import TemperatureChart from "components/temperature/Temperature";
import NitrousOxideChart from "components/NitrousOxide/NitrousOxide";
import CarbonDioxidChart from "components/CarbonDioxid/Co2";
import MethaneChart from "components/Methane/Methane";
import IceChart from "components/Ice/Ice";
import HomeCarousel from "components/Home/HomeCarousel";
import HomeDescription from "components/Home/HomeDescription";
import { AnimatePresence } from "framer-motion";
import { NotFound } from "components/PageNotFound/NotFound";
import ErrorBoundary from "components/ErrorBoundary/ErrorBoundary";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <div>
              <ErrorBoundary>
                <HomeCarousel />
              </ErrorBoundary>
              <ErrorBoundary>
                <HomeDescription />
              </ErrorBoundary>
            </div>
          }
        />
        <Route
          path="/temperature"
          element={
            <ErrorBoundary>
              <TemperatureChart />
            </ErrorBoundary>
          }
        />
        <Route
          path="/co2"
          element={
            <ErrorBoundary>
              <CarbonDioxidChart />
            </ErrorBoundary>
          }
        />
        <Route
          path="/methane"
          element={
            <ErrorBoundary>
              <MethaneChart />
            </ErrorBoundary>
          }
        />
        <Route
          path="/n2o"
          element={
            <ErrorBoundary>
              <NitrousOxideChart />
            </ErrorBoundary>
          }
        />
        <Route
          path="/articIce"
          element={
            <ErrorBoundary>
              <IceChart />
            </ErrorBoundary>
          }
        />
        <Route
          path="*"
          element={
            <ErrorBoundary>
              <NotFound />
            </ErrorBoundary>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
