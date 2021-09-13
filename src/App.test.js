import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

afterEach(()=>{
  cleanup()
})

test('must render without crashing', () => {
  render(<App />);
});

test('must render userName as state variable', ()=>{
  render(<App />)
  const defaultName = screen.getByTestId('defaultUserName')
  expect(defaultName).toHaveTextContent('')
})
