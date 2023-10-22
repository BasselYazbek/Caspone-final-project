import React from "react";
import {Link} from 'react-router-dom';
import bannerImg from '../images/49860-5.png';

const Header = () => {
    return(
        <header className="header">
            <section>
                <div className="banner">
                    <h2>Little Lemon</h2>
                    <h3>Beirut</h3>
                    <p>We are a family owned Lebanese food restaurant, focused on traditional food with our special modern twist</p>
                    <Link to='/booking'><button aria-label="On Click">Reserve Table</button></Link>
                </div>

                <div className="banner-img">
                    <img src={bannerImg} alt="" />
                </div>

            </section>
        </header>

    );
};

export default Header;