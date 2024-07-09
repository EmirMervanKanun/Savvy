import React from 'react';
import { render } from '@testing-library/react-native';
import PlaceholderText from '../../Components/TextComponents/PlaceholderText';

describe('PlaceholderText', () => {
  test('renders the children text correctly', () => {
    const { getByText } = render(<PlaceholderText>Sample Placeholder</PlaceholderText>);

    // Check if the text is rendered correctly
    const textElement = getByText('Sample Placeholder');
    expect(textElement).toBeTruthy();
  });

  test('applies the correct placeholder style', () => {
    const { getByText } = render(<PlaceholderText>Sample Placeholder</PlaceholderText>);

    // Check if the correct placeholder style is applied
    const textElement = getByText('Sample Placeholder');
    expect(textElement.props.style).toMatchObject({
      fontSize: 15,
    });
  });
});
