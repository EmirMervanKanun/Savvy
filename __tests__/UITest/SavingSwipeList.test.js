import React from 'react';
import { render } from '@testing-library/react-native';
import SavingSwipeList from '../../Components/Objects/SavingSwipeList';

// Mock für useNavigation
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('SavingSwipeList Component', () => {
  test('renders correctly', () => {
    // Mock savings data
    const savings = [
      {
        title: 'Savings Goal 1',
        details: {
          amount1: 500,
          amount2: 1000,
          dateStart: '2024-01-01',
          dateEnd: '2024-12-31',
          img: require('../../Icons/Categories/sports.png'),
        },
      },
      {
        title: 'Savings Goal 2',
        details: {
          amount1: 800,
          amount2: 1200,
          dateStart: '2024-02-01',
          dateEnd: '2024-11-30',
          img: require('../../Icons/Categories/clothes.png'),
        },
      },
    ];

    // Render the component with mock props
    const { getByText } = render(<SavingSwipeList savings={savings} />);

    // Assertions for each item in savings array
    savings.forEach((saving, index) => {
      const titleText = getByText(saving.title);
      const amountText = getByText(`${saving.details.amount1}€ / ${saving.details.amount2}€`);
      const dateText = getByText(`${saving.details.dateStart} - ${saving.details.dateEnd}`);

      expect(titleText).toBeDefined();
      expect(amountText).toBeDefined();
      expect(dateText).toBeDefined();
    });
  });
});
