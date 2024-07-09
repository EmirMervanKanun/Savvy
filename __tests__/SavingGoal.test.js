import React from 'react';
import { render } from '@testing-library/react-native';
import SavingGoal from '../Components/Objects/SavingGoal';

describe('SavingGoal Component', () => {
  test('renders correctly', () => {
    // Mock props
    const props = {
      title: 'Savings Goal Title',
      details: {
        amount1: 500,
        amount2: 1000,
        dateStart: '2024-01-01',
        dateEnd: '2024-12-31',
        img: require('../Icons/Categories/sports.png'),
      },
    };

    // Render the component with mock props
    const { getByText, getByTestId } = render(<SavingGoal props={props} />);

    // Assertions
    const titleText = getByText(props.title);
    const amountText = getByText(`${props.details.amount1}€ / ${props.details.amount2}€`);
    const dateText = getByText(`${props.details.dateStart} - ${props.details.dateEnd}`);
    const progressCircle = getByTestId('progress-circle'); // Hier wird die Test-ID verwendet

    // Verify that all expected elements are rendered
    expect(titleText).toBeDefined();
    expect(amountText).toBeDefined();
    expect(dateText).toBeDefined();
    expect(progressCircle).toBeDefined();
  });
});
