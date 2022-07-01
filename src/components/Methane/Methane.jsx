import React, { useState, useEffect } from "react";
import useClientApi from "API/apiClient";
import url from "API/api";
import "Chart/chart.scss";
import RangeStart from "components/Range/RangeStart";
import RangeEnd from "components/Range/RangeEnd";
import ChartN2oMethane from "Chart/ChartN2oMethane";
import ButtonStyle from "components/Button/ButtonStyle";
import { motion, AnimatePresence } from "framer-motion";

const MetaneChart = () => {
  const { /* loading */ data } = useClientApi(url.MetaneLevelUrl);
  const [methane, setMetane] = useState({});
  const [toggle, setToggle] = useState(true);
  let methaneDateValue = Object.values(methane);
  const lastData = methaneDateValue.slice(methaneDateValue.length - 1);
  const dataLength = methane.length;
  const [rangeMax, setRangeMax] = useState(464); //dynamic set don' work
  const [rangeMin, setRangeMin] = useState(0); //dynamic set don't work

  useEffect(() => {
    getData();
  });

  const getData = () => {
    try {
      setMetane(data.methane);
    } catch (error) {}
  };
  const HandleToggle = () => {
    setToggle((prev) => !prev);
    console.log(toggle);
  };
  const updateMax = (range) => {
    setRangeMax(range);
  };
  const updateMin = (range) => {
    setRangeMin(range);
  };
  return (
    <div className="chart-container">
      <motion.h2
        animate={{
          scale: [1, 1.4, 1],
          opacity: 1,
        }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        className="mt-4 title"
      >
        Methane
      </motion.h2>
      <motion.img
        animate={{ scale: [0.7, 1], duration: 3.5, opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.5, ease: "easeOut" }}
        src="../../../img/metane.jpg"
        className="img--chart"
        alt="methane"
      />
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <p className="chart--paragraph">
          Nitrous oxide is a gas that is produced by the combustion of fossil
          fuel and solid waste, nitrogen-base fertilizers, sewage treatment
          plants, natural processes, and other agricultural and industrial
          activities. It is the third largest heat-trapping gas in the
          atmosphere and the biggest ozone-destroying compound emitted by human
          activities.
        </p>
        <p className="chart--paragraph">
          This chart provides on a monthly basis, the amount of nitrous oxide in
          the atmosphere from 2001 to the present. Expressed as a mole fraction
          in dry air, parts per million
        </p>
      </motion.div>
      <AnimatePresence>
        {toggle ? (
          <motion.div
            key="box0"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <ButtonStyle variant="primary" onClick={() => HandleToggle()}>
              Show chart
            </ButtonStyle>
          </motion.div>
        ) : (
          <div>
            <motion.div
              key="box1"
              animate={{ opacity: 1, y: 0, scale: 1 }}
              initial={{ opacity: 0, y: "20%", scale: 0.8 }}
              exit={{ opacity: 0, y: "20%", scale: 0.8 }}
              transition={{ duration: 1 }}
            >
              <div className="chartStyle">
                <ChartN2oMethane
                  label="Methane"
                  rangeMin={rangeMin}
                  rangeMax={rangeMax}
                  elementDateValue={methaneDateValue}
                  background="rgba(235, 216, 127, 0.6)"
                  border="rgb(112, 97, 24)"
                />
                <RangeStart
                  dataLength={dataLength}
                  rangeMin={rangeMin}
                  rangeMax={rangeMax}
                  onChange={(e) => updateMin(e.target.value)}
                />
                <RangeEnd
                  dataLength={dataLength}
                  rangeMin={rangeMin}
                  rangeMax={rangeMax}
                  onChange={(e) => updateMax(e.target.value)}
                />
              </div>
            </motion.div>
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <ButtonStyle variant="secondary" onClick={() => HandleToggle()}>
                Hide chart
              </ButtonStyle>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.3 }}
      >
        <h3>Today's value: {lastData.map((elem) => elem.trend)}</h3>
      </motion.div>
    </div>
  );
};
export default MetaneChart;
