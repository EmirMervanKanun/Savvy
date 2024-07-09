import React from 'react';
import { render } from '@testing-library/react-native';
import OurFont from '../../Components/TextComponents/OurFont';

describe('OurFont', () => {
  test('renders the children text correctly', () => {
    const { getByText } = render(<OurFont>Sample Text</OurFont>);

    // Check if the text is rendered correctly
    const textElement = getByText('Sample Text');
    expect(textElement).toBeTruthy();
  });

  test('applies the correct font style', () => {
    const { getByText } = render(<OurFont>Sample Text</OurFont>);

    // Check if the correct font style is applied
    const textElement = getByText('Sample Text');
    expect(textElement.props.style).toMatchObject({
      fontFamily: 'Sora-Regular',
    });
  });
});
