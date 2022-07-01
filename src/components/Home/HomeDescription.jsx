import React from "react";
import "./home.scss";
import AOS from "aos";
import "aos/dist/aos.css";
function HomeDescription() {
  AOS.init();
  return (
    <div className="description--container">
      <div className="description">
        <h2 className="home--title mb-4">Global Warming live graphs</h2>
        <div data-aos-duration="2000" data-aos="fade-up">
          <p>
            This site delivers up to date information about the earth's current
            temperature, the concentration of greenhouse gases in the
            atmosphere, and some information about global warming.
          </p>
          <p>
            This will become an increasingly topical issue, so it is very
            important to make people aware of it so here we try to explain the
            problem with some data.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className="mt-5">
          <h4>What is Global Warming?</h4>
          <p>
            Global warming is the long-term heating of Earth’s climate system
            observed since the pre-industrial period (between 1850 and 1900) due
            to human activities, primarily fossil fuel burning, which increases
            heat-trapping greenhouse gas levels in Earth’s atmosphere.
          </p>
          <p>
            {" "}
            The term is frequently used interchangeably with the term climate
            change, though the latter refers to both human- and naturally
            produced warming and the effects it has on our planet.
          </p>
          <p>
            It is most commonly measured as the average increase in Earth’s
            global surface temperature. Since the pre-industrial period, human
            activities are estimated to have increased Earth’s global average
            temperature by about 1 degree Celsius (1.8 degrees Fahrenheit), a
            number that is currently increasing by 0.2 degrees Celsius (0.36
            degrees Fahrenheit) per decade. It is unequivocal that human
            influence has warmed the atmosphere, ocean, and land.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeDescription;
