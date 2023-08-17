import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

// import store, { persistor } from 'redux/store.js';

// const Providers = ({ children }) => {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <BrowserRouter basename="4k-soft-test">
//           {children}
//         </BrowserRouter>
//       </PersistGate>
//     </Provider>
//   );
// };

const Providers = ({ children }) => {
  return <BrowserRouter basename="4k-soft-test">{children}</BrowserRouter>;
};

export default Providers;
