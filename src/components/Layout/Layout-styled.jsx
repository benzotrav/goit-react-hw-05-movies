import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
    background-color: #00ccff;
    width: 100%;
    padding: 20px 30px;
    text-align: center;
`;

export const NavigationLink = styled(NavLink)`
      align-items: center;
      margin: 30px;
      font-size: 30px;
      text-decoration: none;
      color: white;
`


export const ContentWrap = styled.div`
  padding: 0 30px;
  padding-top: 100px;
  min-height: 100vh;
`