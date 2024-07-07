import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import AddBudget from '../Screens/BudgetSavings/AddBudget';
import Savvy from '../Backend/SavvyController';

// Mocking Savvy class and its methods
jest.mock('../Backend/SavvyController', () => {
  return jest.fn().mockImplementation(() => ({
    getCurrencies: jest.fn(() => [
      { label: ' ', value: '0' },
      { label: 'Euro €', value: '1' },
      { label: 'USD $', value: '2' },
    ]),
  }));
});

describe('AddBudget Screen', () => {
  let navigation;

  beforeEach(() => {
    navigation = { goBack: jest.fn() };
  });

  it('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<AddBudget navigation={navigation} />);

    // Check if the header text is rendered
    expect(getByText('Budget hinzufügen')).toBeTruthy();

    // Check if input fields are rendered
    expect(getByPlaceholderText('Gib einen Titel ein...')).toBeTruthy();
    expect(getByPlaceholderText('Gib einen Betrag ein...')).toBeTruthy();

    // Check if buttons are rendered
    expect(getByText('Abbrechen')).toBeTruthy();
    expect(getByText('Speichern')).toBeTruthy();
  });

});
