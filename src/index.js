import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Analytics } from '@vercel/analytics/react';
import ReactGA from "react-ga4";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="index">
      <App />
      <Analytics />
      
    </div>
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(
//   document.getElementById('root') 
// );
//Initialize GA4
// ReactGA.initialize("G-RXSQ0HH7M8");
// root.render(
//   <React.StrictMode>
//     {/* <BrowserRouter> */}
//       <App />
//       <Analytics />
//     {/* </BrowserRouter> */}

//   </React.StrictMode>
// );
// const SendAnalytics = ()=> {
//   ReactGA.send({
//     hitType: "pageview",
//     page: window.location.pathname,
//   });
// }

// reportWebVitals(SendAnalytics);