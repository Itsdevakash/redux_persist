import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./Login";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store)



const App = () =>{

 

  return(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <Login/>
      </PersistGate>
    </Provider>
  )

}
  
export default App