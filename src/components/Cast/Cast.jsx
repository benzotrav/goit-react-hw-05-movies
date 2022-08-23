import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieCasts } from "utils/API";
import { ErrorText,
    CastList,
    CastItem,
    CastThumb,
    CastImage,
    DescriptionLable,
    DescriptionText,
} from "./Cast-styled";



const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);
  
    useEffect(() => {
      getMovieCasts(movieId).then(setCast).catch(console.log);
    }, [movieId]);
  
    if (!cast) {
        return;
    }

    const firstCastPast = cast.slice(0, 20);
    return firstCastPast.length === 0 ? (
        <ErrorText>Sorry but ve haven't casts</ErrorText>
        ) : (
          <CastList>
            {firstCastPast.map(
              ({ profile_path, original_name, character, cast_id }) => (
                <CastItem key={cast_id}>
                  <CastThumb>
                    <CastImage
                      src={
                        profile_path
                          ? `https://image.tmdb.org/t/p/w400${profile_path}`
                          : `https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg`
                      }
                      alt={character}
                    />
                  </CastThumb>
                  <div>
                    <DescriptionLable>
                      Name: <DescriptionText>{original_name}</DescriptionText>
                    </DescriptionLable>
                    <DescriptionLable>
                      Character:<DescriptionText>{character}</DescriptionText>
                    </DescriptionLable>
                  </div>
                </CastItem>
              )
            )}
          </CastList>
        );
      };
    
export default Cast;