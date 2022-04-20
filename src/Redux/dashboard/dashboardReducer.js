// Action Creators

export const fetchAllTimeData = () => async (dispatch) => {
  await fetch('https://corona.lmao.ninja/v2/all?yesterday')
    .then((res) => res.json())
    .then((data) => dispatch({ type: 'FETCH_ALL_TIME_DATA', data }));
};

// Reducer

export default function dashboardReducer(state = [], action) {
  let dashboardData;
  switch (action.type) {
    case 'FETCH_ALL_TIME_DATA':
      dashboardData = {
        active: action.data.active,
        totalCases: action.data.cases,
        totalDeaths: action.data.deaths,
        totalTests: action.data.tests,
        todayCases: action.data.todayCases,
        todayDeaths: action.data.todayDeaths,
      };
      return dashboardData;
    default:
      return state;
  }
}
