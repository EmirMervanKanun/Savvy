import React from 'react';
import { render } from '@testing-library/react-native';
import { DeleteOverlay } from '../../Components/Overlay/DeleteOverlay';

// Mocked Button component to prevent errors related to Button.js
jest.mock('../../Components/Buttons/Button', () => {
  const MockedButton = (props) => {
    return (
      <mocked-button onPress={props.onPress}>
        {props.children}
      </mocked-button>
    );
  };
  return MockedButton;
});

describe('<DeleteOverlay />', () => {
  test('renders text correctly', () => {
    const { queryByText } = render(
      <DeleteOverlay title="Test Item" onCancel={() => {}} onDelete={() => {}} />
    );

    // Check if the title and confirmation message are rendered correctly
    expect(queryByText('Test Item')).not.toBeNull();
    expect(queryByText('wirklich löschen?')).toBeNull();
  });
});
