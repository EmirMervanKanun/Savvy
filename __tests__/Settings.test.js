import React from 'react';
import { act } from 'react-test-renderer';
import renderer from 'react-test-renderer';
import Settings from '../Screens/Settings/Settings';
import ButtonSettingsItem from '../Components/Buttons/SettingsItem';
import { CommonActions } from '@react-navigation/native';

// Mocken der react-navigation Funktionen
jest.mock('@react-navigation/native', () => ({
  CommonActions: {
    navigate: jest.fn().mockImplementation((x) => ({ ...x, type: 'NAVIGATE' })),
  },
  useNavigation: () => ({ dispatch: jest.fn() }),
}));

// Mocken der ButtonSettingsItem-Komponente
jest.mock('../Components/Buttons/SettingsItem', () => 'ButtonSettingsItem');

describe('Settings Komponente', () => {
  let tree;
  let navigation;

  beforeEach(() => {
    // Mocken der useNavigation Hook-Funktion
    navigation = {
      dispatch: jest.fn(),
    };

    // Initialisieren des renderer.create innerhalb von act, um asynchrone Updates zu ermöglichen
    act(() => {
      tree = renderer.create(<Settings navigation={navigation} />);
    });
  });

  it('rendert korrekt', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('navigiert zu "EditProfile" bei Klick auf den "Profil bearbeiten" Button', () => {
    act(() => {
      const editProfileButton = tree.root.findAllByType(ButtonSettingsItem)[0];
      editProfileButton.props.onPress(); // Simuliert den Klick auf den "Profil bearbeiten" Button
    });

    expect(navigation.dispatch).toHaveBeenCalledWith(
      CommonActions.navigate({ name: 'EditProfile' })
    );
  });

  it('navigiert zu "Categories" bei Klick auf den "Kategorien" Button', () => {
    act(() => {
      const categoriesButton = tree.root.findAllByType(ButtonSettingsItem)[1];
      categoriesButton.props.onPress(); // Simuliert den Klick auf den "Kategorien" Button
    });

    expect(navigation.dispatch).toHaveBeenCalledWith(
      CommonActions.navigate({ name: 'Categories' })
    );
  });

  it('navigiert zu "Notifications" bei Klick auf den "Mitteilungen" Button', () => {
    act(() => {
      const notificationsButton = tree.root.findAllByType(ButtonSettingsItem)[2];
      notificationsButton.props.onPress(); // Simuliert den Klick auf den "Mitteilungen" Button
    });

    expect(navigation.dispatch).toHaveBeenCalledWith(
      CommonActions.navigate({ name: 'Notifications' })
    );
  });

  it('navigiert zu "AGB" bei Klick auf den "AGB" Button', () => {
    act(() => {
      const agbButton = tree.root.findAllByType(ButtonSettingsItem)[3];
      agbButton.props.onPress(); // Simuliert den Klick auf den "AGB" Button
    });

    expect(navigation.dispatch).toHaveBeenCalledWith(
      CommonActions.navigate({ name: 'AGB' })
    );
  });

  it('navigiert zu "DataProtection" bei Klick auf den "Datenschutz" Button', () => {
    act(() => {
      const dataProtectionButton = tree.root.findAllByType(ButtonSettingsItem)[4];
      dataProtectionButton.props.onPress(); // Simuliert den Klick auf den "Datenschutz" Button
    });

    expect(navigation.dispatch).toHaveBeenCalledWith(
      CommonActions.navigate({ name: 'DataProtection' })
    );
  });

  it('navigiert zu "Imprint" bei Klick auf den "Impressum" Button', () => {
    act(() => {
      const imprintButton = tree.root.findAllByType(ButtonSettingsItem)[5];
      imprintButton.props.onPress(); // Simuliert den Klick auf den "Impressum" Button
    });

    expect(navigation.dispatch).toHaveBeenCalledWith(
      CommonActions.navigate({ name: 'Imprint' })
    );
  });
});
