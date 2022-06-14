import React from "react";
import classes from "./Button.module.css";
const Button = () => {
  return (
    <>
      <div className={classes.btncontainer}>
        <button className={classes.btn}>Get Started</button>
      </div>
    </>
  );
};
export default Button;
