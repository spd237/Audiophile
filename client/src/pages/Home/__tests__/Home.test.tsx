import { render, screen } from '@testing-library/react';
import { expect, test, vitest } from 'vitest';
import Home from '../Home';
import { MemoryRouter } from 'react-router-dom';

test('should render hero text', () => {
  render(
    <MemoryRouter>
      <Home setNavOpen={vitest.fn()} />
    </MemoryRouter>
  );
  const heroText = screen.getByText(
    'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.'
  );
  expect(heroText).toBeDefined();
});
