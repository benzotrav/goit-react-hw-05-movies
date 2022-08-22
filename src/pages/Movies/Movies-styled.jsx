import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MoviesLabel = styled.label`
    font-size: 30px;
    background-color: #00ccff;
    padding-bottom: 10px;
    padding-top: 10px;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    width: 100%;
`;

export const MoviesInput = styled.input`
   height: 30px;
   margin-left: 10px;
`;

export const MoviesBtn = styled.button`
    margin-left: 20px;
`;

export const MoviesList = styled.ul`
list-style: none;
`;

export const MoviesItem = styled.li`
  & + & {
    margin-top: 50px;
  }
  width: 400px;
  text-align: center;
  background-color: #00ccff;
`;

export const ImageLink = styled(NavLink)`
    width: auto;
  height: auto;
`;

export const TitleLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  `;

export const ImgBox = styled.div`

`;

export const MoviesImg = styled.img`

`;