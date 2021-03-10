import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Link as ReactRouterDomLink, useLocation } from 'react-router-dom';
import { Toggle } from './Toggle';

const HeaderWrapper = styled.header`
    height: 60px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    padding: 0 16px;
    position: fixed;
    top: 0;
    border-bottom: 3px solid ${p => p.theme.primaryColor};
    background-image: linear-gradient(to right, ${p => p.theme.primaryColor}, ${p => p.theme.secondaryColor});
`;

const Menu = styled.nav`
    display: ${p => p.open ? 'block' : 'none'};
    position: absolute;
    font-family: 'Open Sans';
    width: 100%;
    top: 60px;
    left: 0;
    padding: 8px;
    box-sizing: border-box;
    border-bottom: 3px solid ${p => p.theme.primaryColor};
    background: ${p => p.theme.bodyBackgroundColor};


    @media(min-width: 625px){
        display: flex;
        background: none;
        top: initial;
        left:initial;
        position: relative;
        width: initial;
        border-bottom: none;
        margin: auto 0 auto auto;
    }
`;

const Link = ({ isActive, children, ...props }) => {
    return (
        <ReactRouterDomLink {...props}>
            {children}
        </ReactRouterDomLink>
    );
};

const StyledLink = styled(Link)`
    padding: 4px 8px;
    display: block;
    text-align: center;
    box-sizing: border-box;
    margin: auto 0;
    font-weight: ${p => p.isActive ? 'bold' : 'normal'};
    color: ${p => p.theme.bodyFontColor};;
`;

const MobileMenuIcon = styled.div`
    margin: auto 0 auto auto;
    width: 25px;
    min-width: 25px;
    padding: 5px;
    >div{
        height: 3px;
        background: ${p => p.theme.bodyFontColor};
        margin: 5px 0;
        width: 100px;
    }

    @media(min-width: 625px){
        display: none;
    }
`;

export function Header() {
    const { pathname } = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const {id, setTheme} = useContext(ThemeContext);

    return (
        <HeaderWrapper>
            <MobileMenuIcon onClick={() => setMenuOpen(s => !s)}>
                <div />
                <div />
                <div />
            </MobileMenuIcon>
            <Menu open={menuOpen}>
                <StyledLink to="/" isActive={pathname === '/'}>
                    Home
                </StyledLink>
                <StyledLink to="/login" isActive={pathname === '/login'}>
                    Login
                </StyledLink>
                <Toggle isActive={id === 'dark'} onToggle={setTheme}/>
            </Menu>
        </HeaderWrapper>
    )
}