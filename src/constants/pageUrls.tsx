import HomeView from '../pages/home';
import MyFavourites from '../pages/myFavourites';

export const pagesRoutes = [
  { path: '/', element: <HomeView /> },
  { path: '/favourites', element: <MyFavourites /> },
];
