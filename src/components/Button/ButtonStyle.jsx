import React from "react";
import Button from "react-bootstrap/Button";
function ButtonStyle({ children, onClick, variant }) {
  return (
    <Button onClick={onClick} variant={variant} className="mt-5 mb-3">
      {children}
    </Button>
  );
}

export default ButtonStyle;
