import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout/Layout";
import Details from "./Details/Details";
import { lazy } from "react";
import Cast from "./Cast/Cast";
const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));




export const App = () => {
  return (    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<Details />}>
          <Route path="cast" element={<Cast />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  );
};
