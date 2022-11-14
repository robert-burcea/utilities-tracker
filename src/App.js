import {Link, useParams} from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Costuri from "./pages/Costuri";
import Unitati from "./pages/Unitati";
import Home from "./pages/Home";
import Navbar from './pages/Navbar';
import Unitate from './pages/Unitate';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/costuri" element={<Costuri />} />
        <Route path="/unitati" element={<Unitati />} />
        <Route path="/unitati/:nume" element={<Unitate />} />
      </Routes>
    </Router>
  );
}

export default App;
