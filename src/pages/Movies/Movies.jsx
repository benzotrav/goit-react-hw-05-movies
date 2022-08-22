import { useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesByName } from 'utils/API';
import { MoviesLabel, 
    MoviesInput, 
    MoviesBtn,
    MoviesList, 
    MoviesItem, 
    ImageLink, 
    TitleLink, 
    ImgBox,
    MoviesImg
} from './Movies-styled';


const Movies = () => {
  const [filmList, setFilmList] = useState(null);
  const [searchFilter, setSearchFilter] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const filmName = searchFilter.get('filter');
    if (!filmName) {
      return;
    }
    getMoviesByName(filmName).then(setFilmList);
  }, [searchFilter]);

  const submitForm = e => {
    e.preventDefault();
    const queryString = e.target.elements.searchFilm.value;
    setSearchFilter(
      queryString.trim() !== '' ? { filter: queryString.trim() } : {}
    );
  };



  return (
    <>
      <form onSubmit={submitForm}>
        <MoviesLabel>
          Find movie
          <MoviesInput type="text" name="searchFilm" placeholder="Write film name" />
          <MoviesBtn type="submit">
            Submit
          </MoviesBtn>
        </MoviesLabel>
      </form>
      {filmList && (
        <MoviesList>
          {filmList.map(({ id, title, backdrop_path }) => (
            <MoviesItem key={id}>
              <ImageLink to={`${id}`} state={{ from: location }}>
                <ImgBox>
                  <MoviesImg
                    src={
                      backdrop_path
                        ? `https://image.tmdb.org/t/p/w400${backdrop_path}`
                        : `https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg`
                    }
                    alt={title}
                  />
                </ImgBox>
              </ImageLink>
              <TitleLink to={`${id}`} state={{ from: location }}>
                {title}
              </TitleLink>
            </MoviesItem>
          ))}
        </MoviesList>
      )}
    </>
  );
};

export default Movies;