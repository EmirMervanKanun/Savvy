import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import RepetitionDropdown from '../Components/Dropdowns/Repetition';

describe('RepetitionDropdown Component', () => {
  it('displays default selected option correctly', () => {
    const { getByText } = render(<RepetitionDropdown />);
    const defaultOption = getByText('Keine Wiederholung');
    expect(defaultOption).toBeTruthy();
  });

  it('opens dropdown on press', async () => {
    const { getByText } = render(<RepetitionDropdown />);
    const dropdownSelector = getByText('Keine Wiederholung');

    fireEvent.press(dropdownSelector);

    // Wait for the dropdown items to appear
    await waitFor(() => {
      const weeklyOption = getByText('Wöchentlich');
      expect(weeklyOption).toBeTruthy();
    });
  });

  it('selects an option on item press', async () => {
    const { getByText } = render(<RepetitionDropdown />);
    const dropdownSelector = getByText('Keine Wiederholung');

    fireEvent.press(dropdownSelector);

    const monthlyOption = getByText('Monatlich');
    fireEvent.press(monthlyOption);

    // Wait for the selection to update in the UI
    await waitFor(() => {
      const selectedOption = getByText('Monatlich');
      expect(selectedOption).toBeTruthy();
    });
  });
});
