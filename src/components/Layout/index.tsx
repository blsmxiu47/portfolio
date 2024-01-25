import { Outlet } from 'react-router-dom';

import Navbar from '../Navbar';

export default function Layout() {
    return (
        <main className="bg-[var(--bg)] dark:bg-[var(--bg-dark)] min-h-screen">
            <Navbar />
            <Outlet />
        </main>
    )
};