import React from 'react';
import { render } from '@testing-library/react-native';
import BudgetSwipe from '../../Components/Objects/BudgetSwipe';

const mockProps = {
  title: 'Budget Titel',
  details: {
    img: require('../../Icons/Objects/arrowLeft.png'), 
    amount1: 500, // Beispielbeträge
    amount2: 1000,
    dateStart: '2024-01-01',
    dateEnd: '2024-12-31',
  },
};

describe('BudgetSwipe', () => {
  test('rendert korrekt mit den Props', () => {
    const { getByText, getByTestId } = render(<BudgetSwipe props={mockProps} />);

    // Überprüfe, ob Elemente korrekt gerendert werden
    const titleElement = getByText('Budget Titel');
    expect(titleElement).toBeTruthy();

    const amountTextElement = getByText('500€ / 1000€');
    expect(amountTextElement).toBeTruthy();

    const dateTextElement = getByText('2024-01-01 - 2024-12-31');
    expect(dateTextElement).toBeTruthy();

    const progressBar = getByTestId('progress-bar');
    expect(progressBar).toBeTruthy();
  });
});
