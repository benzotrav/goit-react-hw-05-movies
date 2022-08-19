import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import MoviesPage from "pages/Movies/Movies";



export const App = () => {
  return (    
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="movies" element={<MoviesPage />} />
    </Route>
  </Routes>
  );
};
