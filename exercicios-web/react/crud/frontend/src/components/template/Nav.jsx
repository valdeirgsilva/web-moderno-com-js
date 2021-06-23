import './Nav.css';
import React from 'react';
import NavItem from './NavItem';

const Nav = props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem target="/" icon="home" label="Início" />
            <NavItem target="/users" icon="users" label="Usuários" />
        </nav>
    </aside>;

export default Nav;