import './assets/css/main.css';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import { Suspense } from "react";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Router />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
