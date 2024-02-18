import classes from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import MainNavigation from './MainNavigation';

const Layout = () => {
  return (
    <div><MainNavigation/>
      <main className={classes.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;