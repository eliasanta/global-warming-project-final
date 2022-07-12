import "./Footer.scss";
import React from "react";

import { MDBFooter, MDBContainer, MDBIcon } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter
      className="text-center footer--custom"
      color="white"
      bgColor="primary"
    >
      <MDBContainer className="p-3 mt-6">
        <section>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.facebook.com/eliasanta/"
            target="_blank"
            rel="noreferrer"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.instagram.com/eliasanta_/"
            target="_blank"
            rel="noreferrer"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.linkedin.com/in/elia-santagiuliana/"
            target="_blank"
            rel="noreferrer"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/eliasanta"
            target="_blank"
            rel="noreferrer"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </a>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022:
        <span className="text-white"> Elia Santagiuliana</span>
        <img
          src="../../../img/footer_Icon/es-logo2.png"
          alt="footer-img
        "
          className="footer--icon"
        ></img>
      </div>
    </MDBFooter>
  );
}
