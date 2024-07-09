import React from 'react';
import { act } from 'react-test-renderer';
import renderer from 'react-test-renderer';
import Saving from '../../Screens/BudgetSavings/Saving';
import Button from '../../Components/Buttons/Button';
import SavingSwipeList from '../../Components/Objects/SavingSwipeList';
import Savings from '../../Screens/BudgetSavings/Savings';

jest.mock('@react-navigation/native', () => ({
  CommonActions: {
    navigate: jest.fn(),
  },
  useNavigation: () => ({
    dispatch: jest.fn(),
  }),
}));

describe('Saving Komponente', () => {
  let tree;
  let navigation;
  let navigateSpy;

  beforeEach(() => {
    navigation = {
      dispatch: jest.fn(),
    };

    // Initialisieren des renderer.create innerhalb von act, um asynchrone Updates zu ermöglichen
    act(() => {
      tree = renderer.create(<Saving navigation={navigation} />);
    });

    // Setze den Navigate-Spy
    navigateSpy = jest.spyOn(require('@react-navigation/native').CommonActions, 'navigate');
  });

  it('rendert korrekt', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('rendert die SavingSwipeList korrekt', () => {
    const savingSwipeList = tree.root.findByType(SavingSwipeList);
    expect(savingSwipeList).toBeTruthy();
    expect(savingSwipeList.props.savings).toEqual(Savings);
  });

  it('navigiert zu AddSaving bei Klick auf den "Hinzufügen" Button', () => {
    act(() => {
      const addButton = tree.root.findAllByType(Button).find(
        button => button.props.props.text === 'Hinzufügen'
      );
      addButton.props.props.onPress(); // Simuliert den Klick auf den "Hinzufügen" Button
    });

    expect(navigation.dispatch).toHaveBeenCalledWith(
      navigateSpy({
        name: 'AddSaving'
      })
    );
  });

  it('der "Hinzufügen" Button hat die richtigen Props', () => {
    const addButton = tree.root.findAllByType(Button).find(
      button => button.props.props.text === 'Hinzufügen'
    );
    expect(addButton.props.props.text).toBe('Hinzufügen');
    expect(addButton.props.props.img).toBe(require('../../Icons/Button/add.png'));
    expect(addButton.props.props.color).toBe('blue');
    expect(addButton.props.props.size).toBe('big');
  });
});
