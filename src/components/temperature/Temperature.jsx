import React, { useState, useEffect } from "react";
import useClientApi from "API/apiClient";
import url from "API/api";
import "Chart/chart.scss";
import "./temperature.scss";
import RangeStart from "components/Range/RangeStart";
import ChartTemperature from "Chart/ChartTemperature";
import RangeEnd from "components/Range/RangeEnd";
import ButtonStyle from "components/Button/ButtonStyle";
const TemperatureChart = () => {
  const { /* loading, */ data } = useClientApi(url.temperatureUrl);
  const [temperature, setTemperature] = useState({});
  const [toggle, setToggle] = useState(true);
  let temperatureDateValue = Object.values(temperature);
  /* const interDate = temperatureDateValue.map((elem) => Math.floor(elem.time)); */
  /*  console.log(interDate); */
  /*  var uniqueArr = [...new Set(interDate)];
  console.log(uniqueArr); */
  const lastData = temperatureDateValue.slice(temperatureDateValue.length - 1);
  const dataLength = temperature.length;
  const [rangeMax, setRangeMax] = useState(1709); //dynamic set don' work
  const [rangeMin, setRangeMin] = useState(0); //dynamic set don't work

  useEffect(() => {
    getData();
  }); //provato a toglierlo e non da errori

  const getData = () => {
    try {
      setTemperature(data.result);
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
      <h2 className="mt-4 title">Temperature</h2>
      <img
        src="../../../img/temperature_2.jpg"
        className="img--chart"
        alt="temperature"
      />
      <p className="chart--paragraph">
        The current global warming rate is not natural. From 1880 to 1981 was
        (0.07°C / 0.13°F) per decade. Since 1981 this rate has increased to
        (0.18°C / 0.32°F) Climate Change: Global Temperature. Some of the past
        sudden increase on global temperature present in this graph, correspond
        to the Roman Warm Period and the Medieval Warm Period. These events were
        at regional and not global scale.
      </p>
      <p className="chart--paragraph">
        The total average global temperature rise since the industrial
        revolution is around (1.0 °C / 1.8 °F). Earth northern hemisphere is
        warming faster. The arctic has warmed between (2 °C / 3.6 °F) and (4 °C
        / 7.2 °F).
      </p>
      <p className="chart--paragraph">
        This chart below provides on a monthly basis, the global mean surface
        temperature anomaly from 1880.04 to the present (in celsius).
      </p>
      {toggle ? (
        <div>
          <div>
            <ButtonStyle variant="primary" onClick={() => HandleToggle()}>
              Show chart
            </ButtonStyle>
          </div>
        </div>
      ) : (
        <div>
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

          <ButtonStyle variant="secondary" onClick={() => HandleToggle()}>
            Hide chart
          </ButtonStyle>
        </div>
      )}

      <h3>Today's value: {lastData.map((elem) => elem.station)}</h3>
    </div>
  );
};

export default TemperatureChart;
