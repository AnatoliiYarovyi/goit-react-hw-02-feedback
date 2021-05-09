import React from "react";
import PropTypes from "prop-types";
import style from "./Statistics.module.css";

const Statistics = ({
  onGoodIncrement,
  onNeutralIncrement,
  onBadIncrement,
}) => (
  <div className={style.boxBtn}>
    <button className={style.button} type="button" onClick={onGoodIncrement}>
      Good
    </button>
    <button className={style.button} type="button" onClick={onNeutralIncrement}>
      Neutral
    </button>
    <button className={style.button} type="button" onClick={onBadIncrement}>
      Bad
    </button>
  </div>
);

Statistics.propTypes = {
  onGoodIncrement: PropTypes.func,
  onNeutralIncrement: PropTypes.func,
  onBadIncrement: PropTypes.func,
};

export default Statistics;
