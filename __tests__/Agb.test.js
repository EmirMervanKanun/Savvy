import React from 'react';
import { act } from 'react-test-renderer';
import renderer from 'react-test-renderer';
import AgbStart from '../Screens/Settings/Agb';
import ButtonBack from '../Components/Buttons/ButtonBack';
import { CommonActions } from '@react-navigation/native';

// Mocken der react-navigation Funktionen
jest.mock('@react-navigation/native', () => ({
  CommonActions: {
    navigate: jest.fn(),
  },
}));

describe('AgbStart Komponente', () => {
  let tree;
  let navigation;

  beforeEach(() => {
    // Initialisieren des renderer.create innerhalb von act, um asynchrone Updates zu ermöglichen
    act(() => {
      navigation = {
        dispatch: jest.fn(),
      };
      tree = renderer.create(<AgbStart navigation={navigation} />);
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
});
