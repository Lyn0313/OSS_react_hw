import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
          <NavLink exact to="/novel" className="item" activeClassName="active">소설</NavLink>
          <NavLink to="/webtoon" className="item" activeClassName="active">웹툰</NavLink>
        </div>
    );
};

export default Header;
