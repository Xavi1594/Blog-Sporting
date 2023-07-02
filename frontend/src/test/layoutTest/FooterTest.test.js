import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { FooterComponent } from '../../components/layout/FooterComponent';

describe('FooterComponent', () => {
    test('renders current year in the footer', () => {
      render(<FooterComponent />);
      
      const currentYear = new Date().getFullYear();
      const yearText = screen.getByText(`© ${currentYear} El balón de Gijón`);
      
      expect(yearText).toBeInTheDocument();
    });
  
   
  });
