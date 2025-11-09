import * as React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from "./constants/router/router";
import Loading from "./components/Loading/Loading";

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // eslint-disable-next-line
  var firstTime = localStorage.getItem('visited') == undefined;
  if (firstTime && loading) {
    return <Loading/>
  }

  return (
    <div>
      <div className={firstTime ? "initial-load App" : "App"}>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}
