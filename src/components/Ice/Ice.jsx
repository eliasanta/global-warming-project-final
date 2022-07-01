import React, { useState, useEffect } from "react";
import useClientApi from "API/apiClient";
import url from "API/api";
import "Chart/chart.scss";
import RangeStart from "components/Range/RangeStart";
import RangeEnd from "components/Range/RangeEnd";
import ChartIce from "Chart/ChartIce";
import ButtonStyle from "components/Button/ButtonStyle";
import { motion, AnimatePresence } from "framer-motion";

const IceChart = () => {
  const { /* loading, */ data } = useClientApi(url.PolarIceUrl);
  const [ice, setIce] = useState({});
  const [toggle, setToggle] = useState(true);
  let iceDateValue = Object.values(ice);

  const lastData = iceDateValue.slice(iceDateValue.length - 1);
  const dataLength = ice.length;
  const [rangeMax, setRangeMax] = useState(43);
  const [rangeMin, setRangeMin] = useState(0);

  useEffect(() => {
    getData();
  });

  const getData = () => {
    try {
      setIce(data.arcticData);
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
        Artic Ice Melted
      </motion.h2>
      <motion.img
        animate={{ scale: [0.7, 1], duration: 3.5, opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.5, ease: "easeOut" }}
        src="../../../img/pinguins.jpg"
        className="img--chart"
        alt="Ice"
      />
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <p className="chart--paragraph">
          The arctic is warming around twice as fast as global average. Some of
          the reasons for this are: The arctic amplification, the albedo effect,
          and black carbon. From 1979 to 1996, we lost 2.2 – 3% of the arctic
          ice cover. From 2010 to present we are losing 12.85% per decade!
          Another consequence is permafrost thawing. This is a process in which
          large amounts of methane is released to the atmosphere, fueling more
          the process of global warming.
        </p>
        <p className="chart--paragraph">
          This chart provides the average monthly arctic sea ice extent each
          September since 1979, derived from satellite observations.
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
                <ChartIce
                  label1="Area"
                  label2="Extent"
                  rangeMin={rangeMin}
                  rangeMax={rangeMax}
                  elementDateValue={iceDateValue}
                  background="rgba(54, 34, 168, 0.6)"
                  border1="rgb(49, 154, 214)"
                  border2="rgb(3, 12, 168)"
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
        <h3>
          {" "}
          Today's value area :{lastData.map((elem) => elem.area)} , extent:{" "}
          {lastData.map((elem) => elem.extent)}
        </h3>
      </motion.div>
    </div>
  );
};

export default IceChart;
