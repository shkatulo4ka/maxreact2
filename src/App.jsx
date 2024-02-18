import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetups';
import FavouritesPage from './pages/Favourites';
import {
   createBrowserRouter,
   RouterProvider,
   createRoutesFromElements,
   Route,
 } from "react-router-dom";
 import Layout from './components/layout/Layout';
 import Error404 from './pages/Error404';
 
 const routes = createRoutesFromElements(
   <Route path="/" element={<Layout />}>
     <Route path="/" element={<AllMeetupsPage/>} />
     <Route path="/favourites" element={<FavouritesPage/>} />
     <Route path="/new-meetup" element={<NewMeetupPage/>} />
     <Route path="*" element={<Error404 />} />
   </Route>,
 );
 const router = createBrowserRouter(routes);

const App = () => <RouterProvider router={router} />
 
export default App
