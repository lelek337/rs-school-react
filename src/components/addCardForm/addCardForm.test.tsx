import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddCardForm from './AddCardForm';

describe('AddCardForm', () => {
  it('should render somthing', () => {
    expect(render(<AddCardForm />)).not.toBeNull();
  });
  it('find text', () => {
    render(<AddCardForm />);
    expect(screen.getByText('Available'));
  });
});
