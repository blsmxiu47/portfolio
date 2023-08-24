import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import './index.scss';

const Layout = () => {
    return <>
        <Navbar />
        <Outlet />
    </>
}

export default Layout;