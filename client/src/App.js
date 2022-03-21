import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router";
import "./App.css";
import HistoryUpdates from "./component/HistoryUpdates";
import HomePage from "./component/HomePage";
import LandingPage from "./component/LandingPage";
import Navigation from "./component/Navigation";
import TeamUpdates from "./component/TeamUpdates";

function App() {
  const {isAuthenticated} = useAuth0();
  return !isAuthenticated ? (
    <>
      <LandingPage />
    </>
  ) : (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teamUpdates" element={<TeamUpdates />} />
        <Route path="/history" element={<HistoryUpdates />} />
      </Routes>
    </>
  );
}

export default App;
