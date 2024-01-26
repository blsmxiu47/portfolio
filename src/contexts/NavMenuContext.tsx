import { createContext, useContext, useState } from 'react';

interface NavMenuContextProps {
    isNavMenuOpen: boolean;
    toggleNavMenu: () => void;
}

export const NavMenuContext = createContext<NavMenuContextProps | undefined>(undefined);

export const NavMenuContextProvider = ({
    children
}: {
    children: React.ReactNode
}) => {
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

    const toggleNavMenu = () => {
        setIsNavMenuOpen((prevState) => !prevState);
    }

    return (
        <NavMenuContext.Provider value={{ isNavMenuOpen, toggleNavMenu }}>
            {children}
        </NavMenuContext.Provider>
    );
};

export const useNavMenuContext = () => {
    const context = useContext(NavMenuContext);
    if (context === undefined) {
        throw new Error('useNavMenuContext must be used within a NavMenuContextProvider');
    }
    return context;
}