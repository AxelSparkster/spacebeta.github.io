import * as React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from "./constants/router/router";
import Loading from "./components/Loading";

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading/>
  }
  return (
    <div>
      {<div className="App">
        <RouterProvider router={router} />
      </div>}
    </div>
  );
}