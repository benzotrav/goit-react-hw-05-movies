import { Navigation, NavigationLink, ContentWrap } from "./Layout-styled";
import { Outlet } from 'react-router-dom';
import { Suspense } from "react";

const Layout = () => {
    return (
        <>
    <Navigation>
        <NavigationLink to="/"> 
         Home
        </NavigationLink>

        <NavigationLink to="/movies">
        Movies
        </NavigationLink>
    </Navigation>
    <ContentWrap>
    <Suspense fallback={null}>
        <Outlet />
        </Suspense>
    </ContentWrap>
    </>
    );
};



export default Layout;
