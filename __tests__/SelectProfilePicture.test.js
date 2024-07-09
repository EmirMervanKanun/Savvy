import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import ProfilePictureSelector from '../Components/Selection/SelectProfilePicture';

describe('<ProfilePictureSelector />', () => {
  test('selects and saves a different profile picture', async () => {
    const { getByTestId, getAllByTestId } = render(<ProfilePictureSelector />);
    
    // Get the selected picture before any interaction
    const selectedPictureBefore = getByTestId('selected-picture');
    console.log('Selected picture before:', selectedPictureBefore.props.source); // Log the source of the picture

    // Open the selection area
    fireEvent.press(selectedPictureBefore);

    // Get all pictures and select the second one
    const pictures = getAllByTestId(/^picture-/);
    fireEvent.press(pictures[1]); // Assuming there's more than one picture

    // Verify the new selected picture
    await waitFor(() => {
      const selectedPictureAfter = getByTestId('selected-picture');
      console.log('Selected picture after:', selectedPictureAfter.props.source);
      expect(selectedPictureAfter.props.source).toEqual(pictures[1].props.source);
    });
  });
});
