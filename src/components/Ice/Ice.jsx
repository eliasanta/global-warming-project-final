import React, { useState, useEffect } from "react";
import useClientApi from "API/apiClient";
import url from "API/api";
import "Chart/chart.scss";
import RangeStart from "components/Range/RangeStart";
import RangeEnd from "components/Range/RangeEnd";
import ChartIce from "Chart/ChartIce";
import ButtonStyle from "components/Button/ButtonStyle";

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
      <h2 className="mt-4 title">Artic Ice Melted</h2>
      <img src="../../../img/pinguins.jpg" className="img--chart" alt="Ice" />
      <p className="chart--paragraph">
        The arctic is warming around twice as fast as global average. Some of
        the reasons for this are: The arctic amplification, the albedo effect,
        and black carbon. From 1979 to 1996, we lost 2.2 – 3% of the arctic ice
        cover. From 2010 to present we are losing 12.85% per decade! Another
        consequence is permafrost thawing. This is a process in which large
        amounts of methane is released to the atmosphere, fueling more the
        process of global warming.
      </p>
      <p className="chart--paragraph">
        This chart provides the average monthly arctic sea ice extent each
        September since 1979, derived from satellite observations.
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

          <ButtonStyle variant="secondary" onClick={() => HandleToggle()}>
            Hide chart
          </ButtonStyle>
        </div>
      )}

      <h3>
        {" "}
        Today's value area :{lastData.map((elem) => elem.area)} , extent:{" "}
        {lastData.map((elem) => elem.extent)}
      </h3>
    </div>
  );
};

export default IceChart;
