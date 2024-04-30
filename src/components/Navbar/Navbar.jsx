import styles from './Navbar.module.css';
import Logo from '../../assets/icons/logo.svg';
import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
	const navLinkStyleHandler = ({isActive})=> {
		return {
			color: isActive ? "red": "pink"
		}
	}

	return (
		<>
			<nav>
				<div className={styles.navbar_container}>
					<div className={styles.logo_container}>
						<span>
							<img src={Logo} alt='Website logo' className={styles.logo} />
						</span>
					</div>
					<div className={styles.links_container}>
						<NavLink to='/' style={navLinkStyleHandler}>Home</NavLink>
						<NavLink to='shakes' style={navLinkStyleHandler}>Shakes</NavLink>
						<NavLink to='nutrition-facts' style={navLinkStyleHandler}>Nutrition Facts</NavLink>
						<NavLink to='contact' style={navLinkStyleHandler}>Contact</NavLink>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
