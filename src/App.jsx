import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import appStyles from "./App.module.css";
import { useMode } from "./context/ModeContext.jsx";
import Home from "./pages/Home.jsx";

const AddProfile = lazy(() => import("./pages/AddProfile.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const FetchedProfiles = lazy(() => import("./pages/FetchedProfiles.jsx"));
const ProfileDetail = lazy(() => import("./pages/ProfileDetail.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

export default function App() {
  const { mode, toggleMode } = useMode();

  return (
    <div className={`${appStyles.app} ${mode === "light" ? appStyles.light : appStyles.dark}`}>
      <Header mode={mode} onToggleMode={toggleMode} />
      <div className={appStyles.container}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddProfile />} />
            <Route path="/about" element={<About />} />
            <Route path="/fetched-profiles" element={<FetchedProfiles />}>
              <Route path="profile/:id" element={<ProfileDetail />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}
