import React, { useState } from 'react';
import dadLogo from '../../../Images/7-edited.webp';
import './NavBar.css';

import hamburger from '../../../Icons/GI/hamburger-menu.svg';
import close from '../../../Icons/GI/cancel.svg';
import MenuItems from './MenuItems';

import { Link } from 'react-scroll';

const NavBar = () => {
	const [clicked, setAsClicked] = useState(false);

	const toggle = (previous) => !previous;

	const handleClick = () => {
		setAsClicked(toggle);
	};

	return (
		<nav className="navbar-items">
			<span className="navbar-logo">
				<img src={dadLogo} alt="logo" className="logo" />
			</span>
			<div className="menu-icon" onClick={handleClick}>
				{clicked ? (
					<img src={close} alt="close" className="close" />
				) : (
					<img src={hamburger} alt="menu-icon" className="menu-icon" />
				)}
			</div>
			<ul className={clicked ? 'nav active' : 'nav'}>
				{MenuItems.map((item, index) => {
					return (
						<Link
							key={index}
							activeClass="active"
							to={item.scrollTo}
							spy={true}
							onClick={handleClick}
							smooth={true}
							offset={0}
							duration={500}
							className={item.cName}
						>
							{item.title}
						</Link>
					);
				})}
			</ul>
		</nav>
	);
};

export default NavBar;
