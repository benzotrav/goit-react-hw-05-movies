import { Outlet, useLocation, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getMovieDetails } from 'utils/API';
import { DetailsLink,
    DetailsBox,
    DetailsThumb,
    DetailsImage,
    DescriptionLable,
    DescriptionText,
    NavList,
    NavItem,
    DetailsAppBox
} from './Details-styled';
import { IoIosArrowBack } from 'react-icons/io';


const Details = () => {

    const { movieId } = useParams();
    const location = useLocation();
    const backUrlPath = useRef(location.state?.from ?? '/');
    const navigate = useNavigate();      
    const [movieInfo, setMovieInfo] = useState(null);

    useEffect(() => {
        getMovieDetails(movieId)
          .then(setMovieInfo)
          .catch(err => {
            console.log(err);
            navigate(backUrlPath.current, { replace: true });
          });
      }, [movieId, navigate]);
    
      if (!movieInfo) {
        return;
      }
      const {
        backdrop_path,
        original_title,
        release_date,
        vote_average,
        overview,
        genres,
      } = movieInfo;

      const defaultImg =
  'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg';
    
    return (
        <>
        <DetailsAppBox>
          <DetailsLink to={backUrlPath.current}>
            <IoIosArrowBack />
            Go back
          </DetailsLink>
          <DetailsBox>
            <DetailsThumb>
              <DetailsImage
                src={
                  backdrop_path
                    ? `https://image.tmdb.org/t/p/w400${backdrop_path}`
                    : defaultImg
                }
                alt={original_title}
              />
            </DetailsThumb>
            <div>
              <DescriptionLable>
                {original_title} <DescriptionText>({release_date})</DescriptionText>
              </DescriptionLable>
              <DescriptionLable>
                Score: <DescriptionText>{vote_average * 10} %</DescriptionText>
              </DescriptionLable>
              <DescriptionLable>Overview:</DescriptionLable>
              <DescriptionText>{overview}</DescriptionText>
              <DescriptionLable>
                Ganres:
                {genres.map(({ name, id }) => (
                  <DescriptionText key={id}> {name}</DescriptionText>
                ))}
              </DescriptionLable>
            </div>
          </DetailsBox>
          <NavList>
            <NavItem>
              <DetailsLink to="cast">
              <IoIosArrowBack />
                Cast
              </DetailsLink>
            </NavItem>
            <NavItem>
              <DetailsLink to="reviews">
              <IoIosArrowBack />
                Reviews
              </DetailsLink>
            </NavItem>
          </NavList>
        </DetailsAppBox>
        <Outlet />
      </>
    )
}


export default Details;