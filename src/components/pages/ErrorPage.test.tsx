import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ErrorPage from './ErrorPage';

describe('ErrorPage', () => {
  it('should render somthing', () => {
    expect(render(<ErrorPage />)).not.toBeNull();
  });
  it('Page dose not exist', () => {
    render(<ErrorPage />);
    expect(screen.getByText('Page dose not exist')).toBeInTheDocument();
  });
});
