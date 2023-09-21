import Dashboard from "./Features/Dashboard";
import LandingPage from "./Features/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<LandingPage/>}/>
      <Route path="Dashboard" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
