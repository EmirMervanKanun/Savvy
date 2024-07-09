import React from 'react';
import { act } from 'react-test-renderer';
import renderer from 'react-test-renderer';
import Registry from '../../Screens/Onboarding/Registry';
import Button from '../../Components/Buttons/Button';

// Mocken der react-navigation Funktionen
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: jest.fn() }),
}));

// Mocken der Button-Komponente
jest.mock('../../Components/Buttons/Button', () => {
  const Button = ({ props }) => <button {...props} />; // Beispiel, wie eine Mock-Funktion für Button aussehen könnte
  return Button;
});

describe('Registry Komponente', () => {
  let tree;
  let navigation;

  beforeEach(() => {
    // Initialisieren des renderer.create innerhalb von act, um asynchrone Updates zu ermöglichen
    act(() => {
      tree = renderer.create(<Registry />);
    });

    // Mocken der useNavigation Hook-Funktion
    navigation = {
      navigate: jest.fn(),
    };
  });

  it('rendert korrekt', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('navigiert zu "Onboarding" bei Klick auf den Abbrechen-Button', () => {
    act(() => {
      const buttons = tree.root.findAllByType(Button);
      const cancelButton = buttons.find(button => button.props.props.text === 'Abbrechen');
      if (cancelButton) {
        cancelButton.props.props.onPress(); // Simuliert den Klick auf den Abbrechen-Button
      }
    });
  });

  it('navigiert zu "MainTabs" bei Klick auf den Speichern-Button', () => {
    act(() => {
      const buttons = tree.root.findAllByType(Button);
      const saveButton = buttons.find(button => button.props.props.text === 'Speichern');
      if (saveButton) {
        saveButton.props.props.onPress(); // Simuliert den Klick auf den Speichern-Button
      }
    });
  });
});
