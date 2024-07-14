// __tests__/UITest/SelectProfilePicture.test.js
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import ProfilePictureSelector from '../../Components/Selection/SelectProfilePicture';

// Mock der Icons und anderer Ressourcen für den Test
jest.mock('../../Icons/ProfilePictures/profilePictureDefault.png', () => 1);
jest.mock('../../Icons/ProfilePictures/profilePicture1.png', () => 2);
jest.mock('../../Icons/ProfilePictures/profilePicture2.png', () => 3);
// Fügen Sie so viele Mocks hinzu, wie Sie in Ihrer Komponente benötigen

describe('<ProfilePictureSelector />', () => {
  test('wählt ein anderes Profilbild aus und speichert es', async () => {
    const { getByTestId, getAllByTestId } = render(<ProfilePictureSelector />);

    // Öffne den Auswahlbereich
    const selectedPictureBefore = getByTestId('selected-picture');
    fireEvent.press(selectedPictureBefore);

    // Warte darauf, dass der Auswahlbereich angezeigt wird
    await waitFor(() => {
      const selectionArea = getByTestId('selection-area');
      expect(selectionArea).toBeDefined();
    });

    // Wähle das zweite Profilbild
    const pictures = getAllByTestId(/^picture-/);
    fireEvent.press(pictures[1]);

    // Speichern
    const saveButton = getByTestId('save-button');
    fireEvent.press(saveButton);

    // Warte darauf, dass das ausgewählte Bild aktualisiert wird
    await waitFor(() => {
      const selectedPictureAfter = getByTestId('selected-picture');
      expect(selectedPictureAfter.props.source).toBeUndefined();
    });
  });

  test('schließt den Auswahlbereich ohne Speichern beim Drücken von Abbrechen', async () => {
    const { getByTestId, getAllByTestId } = render(<ProfilePictureSelector />);

    // Öffne den Auswahlbereich
    const selectedPictureBefore = getByTestId('selected-picture');
    fireEvent.press(selectedPictureBefore);

    // Warte darauf, dass der Auswahlbereich angezeigt wird
    await waitFor(() => {
      const selectionArea = getByTestId('selection-area');
      expect(selectionArea).toBeDefined();
    });

    // Wähle das zweite Profilbild
    const pictures = getAllByTestId(/^picture-/);
    fireEvent.press(pictures[1]);

    // Abbrechen
    const cancelButton = getByTestId('cancel-button');
    fireEvent.press(cancelButton);

    // Überprüfe, dass das ausgewählte Bild nicht aktualisiert wurde
    await waitFor(() => {
      const selectedPictureAfter = getByTestId('selected-picture');
      expect(selectedPictureAfter.props.source).toBeUndefined();
    });
  });
});
