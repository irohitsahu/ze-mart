import { Outlet } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { useAutoLogin } from "./hooks/useAutoLogin";

function MobileLayout() {
  useAutoLogin();

  return (
    <div className="mobile-layout">
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <MobileLayout />
    </Provider>
  );
}

export default App;
