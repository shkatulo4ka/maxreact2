import {Route} from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetups';
import FavouritesPage from './pages/Favourites';

function App() {
   // localhost: 3000/favourites
   //my-page.com/

   return (<div> 
      <Route path='/'>
         <AllMeetupsPage/>
      </Route>
      <Route path='/new-meetup'>
         <NewMeetupPage/>
      </Route>
      <Route path='/favourites'>
         <FavouritesPage/>
      </Route>       
   </div>);
}

export default App
