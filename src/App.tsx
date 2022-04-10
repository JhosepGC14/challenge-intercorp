import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CreatePage from "./pages/create";
import DetailPage from "./pages/detail";
import HomePage from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:personId" element={<DetailPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
