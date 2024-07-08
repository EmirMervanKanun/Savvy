import React from 'react';
import { render } from '@testing-library/react-native';
import TitelAmountText from '../Components/TextComponents/TitelAmountText';

describe('TitelAmountText', () => {
  test('renders the children text correctly', () => {
    const { getByText } = render(<TitelAmountText>Sample Title Amount</TitelAmountText>);

    // Check if the text is rendered correctly
    const textElement = getByText('Sample Title Amount');
    expect(textElement).toBeTruthy();
  });

  test('applies the correct title amount style', () => {
    const { getByText } = render(<TitelAmountText>Sample Title Amount</TitelAmountText>);

    // Check if the correct title amount style is applied
    const textElement = getByText('Sample Title Amount');
    expect(textElement.props.style).toMatchObject({
      fontSize: 15,
      fontFamily: 'Sora-Bold',
    });
  });
});
