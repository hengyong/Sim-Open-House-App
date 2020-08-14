import {decode, encode} from 'base-64'

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }
import TabNavigator from './navigation/TabNavigator';


import React from 'react';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import {store ,persistor } from './store';

console.disableYellowBox = true;
// export default RNRedux = () => (
//   <Provider   store = {store}>
//     <TabNavigator />
//   </Provider>




export default () => <TabNavigator />;
