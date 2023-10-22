import React from "react";
import logo from '../images/Logo .svg';

const Footer = () => {
    return(
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt="" />
                    <p>We are a family owned Lebanese Restaurant food, focused on traditional recipes served with our special modern twist</p>
                </div>
                <div>
                    <h3>Important Links:</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br />Hamra Main street, Lebanon</li>
                        <li>Phone: <br />+961 76 852258</li>
                        <li>Email: <br />little-lemon@gmail.com</li>
                    </ul>
                </div>

                <div>
                    <h3>Social media Links:</h3>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">X</a></li>
                    </ul>
                </div>

            </section>
        </footer>
    )
}

export default Footer;