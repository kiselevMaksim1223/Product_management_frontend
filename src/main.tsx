import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './app/App.js';
import { store } from './store/createStore.js';

import './index.css';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>,
);
