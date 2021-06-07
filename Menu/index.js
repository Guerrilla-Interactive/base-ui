import { useState } from "react";
import OpenCloseButton, { OpenButton, CloseButton } from "./open-close-button";
import MenuList from "./menulist";

const MobileMenu = ({ data, className, innerClassName,  top, bottom , ...props }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    function toggleMenu() {
        setIsMenuOpen((previousState) => !previousState);
    }
    return (
        <div className={`${className} flex flex-col `} {...props}>
            <OpenCloseButton onClick={toggleMenu}>
                {/* Show Open Button when not open and vice versa */}
                {!isMenuOpen ? <OpenButton /> : <CloseButton />}
            </OpenCloseButton>
            {isMenuOpen && (
                <MenuList
                    type="mobile"
                    data={data}
                    className={`flex-col items-center ${innerClassName}`}
                    top={top}
                    bottom={bottom}
                />
            )}
        </div>
    );
};

const DesktopMenu = ({ data, className, hasLogoNavigation, logoComponent }) => {
    return (
        <div className={`${hasLogoNavigation && 'flex justify-between'} ${className}`}>
            {hasLogoNavigation && logoComponent}
            <MenuList
                type="desktop"
                data={data}
                className={`flex-row justify-center `}
            />
        </div>
    );
};

export { MobileMenu, DesktopMenu };
