import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import ProductPage from "./Pages/ProductPage/ProductPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
