export const fetchContinents = () => async (dispatch) => {
  await fetch('https://corona.lmao.ninja/v2/continents?yesterday=true&sort')
    .then((res) => res.json())
    .then((continents) => dispatch({ type: 'FETCH_CONTINENTS', continents }));
};

// Reducer

export default function continentsReducer(state = [], action) {
  const continents = [];
  switch (action.type) {
    case 'FETCH_CONTINENTS':
      action.continents.forEach((continent) => {
        continents.push({
          id: Math.floor(Math.random() * 999999),
          name: continent.continent,
          active: continent.active,
        });
      });
      return continents;
    default:
      return state;
  }
}
