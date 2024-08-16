import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Register from "./components/Register";
import About from "./components/About";
import Login from "./components/Login";
import Profile from "./components/Profile";
import AddItem from "./components/AddItem";
import Marketplace from "./components/Marketplace";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/additem" element={<AddItem/>}></Route>
          <Route path="/marketplace" element={<Marketplace/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
