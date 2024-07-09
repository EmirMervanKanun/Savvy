import React from 'react';
import { render } from '@testing-library/react-native';
import DateText from '../../Components/TextComponents/DateText';

describe('DateText', () => {
  test('renders the children text correctly', () => {
    const { getByText } = render(<DateText>2024-07-09</DateText>);

    // Überprüfen, ob der Text gerendert wird
    const dateText = getByText('2024-07-09');
    expect(dateText).toBeTruthy();
  });

  test('applies the correct styles', () => {
    const { getByText } = render(<DateText>2024-07-09</DateText>);

    // Überprüfen der angewendeten Stile
    const dateText = getByText('2024-07-09');
    expect(dateText.props.style).toMatchObject({
      fontSize: 12,
    });
  });
});
