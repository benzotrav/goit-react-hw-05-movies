import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const HomeTitle = styled.h2`
    padding-left: 40px;
    color: white;
    background-color: #00ccff;
    text-align: center;
    padding-bottom: 10px;
    padding-top: 10px;
`;

export const HomeList = styled.ul`
    list-style: none;
`;

export const HomeItem = styled.li`
    margin-bottom: 30px;
    background-color: #00ccff;
    width: 400px;
    text-align: center;
    
`;

export const HomeLink = styled(NavLink)`
    
`;

export const HomeThumb = styled.div`
   
`;

export const HomeImage = styled.img`
    
`;

export const TitleLink = styled(NavLink) `
        text-decoration: none;
        color: white;
`;