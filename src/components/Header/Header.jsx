import React from "react";
import { Link } from "react-router-dom";

import css from './Header.module.css';

const Header = () => {

    return (
        <div className={css.root}>
            <div className={css.inner}>
                <Link className={css.logo} to="/">
                    <span>MARVEL PORTAL</span>
                </Link>

                <div className={css.buttons}>
                    <Link className={css.fav} to="/characters">
                        <span>Characters</span>
                    </Link>
                    <Link className={css.fav} to="/comics">
                        <span>Comics</span>
                    </Link>
                    <Link className={css.fav} to="/series">
                        <span>Series</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;