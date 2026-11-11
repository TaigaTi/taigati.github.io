import { render, screen } from '@testing-library/react';
import App from './App';

// Swiper ships ESM-only, which CRA's Jest can't load; the design carousel isn't under test here.
jest.mock('./components/DesignDetails', () => () => null);

test('renders the home page with name and main sections', () => {
  render(<App />);
  expect(screen.getAllByText('Tarika Birch').length).toBeGreaterThan(0);
  expect(screen.getByText('Experience')).toBeInTheDocument();
  expect(screen.getByText('Certificates')).toBeInTheDocument();
});
