import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import CatIconSelector from '../../Components/Selection/SelectCatIcon';

describe('<CatIconSelector />', () => {
  test('selects a different icon on press', async () => {
    const { getByTestId, getAllByTestId, queryByTestId } = render(<CatIconSelector />);

    // Get the selected icon before any interaction
    const selectedIconBefore = getByTestId('selected-icon');

    // Open the selection area
    fireEvent.press(selectedIconBefore);

    // Verify the selection area is displayed
    expect(getByTestId('selection-area')).toBeTruthy();

    // Get all icons and select the second one
    const icons = getAllByTestId(/^icon-/);
    fireEvent.press(icons[1]); // Assuming there's more than one icon

    // Save the selection
    const saveButton = getByTestId('save-button'); // Get the save button
    fireEvent.press(saveButton);

    // Verify the selection area is closed
    await waitFor(() => expect(queryByTestId('selection-area')).toBeNull());

    // Open the selection area again
    fireEvent.press(getByTestId('selected-icon'));

    // Cancel the selection
    const cancelButton = getByTestId('cancel-button'); // Get the cancel button
    fireEvent.press(cancelButton);

    // Verify the selection area is closed
    await waitFor(() => expect(queryByTestId('selection-area')).toBeNull());

  });
});
