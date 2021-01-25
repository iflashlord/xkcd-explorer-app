import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './state/strip.store';
import App from './App';

test('renders and checks the valid home page', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/XKCD Explorer/i)).toBeInTheDocument();
  expect(getByText(/Loading.../i)).toBeInTheDocument();
});