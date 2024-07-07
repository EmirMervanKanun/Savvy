import React from 'react';
import { act } from 'react-test-renderer';
import renderer from 'react-test-renderer';
import CategoriesStart from '../Screens/Settings/Categories';
import ButtonBack from '../Components/Buttons/ButtonBack';
import Button from '../Components/Buttons/Button';
import { CommonActions } from '@react-navigation/native';

// Mocken der react-navigation Funktionen
jest.mock('@react-navigation/native', () => ({
  CommonActions: {
    navigate: jest.fn().mockImplementation((x) => ({ ...x, type: 'NAVIGATE' })),
  },
  useNavigation: () => ({ dispatch: jest.fn() }),
}));

describe('CategoriesStart Komponente', () => {
  let tree;
  let navigation;

  beforeEach(() => {
    // Mocken der useNavigation Hook-Funktion
    navigation = {
      dispatch: jest.fn(),
    };

    // Initialisieren des renderer.create innerhalb von act, um asynchrone Updates zu ermöglichen
    act(() => {
      tree = renderer.create(<CategoriesStart navigation={navigation} />);
    });
  });

  it('rendert korrekt', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('navigiert zu "Settings" bei Klick auf den Zurück-Button', () => {
    act(() => {
      const buttonBack = tree.root.findByType(ButtonBack);
      buttonBack.props.onPress(); // Simuliert den Klick auf den Zurück-Button
    });

    expect(navigation.dispatch).toHaveBeenCalledWith(
      CommonActions.navigate({ name: 'Settings' })
    );
  });

  it('navigiert zu "AddCategory" bei Klick auf den "Hinzufügen" Button', () => {
    act(() => {
      const addButton = tree.root.findByType(Button);
      addButton.props.props.onPress(); // Simuliert den Klick auf den "Hinzufügen" Button
    });

    expect(navigation.dispatch).toHaveBeenCalledWith(
      CommonActions.navigate({ name: 'AddCategory' })
    );
  });
});
