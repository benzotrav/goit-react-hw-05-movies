import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieReviews } from "utils/API";
import { 
    ErrorText,
    ReviewsList,
    ReviewsItem,
    DescriptionText
 } from "./Reviews-styled";

const Reviews = () => {
    const { movieId } = useParams();

    const [reviews, setReviews] = useState(null);
  
    useEffect(() => {
      getMovieReviews(movieId).then(setReviews).catch(console.log);
    }, [movieId]);
  
    if (!reviews) {
      return;
    }
    
    
    
    return reviews.length === 0 ? (
    <ErrorText>Sorry, we cant find reviews!</ErrorText> 
    ) : 
    (
        <ReviewsList>
      {reviews.map(({ id, author, content }) => (
            <ReviewsItem key={id}>
                <DescriptionText>Author: {author}</DescriptionText>
                <DescriptionText>{content}</DescriptionText>
            </ReviewsItem>
      ))}
        </ReviewsList>
    )
};


export default Reviews;


