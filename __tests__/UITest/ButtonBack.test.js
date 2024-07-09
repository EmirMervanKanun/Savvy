import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ButtonBack from '../../Components/Buttons/ButtonBack';

describe('ButtonBack Component', () => {
  it('calls onPress callback when pressed', () => {
    const mockOnPress = jest.fn(); // Mock-Funktion für onPress

    const { getByText } = render(<ButtonBack onPress={mockOnPress} />);
    const buttonText = getByText('zurück');

    fireEvent.press(buttonText);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
