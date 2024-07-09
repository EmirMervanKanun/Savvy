import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import CatIconSelector from '../../Components/Selection/SelectCatIcon';

describe('<CatIconSelector />', () => {
  test('selects a different icon on press', async () => {
    const { getByTestId, getAllByTestId } = render(<CatIconSelector />);
    
    // Get the selected icon before any interaction
    const selectedIconBefore = getByTestId('selected-icon');
    console.log('Selected icon before:', selectedIconBefore.props.source); // Log the source of the icon
    
    // Open the selection area
    fireEvent.press(selectedIconBefore);

    // Get all icons and select the second one
    const icons = getAllByTestId(/^icon-/);
    fireEvent.press(icons[1]); // Assuming there's more than one icon

  });

});
