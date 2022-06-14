import React, { useRef, useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import logo from "../../assets/images/logo.svg";
import menuicon from "../../assets/images/icon-menu.svg";
import classes from "./NavBar.module.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const closeMobileMenu = () => setIsOpen(false);

  useClickOutside(mobileMenuRef, closeMobileMenu);

  const menuClickHandler = () => {
    setIsOpen((prev) => !prev);

    // sue((v) => !v);
  };

  // drawer : active
  //  isOpen ? classes.drawer.active" : "classes.drawer"
  return (
    <>
      <nav className={classes.nav}>
        <div className={classes.navlogo}>
          <img src={logo} alt="" />
        </div>
        <div className={classes.navbar}>
          <div className={classes.navcontentdesktop}>
            <ul className={classes.navlist}>
              <li className={classes.navitem}>
                <a className={classes.navlink} href="link">
                  Features
                </a>
              </li>

              <li className={classes.navitem}>
                <a className={classes.navlink} href="link">
                  Pricing
                </a>
              </li>
              <li className={classes.navitem}>
                <a className={classes.navlink} href="link">
                  Resources
                </a>
              </li>
            </ul>

            <ul className={classes.navactions}>
              <li className={classes.navitem}>
                <a className={classes.navlink} href="link">
                  Login
                </a>
              </li>

              <li className={classes.navitem}>
                <button className={classes.btnsignup}>
                  <a className={classes.navlink} href="link">
                    Sign up
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.naviconmobile} onClick={menuClickHandler}>
          <img src={menuicon} alt="" />
        </div>
      </nav>
      <div
        ref={mobileMenuRef}
        className={isOpen ? classes.drawerActive : classes.drawer}
      >
        <div className={classes.draweroverlay}></div>
        <div className={classes.drawercontent}>
          <div className={classes.drawerlist}>
            <ul className={classes.navlist}>
              <li className={classes.navitem}>
                <a className={classes.navlink} href="link">
                  Features
                </a>
              </li>

              <li className={classes.navitem}>
                <a className={classes.navlink} href="link">
                  Pricing
                </a>
              </li>
              <li className={classes.navitem}>
                <a className={classes.navlink} href="link">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          <div class={classes.navactions}>
            <ul>
              <li class={classes.navitem}>
                <a class={classes.navlink} href="link">
                  Login
                </a>
              </li>

              <li class={classes.navitem}>
                <button className={classes.btn}>
                  <a class={classes.navlink} href="link">
                    Sign up
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
