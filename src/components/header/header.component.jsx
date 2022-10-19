import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.css"
import { Switch } from 'antd';

const Header = ({ setToggle, toggle }) => {
    return (
        <div className="header">
            <div className="header-left">
                <Switch onClick={() => setToggle(!toggle)} />
                <Link to="/">
                    <img
                        className="header__icon"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
                        alt="impd" />
                </Link>
                <Link to="/movies/popular" ><span>Popular</span></Link>
                <Link to="/movies/top_rated" ><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" ><span>Upcoming</span></Link>
            </div>

        </div>
    )
}
export default Header;