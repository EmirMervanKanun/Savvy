import React from 'react';
import { act } from 'react-test-renderer';
import renderer from 'react-test-renderer';
import AddSaving from '../../Screens/BudgetSavings/AddSaving';
import Header from '../../Components/TextComponents/Header';
import InputText from '../../Components/Inputfelder/InputText';
import CategoriesDropdown from '../../Components/Dropdowns/Categories';
import CurrencySmallDropdown from '../../Components/Dropdowns/CurrencySmall';
import Button from '../../Components/Buttons/Button';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ goBack: jest.fn() }),
}));

describe('AddSaving Komponente', () => {
  let tree;
  let navigation;

  beforeEach(() => {
    // Mocken der useNavigation Hook-Funktion
    navigation = {
      goBack: jest.fn(),
    };

    // Initialisieren des renderer.create innerhalb von act, um asynchrone Updates zu ermöglichen
    act(() => {
      tree = renderer.create(<AddSaving navigation={navigation} />);
    });
  });

  it('rendert korrekt', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('rendert den Header korrekt', () => {
    const headers = tree.root.findAllByType(Header);
    const header = headers.find(h => h.props.children === 'Sparziel hinzufügen');
    expect(header).toBeTruthy();
  });

  it('rendert die Eingabefelder und Dropdowns korrekt', () => {
    const inputFields = tree.root.findAllByType(InputText);
    expect(inputFields.length).toBe(2); // Titel und Betrag

    const categoryDropdown = tree.root.findByType(CategoriesDropdown);
    expect(categoryDropdown).toBeTruthy();

    const currencyDropdown = tree.root.findByType(CurrencySmallDropdown);
    expect(currencyDropdown).toBeTruthy();
  });

  it('navigiert zurück bei Klick auf den "Abbrechen" Button', () => {
    act(() => {
      const cancelButton = tree.root.findAllByType(Button)[0];
      cancelButton.props.props.onPress(); // Simuliert den Klick auf den "Abbrechen" Button
    });

    expect(navigation.goBack).toHaveBeenCalled();
  });

  it('Speichern Button hat die richtigen Props', () => {
    const saveButton = tree.root.findAllByType(Button)[1];
    expect(saveButton.props.props.text).toBe('Speichern');
    expect(saveButton.props.props.img).toBe(require('../../Icons/Button/save.png'));
    expect(saveButton.props.props.color).toBe('blue');
  });
});
