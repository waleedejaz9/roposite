import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { store, history, persistor } from "./reduxStore/store";
import AppRoutes from "./routes";
import chakraTheme from "./chakratheme";

const App = () => {
  const theme = extendTheme(chakraTheme);
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRoutes history={history} />
        </PersistGate>
      </Provider>
    </ChakraProvider>
  );
};
export default App;
