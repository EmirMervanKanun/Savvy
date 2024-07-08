import React from 'react';
import { render } from '@testing-library/react-native';
import RadioDefaultText from '../Components/TextComponents/RadioDefaultText';

describe('RadioDefaultText', () => {
  test('renders the children text correctly', () => {
    const { getByText } = render(<RadioDefaultText>Sample Radio Text</RadioDefaultText>);

    // Check if the text is rendered correctly
    const textElement = getByText('Sample Radio Text');
    expect(textElement).toBeTruthy();
  });

  test('applies the correct radio default text style', () => {
    const { getByText } = render(<RadioDefaultText>Sample Radio Text</RadioDefaultText>);

    // Check if the correct radio default text style is applied
    const textElement = getByText('Sample Radio Text');
    expect(textElement.props.style).toMatchObject({
      fontSize: 14,
    });
  });
});
