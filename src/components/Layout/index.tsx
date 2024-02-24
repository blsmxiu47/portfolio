import { Outlet } from 'react-router-dom';

import Navbar from '../Navbar';

export default function Layout() {
    return (
        <main className="bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] min-h-screen text-black dark:text-white">
            <Navbar />
            <Outlet />
        </main>
    )
};