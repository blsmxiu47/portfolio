import { createContext, useContext, useState, useEffect } from 'react';

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

    useEffect(() => {
        setIsNavMenuOpen(false);
    }, []);
    const [size, setSize] = useState({
        width: 0,
        height: 0,
    });
    
    useEffect(() => {
        function handleResize () {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        handleResize();
        
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && isNavMenuOpen) {
            setIsNavMenuOpen(false);
        }
    }, [size.width, isNavMenuOpen]);

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