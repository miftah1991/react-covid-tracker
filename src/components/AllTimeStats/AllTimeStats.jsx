import React from 'react';
import { useSelector } from 'react-redux';
import './AllTimeStats.css';

export default function AllTimeStats() {
  const stats = useSelector((state) => state.allTime);

  return (
    <div>
      <div className="dashboard">
        <div className="stat">
          <span className="stat__number">{new Intl.NumberFormat('en').format(stats.active)}</span>
          <br />
          active cases
        </div>
        <div className="stat">
          <span className="stat__number">{new Intl.NumberFormat('en').format(stats.todayCases)}</span>
          <br />
          today cases
        </div>
        <div className="stat">
          <span className="stat__number">{new Intl.NumberFormat('en').format(stats.todayDeaths)}</span>
          <br />
          today deaths
        </div>
        <div className="stat">
          <span className="stat__number">{new Intl.NumberFormat('en').format(stats.totalCases)}</span>
          <br />
          total cases
        </div>
        <div className="stat">
          <span className="stat__number">{new Intl.NumberFormat('en').format(stats.totalDeaths)}</span>
          <br />
          total deaths
        </div>
        <div className="stat">
          <span className="stat__number">{new Intl.NumberFormat('en').format(stats.totalTests)}</span>
          <br />
          total tests
        </div>
      </div>
    </div>
  );
}
