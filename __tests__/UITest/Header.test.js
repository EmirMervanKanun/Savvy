import React from 'react';
import { render } from '@testing-library/react-native';
import Header from '../../Components/TextComponents/Header';

describe('Header', () => {
  test('renders the children text correctly', () => {
    const { getByText } = render(<Header>Title Text</Header>);

    // Überprüfen, ob der Text gerendert wird
    const headerText = getByText('Title Text');
    expect(headerText).toBeTruthy();
  });

  test('applies the correct styles', () => {
    const { getByText } = render(<Header>Title Text</Header>);

    // Überprüfen der angewendeten Stile
    const headerText = getByText('Title Text');
    expect(headerText.props.style).toMatchObject({
      fontFamily: 'Sora-Bold',
      fontSize: 20,
      lineHeight: 24,
    });
  });
});
