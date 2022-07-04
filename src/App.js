import "./App.css";
import NavResponsive from "./components/Nav/NavResponsive";
/* import Pages from "pages/Pages"; */
import AnimatedRoutes from "components/AnimatedRoutes/AnimatedRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavResponsive />
        {/* <Pages /> */}
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
