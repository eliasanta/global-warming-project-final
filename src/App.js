import "./App.scss";
import ErrorBoundary from "components/ErrorBoundary/ErrorBoundary";
import NavResponsive from "./components/Nav/NavResponsive";
import AnimatedRoutes from "pages/AnimatedRoutes/AnimatedRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "components/Footer/Footer";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <NavResponsive />
          <AnimatedRoutes />
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
