import React from "react";
import LinkCard from "./LinkCard";
import classes from "./LinksCard.module.css";

const LinkCards = ({ links }) => {
  return (
    <div className={classes.container}>
      {links.map((link) => (
        <LinkCard key={link.short_link} info={link} />
      ))}
    </div>
  );
};

export default LinkCards;
