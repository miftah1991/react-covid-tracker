import renderer from 'react-test-renderer';
import {
  render, screen,
} from '@testing-library/react';
import NotFound from './NotFound';

it('snapshot of homepage', () => {
  const tree = renderer.create(
    <NotFound />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('rendering page', () => {
  render(<NotFound />);
  expect(screen.getByText('NotFound')).toBeInTheDocument();
});
