import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

describe('App', () => {
  it('should render somthing', () => {
    const wrapper = render(<App />);
    expect(wrapper).not.toBeNull();
  });
});
