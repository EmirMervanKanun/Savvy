import React from 'react';
import { render } from '@testing-library/react-native';
import NavText from '../Components/TextComponents/NavText';

describe('NavText', () => {
  test('renders the children text correctly', () => {
    const { getByText } = render(<NavText>Navigation Item</NavText>);

    // Überprüfen, ob der Text gerendert wird
    const navText = getByText('Navigation Item');
    expect(navText).toBeTruthy();
  });

  test('applies the correct styles', () => {
    const { getByText } = render(<NavText>Navigation Item</NavText>);

    // Überprüfen der angewendeten Stile
    const navText = getByText('Navigation Item');
    expect(navText.props.style).toMatchObject({
      fontSize: 11,
      fontFamily: 'Sora-SemiBold',
    });
  });
});
