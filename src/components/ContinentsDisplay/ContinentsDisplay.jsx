import React from 'react';
import PropTypes from 'prop-types';
import style from './ContinentDisplay.css';
import africaIMG from '../../images/africa.svg';
import asiaIMG from '../../images/asia.svg';
import europeIMG from '../../images/europe.svg';
import northAmericaIMG from '../../images/northAmerica.svg';
import oceaniaIMG from '../../images/oceania.svg';
import southAmericaIMG from '../../images/southAmerica.svg';
import arrow from '../../images/arrow-right.svg';

export default function ContinentsDisplay({ continent }) {
  const { name, active } = continent;
  switch (name) {
    case 'Asia':
      return (
        <div className={style.Asia}>
          <img className={style.MapImg} src={asiaIMG} alt="Asia" />
          <span className={style.info}>
            <p className={style.name}>{name}</p>
            <p className={style.number}>{new Intl.NumberFormat('en').format(active)}</p>
          </span>
          <img className={style.arrow} src={arrow} alt="Arrow" />
        </div>
      );
    case 'North America':
      return (
        <div className={style.NorthAmerica}>
          <img className={style.MapImg} src={northAmericaIMG} alt="North America" />
          <span className={style.info}>
            <p className={style.name}>{name}</p>
            <p className={style.number}>{new Intl.NumberFormat('en').format(active)}</p>
          </span>
          <img className={style.arrow} src={arrow} alt="Arrow" />
        </div>
      );
    case 'South America':
      return (
        <div className={style.SouthAmerica}>
          <img className={style.MapImg} src={southAmericaIMG} alt="South America" />
          <span className={style.info}>
            <p className={style.name}>{name}</p>
            <p className={style.number}>{new Intl.NumberFormat('en').format(active)}</p>
          </span>
          <img className={style.arrow} src={arrow} alt="Arrow" />
        </div>
      );
    case 'Europe':
      return (
        <div className={style.Europe}>
          <img className={style.MapImg} src={europeIMG} alt="Europe" />
          <span className={style.info}>
            <p className={style.name}>{name}</p>
            <p className={style.number}>{new Intl.NumberFormat('en').format(active)}</p>
          </span>
          <img className={style.arrow} src={arrow} alt="Arrow" />
        </div>
      );
    case 'Australia-Oceania':
      return (
        <div className={style.Australia}>
          <img className={style.MapImg} src={oceaniaIMG} alt="Oceania" />
          <span className={style.info}>
            <p className={style.name}>{name}</p>
            <p className={style.number}>{new Intl.NumberFormat('en').format(active)}</p>
          </span>
          <img className={style.arrow} src={arrow} alt="Arrow" />
        </div>
      );
    case 'Africa':
      return (
        <div className={style.Africa}>
          <img className={style.MapImg} src={africaIMG} alt="Africa" />
          <span className={style.info}>
            <p className={style.name}>{name}</p>
            <p className={style.number}>{new Intl.NumberFormat('en').format(active)}</p>
          </span>
          <img className={style.arrow} src={arrow} alt="Arrow" />
        </div>
      );
    default:
      return null;
  }
}

ContinentsDisplay.defaultProps = {
  continent: {
    name: '',
    active: 0,
  },
};

ContinentsDisplay.propTypes = {
  continent: PropTypes.shape({
    name: PropTypes.string,
    active: PropTypes.number,
  }),
};
