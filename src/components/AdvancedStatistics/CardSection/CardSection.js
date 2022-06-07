import React from "react";
import brandrecognition from "../../../assets/images/icon-brand-recognition.svg";
import detailedrecords from "../../../assets/images/icon-detailed-records.svg";
import fullycustomizable from "../../../assets/images/icon-fully-customizable.svg";
import classes from "./CardSection.module.css";

const CARD_SECTIONS = [
  {
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    icon: brandrecognition,
  },
  {
    title: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decision.",
    icon: detailedrecords,
  },
  {
    title: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    icon: fullycustomizable,
  },
];

const Card = ({ title, description, icon }) => {
  return (
    <div className={classes.cardtext}>
      <div className={classes.cardicon}>
        <img src={icon} alt="" />
      </div>
      <h2 className={classes.cardh2}>{title}</h2>
      <p className={classes.pcard}>{description}</p>
    </div>
  );
};

const CardSection = () => {
  return (
    <>
      <div className={classes.section1content2}>
        <div className={classes.tabs}>
          <div className={classes.cardwrapper}>
            <div className={classes.cardconnector}></div>

            {CARD_SECTIONS.map((item) => (
              <Card
                key={item.title}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default CardSection;
