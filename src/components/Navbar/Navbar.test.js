import {
  render, screen,
} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';

it('rendering navbar', () => {
  render(<Router><Navbar /></Router>);
  expect(screen.getByText('COVID-19 stats')).toBeInTheDocument();
});
