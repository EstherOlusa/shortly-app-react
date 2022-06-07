import React from "react";
import logo from "../../assets/images/logo.svg";
import menuicon from "../../assets/images/icon-menu.svg";
import classes from "./NavBar.module.css";

const NavBar = () => {
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
                <a className={classes.navlink} href="">
                  Features
                </a>
              </li>

              <li className={classes.navitem}>
                <a className={classes.navlink} href="">
                  Pricing
                </a>
              </li>
              <li className={classes.navitem}>
                <a className={classes.navlink} href="">
                  Resources
                </a>
              </li>
            </ul>

            <ul className={classes.navactions}>
              <li className={classes.navitem}>
                <a className={classes.navlink} href="">
                  Login
                </a>
              </li>

              <li className={classes.navitem}>
                <a className={classes.navlink} href="">
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.naviconmobile}>
          <img src={menuicon} alt="" />
        </div>
      </nav>
      <div className={classes.drawer}>
        <div className={classes.draweroverlay}></div>
        <div className={classes.drawercontent}>
          <div className={classes.drawerlist}>
            <ul className={classes.navlist}>
              <li className={classes.navitem}>
                <a className={classes.navlink} href="">
                  Features
                </a>
              </li>

              <li className={classes.navitem}>
                <a className={classes.navlink} href="">
                  Pricing
                </a>
              </li>
              <li className={classes.navitem}>
                <a className={classes.navlink} href="">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          <div class={classes.navactions}>
            <ul>
              <li class={classes.navitem}>
                <a class={classes.navlink} href="">
                  Login
                </a>
              </li>

              <li class={classes.navitem}>
                <a class={classes.navlink} href="">
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
