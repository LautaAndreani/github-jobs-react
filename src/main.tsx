import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import theme from "./theme";

import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById("root")
);
