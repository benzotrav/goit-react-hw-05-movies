import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout/Layout";
import { lazy } from "react";

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));




export const App = () => {
  return (    
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home/>} />
      <Route path="movies" element={<Movies />} />
    </Route>
    <Route path="*" element={<Navigate to="/" />}></Route>
  </Routes>
  );
};
