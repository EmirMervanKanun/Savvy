import React from 'react';
import { render } from '@testing-library/react-native';
import Transaction from '../../Components/Objects/TransStanOrder';

describe('Transaction Component', () => {
  test('renders correctly', () => {
    // Mock data for props
    const transaction = {
      title: 'Groceries',
      details: {
        amount: 500,
        isIncome: false,
        img: require('../../Icons/Categories/sports.png'),
        date: '2024-01-01',
        isStan: false,
        stan: null,
      },
    };

    // Render the component with mock props
    const { getByText, getByTestId } = render(<Transaction props={transaction} />);

    // Assertions for each element in the component
    const titleText = getByText(transaction.title);
    const amountText = getByText(`- ${transaction.details.amount}€`);
    const dateText = getByText(transaction.details.date);

    // Ensure the image element is rendered
    const imageElement = getByTestId('transaction-image');

    expect(titleText).toBeDefined();
    expect(amountText).toBeDefined();
    expect(dateText).toBeDefined();
    expect(imageElement).toBeTruthy(); // Check if image element exists
  });
});
