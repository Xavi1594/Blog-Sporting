import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BlogHome } from '../../components/pages/BlogHome';

describe('BlogHome', () => {
  it('renders the component without errors', () => {
    render(<BlogHome />);
    const component = screen.getByTestId('blog-home');
    expect(component).toBeInTheDocument();
  });
});
