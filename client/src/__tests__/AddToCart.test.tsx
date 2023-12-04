import { render, screen } from '@testing-library/react';
import { describe, expect, it, vitest } from 'vitest';
import AddToCart from '../pages/ProductDetails/AddToCart/AddToCart';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import userEvent from '@testing-library/user-event';

const queryClient = new QueryClient();
describe('Add To Cart', () => {
  it('should render and update the quantity correctly', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <AddToCart
          price={200}
          token="token"
          setAddToCartStatus={vitest.fn()}
          setItemsOnCart={vitest.fn()}
        />
      </QueryClientProvider>
    );
    const incrementBtn = screen.getByRole('button', { name: '+' });
    const decrementBtn = screen.getByRole('button', { name: '-' });
    const quantity = screen.getByTitle('quantity');

    expect(incrementBtn).toBeTruthy();
    expect(decrementBtn).toBeTruthy();
    expect(parseInt(quantity.innerHTML)).toBe(1);

    await userEvent.click(incrementBtn);
    expect(parseInt(quantity.innerHTML)).toBe(2);
    await userEvent.click(decrementBtn);
    expect(parseInt(quantity.innerHTML)).toBe(1);
  });
});
