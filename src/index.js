import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider} from 'react-redux'
import store from './store/store';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
// import { Analytics } from '@vercel/analytics/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App className="svg"/>
    {/* <Analytics/> */}
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
