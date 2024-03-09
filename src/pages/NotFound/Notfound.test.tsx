import { render } from '@testing-library/react';
import { expect } from 'vitest';
import NotFound from './index';

test('renders NotFound component', () => {
  const { getByText } = render(<NotFound />);
  const notFoundElement = getByText(/Not Found/i);
  expect(notFoundElement).toBeInTheDocument();
});
