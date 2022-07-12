import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h3 style={{ marginTop: "50px", marginBottom: "500px" }}>
        Sorry...your link isn't correct, search something or Click
        <Link to="/">
          {" "}
          <u>HERE</u>{" "}
        </Link>
        to back in the Home Page
      </h3>
    </div>
  );
};
