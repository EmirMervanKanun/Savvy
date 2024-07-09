import React from 'react';
import { render } from '@testing-library/react-native';
import TransactionSwipeList from '../Components/Objects/TransactionSwipeList';

// Mock für useNavigation
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('TransactionSwipeList Component', () => {
  test('renders correctly', () => {
    // Mock transactions data
    const transactions = [
      {
        title: 'Transaction 1',
        details: {
          amount: 500,
          category: 'Groceries',
          date: '2024-01-01',
        },
      },
      {
        title: 'Transaction 2',
        details: {
          amount: 800,
          category: 'Transportation',
          date: '2024-02-15',
        },
      },
    ];

    // Render the component with mock props
    const { getByText } = render(<TransactionSwipeList transactions={transactions} height={400} />);

    // Assertions for each item in transactions array
    transactions.forEach((transaction) => {
      const titleText = getByText(transaction.title);
      const amountText = getByText(new RegExp(`${transaction.details.amount}€`)); // Use RegExp for flexible matching
      const dateText = getByText(transaction.details.date);

      expect(titleText).toBeDefined();
      expect(amountText).toBeDefined();
      expect(dateText).toBeDefined();
    });
  });
});
