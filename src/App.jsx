import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidenav from "./components/Sidenav";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <div className="bg-[rgb(0,0,0)] h-screen ">
        <div className="flex gap-4">
          <aside className="w-[600px]">
            <Sidenav />
          </aside>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
