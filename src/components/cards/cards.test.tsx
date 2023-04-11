import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Cards from './Cards';

describe('Cards', () => {
  const wrapper = render(<Cards />);
  it('should render somthing', () => {
    expect(wrapper).not.toBeNull();
  });
});
