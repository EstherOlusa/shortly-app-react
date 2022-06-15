import React from "react";
import classes from "./AdvancedStatisticsCard.module.css";
const AdvancedCard = () => {
  return (
    <div className={classes.section}>
      <h2 className={classes.h2}>Advanced Statistics</h2>

      <p className={classes.p2}>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
    </div>
  );
};
export default AdvancedCard;
