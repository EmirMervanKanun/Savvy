import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ToggleButton from '../../Components/Buttons/ButtonToggle';
import COLORS from '../../Components/Colors';

describe('ToggleButton', () => {
  test('toggles from off to on', () => {
    const { getByTestId } = render(<ToggleButton />);
    
    const button = getByTestId('toggle-button');
    const nob = getByTestId('toggle-nob');

    // Initial state
    expect(button.props.style).toContainEqual(expect.objectContaining({ backgroundColor: COLORS.primaryLight }));
    expect(nob.props.style).toContainEqual(expect.objectContaining({ backgroundColor: COLORS.primaryDark }));

    // Toggle button
    fireEvent.press(button);

    // After toggle
    expect(button.props.style).toContainEqual(expect.objectContaining({ backgroundColor: COLORS.primaryDark }));
    expect(nob.props.style).toContainEqual(expect.objectContaining({ backgroundColor: COLORS.primaryLight }));
  });
});
