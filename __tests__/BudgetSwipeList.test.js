import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import BudgetSwipeList from '../Components/Objects/BudgetSwipeList';

// Mock the useNavigation hook
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('BudgetSwipeList Komponente', () => {
  test('wird korrekt gerendert', () => {
    const budgets = [
      { title: 'Budget 1', details: 'Details for Budget 1' },
      { title: 'Budget 2', details: 'Details for Budget 2' },
    ];

    const { getByText, getByTestId } = render(<BudgetSwipeList budgets={budgets} />);

    // Testen der gerenderten Elemente
    const budgetTitles = budgets.map(budget => getByText(budget.title));
    

    // Assertions
    expect(budgetTitles.length).toBe(2);
    
  });
});
