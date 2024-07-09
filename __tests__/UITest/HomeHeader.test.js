import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeHeader from '../../Components/OBJHome/HomeHeader';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

const mockProps = {
  name: 'Max Mustermann',
  amount: 1000,
};

describe('<HomeHeader />', () => {
  test('renders correctly', () => {
    const { getByText, getByTestId } = render(<HomeHeader props={mockProps} />);

    // Check if the greeting text and amount are rendered correctly
    const greetingText = getByText(`Hallo, ${mockProps.name}!`);
    const amountText = getByText(`${mockProps.amount}€`);
    const placeholderText = getByTestId('placeholder-text');

    expect(greetingText).toBeDefined();
    expect(amountText).toBeDefined();
  });

  test('navigates to settings screen on button click', () => {
    const { getByTestId } = render(<HomeHeader props={mockProps} />);
    fireEvent.press(getByTestId('button-settings'));

    // Assert that navigation function is called with 'Settings' screen name
    const navigateMock = require('@react-navigation/native').useNavigation().navigate;
  });
});
