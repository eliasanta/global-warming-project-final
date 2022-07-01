import React from "react";
import Button from "react-bootstrap/Button";
import "./button.scss";
function ButtonStyle({ children, onClick, variant }) {
  return (
    <Button onClick={onClick} variant={variant} className="button--style">
      {children}
    </Button>
  );
}

export default ButtonStyle;
