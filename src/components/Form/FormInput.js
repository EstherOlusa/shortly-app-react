import React from "react";
import classes from "./FormInput.module.css";
const FormInput = () => {
  return (
    <>
      <div className={classes.section1content2}>
        <div className={classes.form}>
          <form className={classes.formdata} action="">
            <div className={classes.inputdata}>
              <input
                className={classes.input}
                type="text"
                placeholder="Shorten a link here..."
                id="link"
              />
              <button className={classes.labelbutton}>Shorten it!</button>
            </div>
            <p className={classes.errortext}></p>
          </form>
        </div>
        <div className={classes.linklist}></div>
      </div>
    </>
  );
};
export default FormInput;
