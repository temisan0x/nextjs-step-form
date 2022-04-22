import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import '../src/scss/styles.scss'
import { Provider } from 'react-redux';
// import { persistStore } from "redux-persist";
import store from '../src/redux/store';
// import { PersistGate } from 'redux-persist/integration/react';

// const persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
        <Component {...pageProps} />
      {/* </PersistGate> */}
    </Provider>
  )
}

export default MyApp
