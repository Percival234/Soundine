import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import Router from '@Routes/Routes';

import { store } from '@Redux/Store/Store.js';

import './Styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router />
  </Provider>
);
