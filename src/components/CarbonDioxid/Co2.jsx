import React, { useState, useEffect } from "react";
import useClientApi from "API/apiClient";
import url from "API/api";
import "Chart/chart.scss";
import RangeStart from "components/Range/RangeStart";
import RangeEnd from "components/Range/RangeEnd";
import ChartCo2 from "Chart/ChartCo2";
import ButtonStyle from "components/Button/ButtonStyle";
import { motion, AnimatePresence } from "framer-motion";

const CarbonDioxidChart = () => {
  const { /* loading, */ data } = useClientApi(url.CarbonDioxid);
  const [co2, setCo2] = useState({});
  const [toggle, setToggle] = useState(true);

  let co2DateValue = Object.values(co2);
  const lastData = co2DateValue.slice(co2DateValue.length - 1);

  const dataLength = co2.length;
  const [rangeMax, setRangeMax] = useState(3831); //range set
  const [rangeMin, setRangeMin] = useState(0);

  useEffect(() => {
    getData();
  });

  const getData = () => {
    try {
      setCo2(data.co2);
    } catch (error) {}
  };
  const HandleToggle = () => {
    setToggle((prev) => !prev);
  };
  const updateMax = (range) => {
    setRangeMax(range);
  };
  const updateMin = (range) => {
    setRangeMin(range);
  };
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="chart-container"
    >
      <motion.h2
        animate={{
          scale: [1, 1.1, 1],
          opacity: 1,
        }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-4 title"
      >
        Carbon Dioxide
      </motion.h2>
      <motion.img
        animate={{ scale: [0.7, 1], duration: 3, opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ ease: "easeOut" }}
        src="../../../img/co2.jpg"
        className="img--chart"
        alt="co2"
      />
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <p className="chart--paragraph">
          For thousands of years, the natural concentration of CO2 in earth
          atmosphere was around 280 ppm. From the beginning of the industrial
          revolution, human activities like the burning of fossil fuels,
          deforestation, and livestock have increased this amount by more than
          30%.
        </p>
        <p className="chart--paragraph">
          This chart provide on a quasi-daily basis, the amount of carbon
          dioxide (CO2) in the atmosphere from 2010.01.01 to the present. It is
          expressed as a mole fraction in dry air, parts per million (ppm).
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
                <ChartCo2
                  label="CO2"
                  rangeMin={rangeMin}
                  rangeMax={rangeMax}
                  elementDateValue={co2DateValue}
                  background="rgba(75, 192, 192, 0.6)"
                  border="rgb(128,86,245)"
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
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
            >
              <ButtonStyle onClick={() => HandleToggle()} variant="secondary">
                Hide chart
              </ButtonStyle>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h3 className="today--value">
          Today's value: {lastData.map((elem) => elem.trend)}
        </h3>
      </motion.div>
    </motion.div>
  );
};

export default CarbonDioxidChart;
