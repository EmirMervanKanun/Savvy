import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ButtonSettings from '../../Components/Buttons/ButtonSettings';

describe('ButtonSettings', () => {
  test('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(<ButtonSettings onPress={onPressMock} />);
    
    const button = getByTestId('button-settings');

    // Initial state check
    expect(button).toBeTruthy();

    // Simulate press
    fireEvent.press(button);

    // Ensure onPress was called
    expect(onPressMock).toHaveBeenCalled();
  });
});
