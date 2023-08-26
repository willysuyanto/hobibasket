import "./bootstrap";
import React from "react";
import { createRoot } from "react-dom/client";
import Router from "./src/routes";
import "../scss/app.scss";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./src/redux/store";
import { persistStore } from "redux-persist";
import { App, ConfigProvider } from "antd";

const container = document.getElementById("root");
const root = createRoot(container);
const persistor = persistStore(store);

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "Poppins",
          },
        }}
      >
        <App>
          <Router />
        </App>
      </ConfigProvider>
    </PersistGate>
  </Provider>
);
