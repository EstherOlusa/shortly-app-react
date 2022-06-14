import React, { useState } from "react";
import classes from "./FormInput.module.css";

const shortenLink = async (url) => {
  const resp = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
  const data = await resp.json();
  return data;
};

const FormInput = ({ addToLinks }) => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [errorText, setErrorText] = useState("");

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      setErrorText("");
      if (value) {
        const data = await shortenLink(value);
        if (data.ok) {
          addToLinks(data.result);
        } else {
          setErrorText(data.error);
        }
      } else {
        setErrorText("Please add a link");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={classes.section1content2}>
        <div className={classes.form}>
          <form className={classes.formdata} onSubmit={onSubmit}>
            <div className={classes.inputdata}>
              <input
                className={classes.input}
                type="text"
                placeholder="Shorten a link here..."
                id="link"
                onChange={handleInputChange}
                value={value}
              />
              <button className={classes.labelbutton} disabled={loading}>
                {loading ? "loading..." : "Shorten it!"}
              </button>
            </div>
            {errorText ? (
              <p className={classes.errortext}>{errorText}</p>
            ) : null}
          </form>
        </div>
        <div className={classes.linklist}></div>
      </div>
    </>
  );
};
export default FormInput;
