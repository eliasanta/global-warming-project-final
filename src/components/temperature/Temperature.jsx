import React, { useState, useEffect } from "react";
import useClientApi from "API/apiClient";
import url from "API/api";
import "Chart/chart.scss";
import "./temperature.scss";
import RangeStart from "components/Range/RangeStart";
import ChartTemperature from "Chart/ChartTemperature";
import RangeEnd from "components/Range/RangeEnd";
import ButtonStyle from "components/Button/ButtonStyle";
import { motion, AnimatePresence } from "framer-motion";

const TemperatureChart = () => {
  const { data } = useClientApi(url.temperatureUrl);
  const [temperature, setTemperature] = useState({});
  const [toggle, setToggle] = useState(true);
  let temperatureDateValue = Object.values(temperature);

  const lastData = temperatureDateValue.slice(temperatureDateValue.length - 1);
  const dataLength = temperature.length;
  const [rangeMax, setRangeMax] = useState(1709); //dynamic set don' work
  const [rangeMin, setRangeMin] = useState(0); //dynamic set don't work

  useEffect(() => {
    getData();
  });

  const getData = () => {
    try {
      setTemperature(data.result);
    } catch (error) {
      console.log(error);
    }
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
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
      className="chart-container"
    >
      <h1>test</h1>
    </motion.div>
    /*
      <motion.h2
        animate={{
          scale: [1, 1.4, 1],
          opacity: 1,
        }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        className="mt-4 title"
      >
        Temperature
      </motion.h2>

      <motion.img
        animate={{ scale: [0.7, 1], duration: 3.5, opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.5, ease: "easeOut" }}
        src="../../../img/temperature_2.jpg"
        className="img--chart"
        alt="temperature"
      />

      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <p className="chart--paragraph">
          The current global warming rate is not natural. From 1880 to 1981 was
          (0.07°C / 0.13°F) per decade. Since 1981 this rate has increased to
          (0.18°C / 0.32°F) Climate Change: Global Temperature. Some of the past
          sudden increase on global temperature present in this graph,
          correspond to the Roman Warm Period and the Medieval Warm Period.
          These events were at regional and not global scale.
        </p>
        <p className="chart--paragraph">
          The total average global temperature rise since the industrial
          revolution is around (1.0 °C / 1.8 °F). Earth northern hemisphere is
          warming faster. The arctic has warmed between (2 °C / 3.6 °F) and (4
          °C / 7.2 °F).
        </p>
        <p className="chart--paragraph">
          This chart below provides on a monthly basis, the global mean surface
          temperature anomaly from 1880.04 to the present (in celsius).
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
              transition={{ duration: 0.8 }}
            >
              <div className="chartStyle">
                <ChartTemperature
                  label="Temperature"
                  rangeMin={rangeMin}
                  rangeMax={rangeMax}
                  elementDateValue={temperatureDateValue}
                  background="rgba(176, 4, 124, 0.6)"
                  border="rgb(220,11,130)"
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
              transition={{ duration: 0.1 }}
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
        transition={{ duration: 1.3 }}
      >
        <h3>Today's value: {lastData.map((elem) => elem.station)}</h3>
        </motion.div>*/

    /* </motion.div> */
  );
};

export default TemperatureChart;
