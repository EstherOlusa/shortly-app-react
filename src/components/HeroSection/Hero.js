import React from "react";
import Button from "../UI/Button/Button";
import classes from "./Hero.module.css";
const HeroSection = () => {
  return (
    <>
      <section className={classes.container}>
        <div className={classes.section1}>
          <div className={classes.section1content}>
            <div className={classes.ccontainer}>
              <div className={classes.section1container}>
                <h1 className={classes.h1}>More than just shorter links</h1>

                <p className={classes.p1}>
                  Build your brand’s recognition and get detailed insights on
                  how your links are performing.
                </p>
                <Button />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HeroSection;
