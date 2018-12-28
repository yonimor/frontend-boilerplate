import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "mobx-react";

import App from "./components/App/App";
import stores from "./stores";

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider { ...stores }>
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById("app")
  );
};

render();

if (module.hot) {
  module.hot.accept("./components/App/App", render);
}
