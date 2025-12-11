import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route } from "react-router";
import Router from "./Router.jsx";
import { UserProvider } from "./contexts/UserProvider";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
// import Product from "./pages/Product.jsx";
// import Card from "./pages/Card";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <UserProvider>
          <Router />
        </UserProvider>
      </BrowserRouter>
    </Provider>
    {/* <App /> */}
    {/* <Product /> */}
    {/* <Card /> */}
  </StrictMode>
);
