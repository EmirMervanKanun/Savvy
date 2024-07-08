import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ButtonSettingsItem from '../Components/Buttons/SettingsItem';

describe('ButtonSettingsItem', () => {
  test('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <ButtonSettingsItem onPress={onPressMock}>
        Settings Item
      </ButtonSettingsItem>
    );

    const button = getByTestId('button-settings-item');

    // Initial state check
    expect(button).toBeTruthy();

    // Simulate press
    fireEvent.press(button);

    // Ensure onPress was called
    expect(onPressMock).toHaveBeenCalled();
  });
});
