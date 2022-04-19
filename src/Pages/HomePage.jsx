import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTimeData } from '../Redux/dashboard/dashboardReducer';
import { fetchContinents } from '../Redux/continents/continentsReducer';
import AllTimeStats from '../components/AllTimeStats/AllTimeStats';
import ContinentsDisplay from '../components/ContinentsDisplay/ContinentsDisplay';
import style from './HomePage.css';
import search from '../images/searchicon.svg';
import home from '../images/home.svg';

function HomePage() {
  const dispatch = useDispatch();
  const continents = useSelector((state) => state.continents);
  useEffect(() => {
    dispatch(fetchAllTimeData())
      .then(dispatch(fetchContinents()));
  }, []);
  return (
    <>
      <div className={style.navbar}>
        <img className={style.navbar__img} src={home} alt="Home" />
        <h1 className={style.navbar__title}>covid-19 stats</h1>
        <img className={style.navbar__img} src={search} alt="search" />
      </div>
      <div className={style.mapDiv}>
        <iframe className={style.map} title="covid map" src="https://coronavirus.app/map?embed=true" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>

      <h2 className={style.title}>ALL TIME STATS</h2>
      <div>
        <AllTimeStats />
      </div>

      <h2 className={style.title}>STATS BY CONTINENT</h2>
      <div className={style.continents}>
        {continents.map((continent) => (
          <ContinentsDisplay key={continent.id} continent={continent} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
