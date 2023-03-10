import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
// import your providers here. eg ThemeProvider, SnackbarProvider

const AllTheProviders = ({ children }) => {
  return (
    <Providers>
      {children}
    </Providers>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
