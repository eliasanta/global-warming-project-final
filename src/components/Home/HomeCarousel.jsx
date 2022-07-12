import React from "react";
import { Carousel } from "react-bootstrap";
import "./home.scss";

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={5000} className="image--container">
        <img
          className="d-block image--carousel"
          src="/img/oneWorld.jpg"
          alt="First slide"
        />
        <div className="layer"></div>
      </Carousel.Item>
      <Carousel.Item interval={5000} className="image--container">
        <img
          className="d-block image--carousel"
          src="/img/planetb.jpg"
          alt="Second slide"
        />
        <div className="layer"></div>
      </Carousel.Item>
      <Carousel.Item interval={5000} className="image--container">
        <img
          className="d-block image--carousel"
          src="/img/world.jpg"
          alt="Third slide"
        />
        <div className="layer"></div>
      </Carousel.Item>
      <Carousel.Item interval={5000} className="image--container">
        <img
          className="d-block image--carousel"
          src="/img/handWorld.jpg"
          alt="Third slide"
        />
        <div className="layer"></div>
      </Carousel.Item>
      <Carousel.Item interval={5000} className="image--container">
        <img
          className="d-block image--carousel"
          src="/img/pollution.jpg"
          alt="Third slide"
        />
        <div className="layer"></div>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
