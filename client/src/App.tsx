import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="mobile-layout">
      <Outlet />
    </div>
  );
}

export default App;
