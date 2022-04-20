import {
    render, screen,
  } from '@testing-library/react';
  import { BrowserRouter as Router } from 'react-router-dom';
  import CountriesDisplay from './CountriesDisplay';
  
  it('rendering navbar', () => {
    render(<Router><CountriesDisplay /></Router>);
    expect(screen.getByText('0 active cases')).toBeInTheDocument();
  });