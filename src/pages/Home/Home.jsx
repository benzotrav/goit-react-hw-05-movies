import { useLocation } from "react-router-dom";
import { 
    HomeList, 
    HomeLink, 
    HomeThumb, 
    HomeImage,
    TitleLink,
    HomeItem,
    } from "./Home-styled";
import { useState, useEffect } from "react";
import { getPopularMovie } from "utils/API";


const Home = () => {
    const [popularMovies, setPopularMovies] = useState(null);
    const location = useLocation();
  
    useEffect(() => {
      getPopularMovie().then(setPopularMovies).catch(console.log);
    }, []);
  
    if (!popularMovies) {
      return;
    }
            
    return (
        <>
        <HomeList>
        {popularMovies.map(({ title, id, backdrop_path }) => (
        <HomeItem key={id}>
        <HomeLink to={`/movies/${id}`} state={{ from: location }}>
            <HomeThumb>
                <HomeImage
                src={
                    backdrop_path
                      `https://image.tmdb.org/t/p/w400${backdrop_path}`
                    }
                  alt={title}
                />
            </HomeThumb>            
        </HomeLink>        
        <TitleLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
            </TitleLink>        
        </HomeItem>
        ))};
        </HomeList>
        </>
    );
};


export default Home;