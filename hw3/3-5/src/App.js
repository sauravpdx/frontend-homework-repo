import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Houses from "./pages/Houses";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="houses" element={<Houses />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
