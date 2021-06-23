import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = props =>
    <Link to={props.target}>
        <i className={`fa fa-${props.icon}`}></i> {props.label}
    </Link>;

export default NavItem;