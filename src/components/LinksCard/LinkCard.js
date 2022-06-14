import React, { useState } from "react";
import { copyText } from "../../lib/utils";
import classes from "./LinksCard.module.css";

const LinkCard = ({ info }) => {
  const [buttonText, setButtonText] = useState("Copy");

  const onCopy = () => {
    copyText(info.short_link);
    setButtonText("Copied!");

    setTimeout(() => {
      setButtonText("Copy");
    }, 500);
  };

  return (
    <div className={classes.linkcard}>
      <p className={classes.originallink}>{info.original_link}</p>
      <p className={classes.shortlink}>{info.short_link}</p>
      <button className={classes.btncopy} onClick={onCopy}>
        {buttonText}
      </button>
    </div>
  );
};

export default LinkCard;
