import renderer from 'react-test-renderer';
import {
  render, screen,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/storeSetUp';
import HomePage from './HomePage';

it('snapshot of homepage', () => {
  const tree = renderer.create(
    <Router><Provider store={store}><HomePage /></Provider></Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('rendering page', () => {
  render(<Router><Provider store={store}><HomePage /></Provider></Router>);
  expect(screen.getByText('ALL TIME STATS')).toBeInTheDocument();
});