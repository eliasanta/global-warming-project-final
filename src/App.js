import "./App.css";
import NavResponsive from "./components/Nav/NavResponsive";
import Pages from "pages/Pages";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "components/Footer/Footer";
/* import NavMui from "components/Nav/NavMui"; */
function App() {
  return (
    <Router>
      <div className="App">
        <NavResponsive />
        {/*  <NavMui /> */}
        <Pages />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
