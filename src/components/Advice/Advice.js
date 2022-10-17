import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Advice.module.css";
import { SpinningCircles } from "react-loading-icons";
import { ReactComponent as DividerDesktop } from "../../images/pattern-divider-desktop.svg";
import { ReactComponent as DividerMobile } from "../../images/pattern-divider-mobile.svg";
import { ReactComponent as Dice } from "../../images/icon-dice.svg";

const Advice = () => {
  const [advice, setAdvice] = useState({});
  const [width, setWidth] = useState();
  const [showLoading, setshowLoading] = useState();

  useEffect(() => {
    axios({ method: "get", url: "https://api.adviceslip.com/advice" })
      .then((response) => {
        setshowLoading(true);
        setAdvice(response.data.slip);
      })
      .finally(() => {
        setshowLoading(false);
      });
  }, [showLoading]);

  const detectWidth = () => {
    setWidth(window.innerWidth);
  }


  useEffect(() => {
    window.addEventListener('resize', detectWidth);

    return () => {
      window.removeEventListener('resize', detectWidth);
    }
  }, [width]);

  const toggleAdvice = () => {
    setshowLoading(true);
  };

  return (
    <div className={styles["advice__box"]}>
      <div className={styles["advice__box-inner"]}>
        <h4 className={styles["advice__no"]}>Advice #{advice.id}</h4>
        <h2 className={styles["advice__itself"]}>"{advice.advice}"</h2>
        {showLoading ? <SpinningCircles className={styles.loading}/> : ""}
        {console.log(width)}
        {width > 600 ? <DividerDesktop className={styles["advice__divider"]}></DividerDesktop> :  <DividerMobile className={styles["advice__divider"]}></DividerMobile>}
      </div>
      <button className={styles["advice__btn"]} onClick={toggleAdvice}>
        <Dice></Dice>
      </button>
    </div>
  );
};

export default Advice;
