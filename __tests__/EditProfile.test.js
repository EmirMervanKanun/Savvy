import React from 'react';
import { act } from 'react-test-renderer';
import renderer from 'react-test-renderer';
import EditProfileStart from '../Screens/Settings/EditProfile';
import ButtonBack from '../Components/Buttons/ButtonBack';
import { ScrollView } from 'react-native';
import { CommonActions } from '@react-navigation/native';

// Mocken der react-navigation Funktionen
jest.mock('@react-navigation/native', () => ({
  CommonActions: {
    navigate: jest.fn(),
  },
}));

describe('EditProfileStart Komponente', () => {
  let tree;
  let navigation;

  beforeEach(() => {
    // Initialisieren des renderer.create innerhalb von act, um asynchrone Updates zu ermöglichen
    act(() => {
      navigation = {
        dispatch: jest.fn(),
      };
      tree = renderer.create(<EditProfileStart navigation={navigation} />);
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
