import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetups';
import FavouritesPage from './pages/Favourites';
import {
   createBrowserRouter,
   RouterProvider,
 } from "react-router-dom";
 
 const router = createBrowserRouter([
   { path: "/", element: <AllMeetupsPage/>},
   { path: "/favourites", element: <FavouritesPage/>},
   { path: "/new-meetup", element: <NewMeetupPage/>}
 ]);

const App = () => <RouterProvider router={router} />
 
export default App
