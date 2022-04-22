import {
  render, screen,
} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import AllTimeStats from './AllTimeStats';
import store from '../../Redux/storeSetUp';

it('rendering navbar', () => {
  render(<Router><Provider store={store}><AllTimeStats /></Provider></Router>);
  expect(screen.getByText('active cases')).toBeInTheDocument();
});
