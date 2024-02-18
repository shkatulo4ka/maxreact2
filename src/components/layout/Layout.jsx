import classes from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import MainNavigation from './MainNavigation';

const Layout = (props) => {
  return (
    <div><MainNavigation/><Outlet />
      <main className={classes.main}>
      {props.children}
      </main>
    </div>
  );
}

export default Layout;