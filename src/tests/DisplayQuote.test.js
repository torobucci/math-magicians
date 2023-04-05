import {
  render, screen, act, waitFor,
} from '@testing-library/react';
import DisplayQuote from '../components/DisplayQuote';

describe('display quote', () => {
  test('Should display loading text', async () => {
    
    await waitFor(() => {
        render(<DisplayQuote />)
      });
    await waitFor(() => {
      screen.getByText('Loading ...');
      
    });
  });
  it('Render correctly', async () => {
    const quote = await act(async () => render(<DisplayQuote />));
  
    expect(quote).toMatchSnapshot();
  });
});
