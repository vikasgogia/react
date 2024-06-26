import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
        <h1>Expensify</h1>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/create">Create Expense</NavLink>
        <NavLink to="/help">Help</NavLink>
    </div>
);

export default Header;