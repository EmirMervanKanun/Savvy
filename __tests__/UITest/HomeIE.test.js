import React from 'react';
import { render } from '@testing-library/react-native';
import HomeIE from '../../Components/OBJHome/HomeIE';

describe('HomeIE component', () => {
  test('renders correctly', () => {
    const props = {
      iAmount: 100, // Example income amount
      eAmount: 50, // Example expenses amount
    };

    const { getByText, getByAltText } = render(<HomeIE props={props} />);

    // Test for elements that should be rendered
    const incomeTitle = getByText('Einnahmen');
    const expensesTitle = getByText('Ausgaben');
    const incomeAmount = getByText('100€');
    const expensesAmount = getByText('- 50€');

    // Assertions
    expect(incomeTitle).toBeDefined();
    expect(expensesTitle).toBeDefined();
    expect(incomeAmount).toBeDefined();
    expect(expensesAmount).toBeDefined();
  });
});
