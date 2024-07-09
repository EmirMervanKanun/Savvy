import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import CurrencySmallDropdown from '../../Components/Dropdowns/CurrencySmall';

describe('CurrencySmallDropdown Component', () => {
  it('displays default selected currency correctly', () => {
    const { getByText } = render(<CurrencySmallDropdown />);
    const defaultCurrency = getByText('Euro €');
    expect(defaultCurrency).toBeTruthy();
  });

  it('opens dropdown on press', async () => {
    const { getByText, queryByText } = render(<CurrencySmallDropdown />);
    const dropdownSelector = getByText('Euro €');

    fireEvent.press(dropdownSelector);

    // Check that USD $ is present after dropdown opens
    const usdCurrency = getByText('USD $');
    expect(usdCurrency).toBeTruthy();
  });

  it('selects a currency on item press', async () => {
    const { getByText } = render(<CurrencySmallDropdown />);
    const dropdownSelector = getByText('Euro €');

    fireEvent.press(dropdownSelector);

    const usdCurrency = getByText('USD $');
    fireEvent.press(usdCurrency);

    // Wait for the selection to update in the UI
    await waitFor(() => {
      const selectedCurrency = getByText('USD $');
      expect(selectedCurrency).toBeTruthy();
    });
  });
});
