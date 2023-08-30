import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
//import Logo from "./Logo";
import NavItem from "./NavItem";
import utilStyles from '../styles/utils.module.css';

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
];

const NavBar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header className="nav-header">
      <nav className="nav">
        <Link href="/" className="logo">
            <Image
                priority
                src="/images/profile_default.jpg"
                className={utilStyles.borderCircle}
                height={50}
                width={50}
                alt=""
            />
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="navItem">
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;