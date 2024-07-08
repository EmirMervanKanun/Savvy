import React from 'react';
import { render } from '@testing-library/react-native';
import ButtonText from '../Components/TextComponents/ButtonText';

describe('ButtonText', () => {
  test('renders the children text correctly', () => {
    const { getByText } = render(<ButtonText>Click Me</ButtonText>);

    // Überprüfen, ob der Text gerendert wird
    const buttonText = getByText('Click Me');
    expect(buttonText).toBeTruthy();
  });

  test('applies the correct styles', () => {
    const { getByText } = render(<ButtonText>Click Me</ButtonText>);

    // Überprüfen der angewendeten Stile
    const buttonText = getByText('Click Me');
    expect(buttonText.props.style).toMatchObject({
      fontFamily: 'Sora-SemiBold',
      fontSize: 15,
    });
  });
});
