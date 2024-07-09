import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import CategoriesDropdown from '../../Components/Dropdowns/Categories';

describe('CategoriesDropdown Component', () => {
  it('displays placeholder as default', () => {
    const { getByText } = render(<CategoriesDropdown />);
    const placeholderText = getByText('Wähle eine Kategorie aus...');
    expect(placeholderText).toBeTruthy();
  });

  it('opens dropdown on press', async () => {
    const { getByText } = render(<CategoriesDropdown />);
    const dropdownSelector = getByText('Wähle eine Kategorie aus...');

    fireEvent.press(dropdownSelector);

    // Add a small delay to allow the dropdown to open
    await waitFor(() => {
      const firstCategory = getByText('Gaming');
      expect(firstCategory).toBeTruthy();
    });
  });

  it('selects a category on item press', async () => {
    const { getByText } = render(<CategoriesDropdown />);
    const dropdownSelector = getByText('Wähle eine Kategorie aus...');

    fireEvent.press(dropdownSelector);

    const gamingCategory = getByText('Gaming');
    fireEvent.press(gamingCategory);

    // Wait for the selection to update in the UI
    await waitFor(() => {
      const selectedText = getByText('Gaming');
      expect(selectedText).toBeTruthy();
    });
  });
});
