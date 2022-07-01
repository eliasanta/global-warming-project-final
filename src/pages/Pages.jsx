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

function Pages() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location}>
          <Route
            path="/"
            element={
              <div>
                <HomeCarousel />
                <HomeDescription />
              </div>
            }
          />
          <Route path="/temperature" element={<TemperatureChart />} />
          <Route path="/co2" element={<CarbonDioxidChart />} />
          <Route path="/methane" element={<MethaneChart />} />
          <Route path="/n2o" element={<NitrousOxideChart />} />
          <Route path="/articIce" element={<IceChart />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default Pages;
