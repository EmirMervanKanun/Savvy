import React from 'react';
import { render } from '@testing-library/react-native';
import CategorySwipe from '../Components/Objects/CategorySwipe';

describe('CategorySwipe Component', () => {
  test('renders correctly', () => {
    // Mock props
    const props = {
      title: 'Category Title',
      details: {
        img: require('../Icons/Categories/sports.png'), 
      },
    };

    // Render the component with mock props
    const { getByText, getByTestId } = render(<CategorySwipe props={props} />);

    // Assertions
    const titleText = getByText(props.title);
    const imageComponent = getByTestId('category-image'); 

    // Verify that the title text and image are rendered
    expect(titleText).toBeDefined();
    expect(imageComponent).toBeDefined();
  });
});
