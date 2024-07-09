import React from 'react';
import { act } from 'react-test-renderer';
import renderer from 'react-test-renderer';
import Budget from '../../Screens/BudgetSavings/Budget';
import Button from '../../Components/Buttons/Button';
import BudgetSwipeList from '../../Components/Objects/BudgetSwipeList';
import { CommonActions } from '@react-navigation/native';

jest.mock('@react-navigation/native', () => ({
  CommonActions: {
    navigate: jest.fn(),
  },
  useNavigation: () => ({ dispatch: jest.fn() }),
}));

jest.mock('../../Components/Objects/BudgetSwipeList', () => 'BudgetSwipeList');

describe('Budget Komponente', () => {
  let tree;
  let navigation;

  beforeEach(() => {
    // Mocken der useNavigation Hook-Funktion
    navigation = {
      dispatch: jest.fn(),
    };

    // Initialisieren des renderer.create innerhalb von act, um asynchrone Updates zu ermöglichen
    act(() => {
      tree = renderer.create(<Budget navigation={navigation} />);
    });
  });

  it('rendert korrekt', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('rendert die BudgetSwipeList korrekt', () => {
    const budgetSwipeList = tree.root.findByType(BudgetSwipeList);
    expect(budgetSwipeList).toBeTruthy();
  });

  it('navigiert zu "AddBudget" bei Klick auf den "Hinzufügen" Button', () => {
    act(() => {
      const addButton = tree.root.findByType(Button);
      addButton.props.props.onPress(); // Simuliert den Klick auf den "Hinzufügen" Button
    });

    expect(navigation.dispatch).toHaveBeenCalledWith(
      CommonActions.navigate({ name: 'AddBudget' })
    );
  });

  it('Hinzufügen Button hat die richtigen Props', () => {
    const addButton = tree.root.findByType(Button);
    expect(addButton.props.props.text).toBe('Hinzufügen');
    expect(addButton.props.props.img).toBe(require('../../Icons/Button/add.png'));
    expect(addButton.props.props.color).toBe('blue');
  });
});
