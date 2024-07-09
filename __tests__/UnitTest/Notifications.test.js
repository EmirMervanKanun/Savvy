import React from 'react';
import { act } from 'react-test-renderer';
import renderer from 'react-test-renderer';
import NotificationStart from '../../Screens/Settings/Notifications';
import ButtonBack from '../../Components/Buttons/ButtonBack';
import { CommonActions } from '@react-navigation/native';
import Notification from '../../Components/SonstSonstiges/Notifications';

// Mocken der react-navigation Funktionen
jest.mock('@react-navigation/native', () => ({
  CommonActions: {
    navigate: jest.fn(),
  },
}));

describe('NotificationStart Komponente', () => {
  let tree;
  let navigation;

  beforeEach(() => {
    // Initialisieren des renderer.create innerhalb von act, um asynchrone Updates zu ermöglichen
    act(() => {
      navigation = {
        dispatch: jest.fn(),
      };
      tree = renderer.create(<NotificationStart navigation={navigation} />);
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

  it('render die Notifications korrekt', () => {
    const notificationComponent = tree.root.findByType(Notification);
    const props = notificationComponent.props.props;

    // Überprüfen, ob die übergebenen Notifications mit den erwarteten Labels übereinstimmen
    expect(props.map(item => item.label)).toEqual([
      'Mitteilungen erhalten',
      'Töne',
      'Kennzeichen',
      'Banner',
    ]);
  });
});
