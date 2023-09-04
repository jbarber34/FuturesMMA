import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../pages/index';

//Demo Test

it('renders homepage unchanged', async () => {
  render(<Home />);
  const button = await screen.getByTestId('btn-home');

  fireEvent.click(button);
});
