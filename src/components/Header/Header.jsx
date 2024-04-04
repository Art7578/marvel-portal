import React from "react";
import { Link, useLocation } from "react-router-dom";

import css from './Header.module.css';

const Header = () => {
    const location = useLocation();

  const isActiveRoute = (route) => {
    return location.pathname === route;
  };

    return (
        <div className={css.root}>
            <div className={css.inner}>
                <Link className={css.logo} to="/">
                    <span>MARVEL PORTAL</span>
                </Link>

                <div className={css.buttons}>
                    <Link to="/characters">
                        <button className={isActiveRoute('/characters') ? `${css.button_contained} ${css.active}` : css.button_contained}>Characters</button>
                    </Link>
                    <Link to="/comics">
                        <button className={isActiveRoute('/comics') ? `${css.button_contained} ${css.active}` : css.button_contained}>Comics</button>
                    </Link>
                    <Link to="/series">
                        <button className={isActiveRoute('/series') ? `${css.button_contained} ${css.active}` : css.button_contained}>Series</button>
                    </Link>
                    <Link to="/stories">
                        <button className={isActiveRoute('/stories') ? `${css.button_contained} ${css.active}` : css.button_contained}>Stories</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;