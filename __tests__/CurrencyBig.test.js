import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import CurrencyBigDropdown from '../Components/Dropdowns/CurrencyBig';

describe('CurrencyBigDropdown Component', () => {
  it('displays default selected currency correctly', () => {
    const { getByText } = render(<CurrencyBigDropdown />);
    const defaultCurrency = getByText('Euro €');
    expect(defaultCurrency).toBeTruthy();
  });

  it('opens dropdown on press', async () => {
    const { getByText, queryByText } = render(<CurrencyBigDropdown />);
    const dropdownSelector = getByText('Euro €');

    fireEvent.press(dropdownSelector);
  });

  it('selects a currency on item press', async () => {
    const { getByText } = render(<CurrencyBigDropdown />);
    const dropdownSelector = getByText('Euro €');

    fireEvent.press(dropdownSelector);

    const usdCurrency = getByText('USD $');
    fireEvent.press(usdCurrency);

    // Warten, bis die Auswahl in der UI aktualisiert wird
    await waitFor(() => {
      const selectedCurrency = getByText('USD $');
      expect(selectedCurrency).toBeTruthy();
    });
  });
});
