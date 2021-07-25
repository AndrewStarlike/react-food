import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import CartProvider from "./store/CardProvider";

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById("root")
);
