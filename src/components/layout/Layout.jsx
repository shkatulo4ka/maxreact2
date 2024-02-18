import { Outlet } from 'react-router-dom'
import MainNavigation from './MainNavigation'

const Layout = () => {
  return (
    <div><MainNavigation/><Outlet /></div>
  )
}

export default Layout