import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';
import CountriesDisplay from '../../components/CountriesDisplay/CountriesDisplay';
import style from './ContinentPage.module.css';
import africaIMG from '../../images/africa.svg';
import asiaIMG from '../../images/asia.svg';
import europeIMG from '../../images/europe.svg';
import northAmericaIMG from '../../images/northAmerica.svg';
import oceaniaIMG from '../../images/oceania.svg';
import southAmericaIMG from '../../images/southAmerica.svg';

function ContinentPage() {
  const { continentName } = useParams();
  const continents = useSelector((state) => state.continents);
  const continent = (continents.filter((continent) => continent.name === continentName))[0];
  const [countries, setCountries] = useState([]);
  let count = 1;
  useEffect(() => {
    let countriesStr = '';
    for (let i = 0; i < continent.countries.length; i += 1) {
      countriesStr += `${continent.countries[i]},`;
    }
    async function fetchData() {
      await fetch(`https://corona.lmao.ninja/v2/countries/${countriesStr}?yesterday`)
        .then((res) => (res.json()))
        .then((data) => setCountries(data));
    }
    fetchData();
  }, []);

  function mapImg() {
    switch (continentName) {
      case 'Asia':
        return <img className={style.mapImg} src={asiaIMG} alt="Continent Map" />;
      case 'North America':
        return <img className={style.mapImg} src={northAmericaIMG} alt="Continent Map" />;

      case 'South America':
        return <img className={style.mapImg} src={southAmericaIMG} alt="Continent Map" />;

      case 'Europe':
        return <img className={style.mapImg} src={europeIMG} alt="Continent Map" />;

      case 'Australia-Oceania':
        return <img className={style.mapImg} src={oceaniaIMG} alt="Continent Map" />;

      case 'Africa':
        return <img className={style.mapImg} src={africaIMG} alt="Continent Map" />;

      default:
        return null;
    }
  }
  return (
    <>
      <Navbar pageTo="home" />
      <div className={style.continentHeader}>
        {mapImg()}
        <div>
          {continent.name}
          <br />
          <span>
            {new Intl.NumberFormat('en').format(continent.active)}
            {' '}
            active cases
          </span>
        </div>
      </div>
      <h2 className={style.title}>STATS BY CONTINENT</h2>
      <div className={style.contriesDisplay}>
        {countries.map(
          (country) => {
            if (count > 1) {
              if (count === 3) {
                count = 0;
              } else { count += 1; }
              return <CountriesDisplay key={country.countryInfo.id} country={country} color="true" />;
            }
            count += 1;
            return <CountriesDisplay key={country.countryInfo.id} country={country} color="false" />;
          },
        )}
      </div>
    </>
  );
}

export default ContinentPage;
