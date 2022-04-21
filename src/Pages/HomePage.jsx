import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTimeData } from '../Redux/dashboard/dashboardReducer';
import { fetchContinents } from '../Redux/continents/continentsReducer';
import AllTimeStats from '../components/AllTimeStats/AllTimeStats';
import ContinentsDisplay from '../components/ContinentsDisplay/ContinentsDisplay';
import './HomePage.css';
import Navbar from '../components/Navbar/Navbar';

function HomePage() {
  const dispatch = useDispatch();
  const continents = useSelector((state) => state.continents);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchAllTimeData())
      .then(dispatch(fetchContinents()));
  }, []);

  return (
    <>
      <Navbar pageTo="Home" />
      <div className="mapDiv">
        <iframe className="map" title="covid map" src="https://coronavirus.app/map?embed=true" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>

      <h2 className="title">ALL TIME STATS</h2>

      <AllTimeStats />
      <div className="filter-section">
        <div className="stats">
          <h2 className="title">MOST IMPORTANT CONTINENT</h2>
        </div>
        <div className="input-group">
          <div className="input-group-prepend d-md-none">
            <span className="input-group-text bg-primary" id="basic-addon1"> </span>
          </div>
          <input type="text" className="form-control" onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      </div>
      <h2 className="title">STATS BY CONTINENT</h2>
      <div className="continents">
        {/* eslint-disable-next-line no-nested-ternary */}
        {continents.filter((continent) => (searchTerm === ''
          ? continent
          : continent.name.toLowerCase().includes(searchTerm.toLowerCase())
            ? continent
            : ''))
          .map((continent) => (
            <ContinentsDisplay key={continent.id} continent={continent} />
          ))}
      </div>
    </>
  );
}

export default HomePage;
