import { Outlet } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="mobile-layout">
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
