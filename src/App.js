import { Route, Routes, useHistory } from "react-router-dom";

import "./App.css";
import DashBoard from "./Page/Dashboard";
import Clients from "./Page/Clients";
import LoginPage from "./Page/Loginpage";
import Client from "./Page/Client";
import Clientview from "./component/Clientview";

function App() {
  return (
    <div className="App">
      <h1>gdghdh</h1>
      <Routes>
        if(true){<Route path="/" element={<LoginPage />} />}
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/Clients" element={<Clients />} />
        <Route path="/Client/:id" element={<Clientview />} />
      </Routes>
    </div>
  );
}

export default App;
