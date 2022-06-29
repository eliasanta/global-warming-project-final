import React, { useState, useEffect } from "react";
import useClientApi from "API/apiClient";
import url from "API/api";
import "Chart/chart.scss";
import RangeStart from "components/Range/RangeStart";
import RangeEnd from "components/Range/RangeEnd";
import ChartN2oMethane from "Chart/ChartN2oMethane";
import ButtonStyle from "components/Button/ButtonStyle";

const NitrousOxideChart = () => {
  const { /* loading, */ data } = useClientApi(url.NitrousOxideUrl);
  const [n2o, setN2o] = useState({});
  const [toggle, setToggle] = useState(true);
  let n2oDateValue = Object.values(n2o);
  const lastData = n2oDateValue.slice(n2oDateValue.length - 1);
  useEffect(() => {
    getData();
  });
  const dataLength = n2o.length;
  const [rangeMax, setRangeMax] = useState(254); //dynamic set don' work
  const [rangeMin, setRangeMin] = useState(0); //dynamic set don't work

  const getData = () => {
    try {
      setN2o(data.nitrous);
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
      <h2 className="mt-4 title">Nitrous Oxide</h2>
      <img
        src="../../../img/n2o.jpg"
        className="img--chart"
        alt="nitrous oxide"
      />
      <p className="chart--paragraph">
        Nitrous oxide is a gas that is produced by the combustion of fossil fuel
        and solid waste, nitrogen-base fertilizers, sewage treatment plants,
        natural processes, and other agricultural and industrial activities. It
        is the third largest heat-trapping gas in the atmosphere and the biggest
        ozone-destroying compound emitted by human activities.
      </p>
      <p className="chart--paragraph">
        This chart provides on a monthly basis, the amount of nitrous oxide in
        the atmosphere from 2001 to the present. Expressed as a mole fraction in
        dry air, parts per million
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
            <ChartN2oMethane
              label="Nitrous Oxide"
              rangeMin={rangeMin}
              rangeMax={rangeMax}
              elementDateValue={n2oDateValue}
              background="rgba(240, 156, 53, 0.6)"
              border="rgb(227, 193, 100)"
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

      <h3>Today's value: {lastData.map((elem) => elem.trend)}</h3>
    </div>
  );
};

export default NitrousOxideChart;
