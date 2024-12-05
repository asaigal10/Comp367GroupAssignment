import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Add student link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Add student/i);
  expect(linkElement).toBeInTheDocument();
});
