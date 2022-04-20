import {
    render, screen,
  } from '@testing-library/react';
  import { BrowserRouter as Router } from 'react-router-dom';
  import ContinentsDisplay from './ContinentsDisplay';
  
  it('rendering navbar', () => {
    render(<Router><ContinentsDisplay /></Router>);
    expect(screen.getByText('0')).toBeInTheDocument();
  });