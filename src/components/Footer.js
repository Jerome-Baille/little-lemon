import { NavLink } from "react-router-dom";
import logo from '../assets/Logo.svg';

function Footer() {
    return (
        <footer data-testid="footer">
            <section className='footer-container'>
                <div className='img-container'>
                    <img src={logo} className='img footer__img' alt="An illustration of a lemon with the name of the restaurant Little Lemon."/>
                </div>
                <div className='footer__col'>
                    <span className='footer__title'>Navigation</span>
                    <nav className="navbar">
                        <NavLink 
                            exact="true"
                            activeclassname="active"
                            to="/"
                            aria-label="Navigate to the home page."
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            exact="true"
                            activeclassname="active"
                            to="/about"
                            aria-label="Navigate to the about page."
                        >
                            About
                        </NavLink>
                        <NavLink 
                            exact="true"
                            activeclassname="active"
                            to="/menu"
                            aria-label="Navigate to the menu page."
                        >
                            Menu
                        </NavLink>
                        <NavLink 
                            exact="true"
                            activeclassname="active"
                            to="/booking"
                            aria-label="Navigate to the booking page."
                        >
                            Reservations
                        </NavLink>
                        <NavLink 
                            exact="true"
                            activeclassname="active"
                            to="/order-online"
                            aria-label="Navigate to the order online page."
                        >
                            Order Online
                        </NavLink>
                        <NavLink 
                            exact="true"
                            activeclassname="active"
                            to="/login"
                            aria-label="Navigate to the login page."
                        >
                            Login
                        </NavLink>
                    </nav>
                </div>

                <div className='footer__col'>
                    <span className='footer__title'>Contact</span>
                    <ul>
                        <li className='footer__links'>
                            2111 Patterson Fork Road, Chicago, IL 60606
                        </li>
                        <li className='footer__links'>
                            <a href='tel:5555551234' target='_blank' rel='noreferrer'>Phone number</a>
                        </li>
                        <li className='footer__links'>
                            <a href='mailto:contact@little-lemon.com' target='_blank' rel='noreferrer'>Email</a>
                        </li>
                    </ul>
                </div>

                <div className='footer__col'>
                    <span className='footer__title'>Socials</span>
                    <ul>
                        <li className='footer__links'>
                            <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>Facebook</a>
                        </li>
                        <li className='footer__links'>
                            <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>Instagram</a>
                        </li>
                        <li className='footer__links'>
                            <a href='https://twitter.com/' target='_blank' rel='noreferrer'>Twitter</a>
                        </li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer