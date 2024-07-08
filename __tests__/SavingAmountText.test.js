import React from 'react';
import { render } from '@testing-library/react-native';
import SavingsAmountText from '../Components/TextComponents/SavingsAmountText';

describe('SavingsAmountText', () => {
  test('renders the children text correctly', () => {
    const { getByText } = render(<SavingsAmountText>Sample Savings Amount</SavingsAmountText>);

    // Check if the text is rendered correctly
    const textElement = getByText('Sample Savings Amount');
    expect(textElement).toBeTruthy();
  });

  test('applies the correct savings amount style', () => {
    const { getByText } = render(<SavingsAmountText>Sample Savings Amount</SavingsAmountText>);

    // Check if the correct savings amount style is applied
    const textElement = getByText('Sample Savings Amount');
    expect(textElement.props.style).toMatchObject({
      fontSize: 14,
      fontFamily: 'Sora-SemiBold',
    });
  });
});
