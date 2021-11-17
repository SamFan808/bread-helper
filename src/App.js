import { BrowserRouter as Router, Route } from "react-router-dom";

import Ingredients from "./components/Ingredients.js";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Ingredients />
      </div>
    </Router>
  );
}

export default App;
