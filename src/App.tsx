import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/Main";
import Home from "./pages/Home";
import NotFound from "./pages/NoFound";
import MemberDetail from "./pages/MemberDetail";
import "./App.css";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/team/:slug" element={<MemberDetail />} />
        <Route path="/project" element={<ProjectDetail />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
