import React from 'react';
import renderer, { act } from 'react-test-renderer';
import AddTransaction from '../../Screens/AddTransaction/AddTransaction';
import InputDate from '../../Components/Inputfelder/InputDate';
import Repition from '../../Components/Dropdowns/Repetition';
import CurrencySmall from '../../Components/Dropdowns/CurrencySmall';
import CategoriesDropdown from '../../Components/Dropdowns/Categories';
import RadioButtonGroup from '../../Components/Buttons/ButtonRadio';
import InputText from '../../Components/Inputfelder/InputText';
import TextHeader from '../../Components/TextComponents/Header';
import Button from '../../Components/Buttons/Button';

jest.mock('../../Components/Inputfelder/InputDate', () => 'InputDate');
jest.mock('../../Components/Dropdowns/Repetition', () => 'Repition');
jest.mock('../../Components/Dropdowns/CurrencySmall', () => 'CurrencySmall');
jest.mock('../../Components/Dropdowns/Categories', () => 'CategoriesDropdown');
jest.mock('../../Components/Buttons/ButtonRadio', () => 'RadioButtonGroup');
jest.mock('../../Components/Inputfelder/InputText', () => 'InputText');
jest.mock('../../Components/TextComponents/Header', () => 'TextHeader');
jest.mock('../../Components/Buttons/Button', () => 'Button');

describe('AddTransaction Component', () => {
  let tree;

  beforeEach(async () => {
    await act(async () => {
      tree = renderer.create(<AddTransaction />);
    });
  });

  it('renders correctly', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('contains all required components', () => {
    const root = tree.root;

    expect(root.findByType(InputDate)).toBeTruthy();
    expect(root.findByType(Repition)).toBeTruthy();
    expect(root.findByType(CurrencySmall)).toBeTruthy();
    expect(root.findByType(CategoriesDropdown)).toBeTruthy();
    expect(root.findByType(RadioButtonGroup)).toBeTruthy();
    expect(root.findByType(InputText)).toBeTruthy();
    expect(root.findAllByType(TextHeader)).toHaveLength(3);
    expect(root.findAllByType(Button)).toHaveLength(2);
  });

  it('passes correct props to RadioButtonGroup', () => {
    const radioButtonGroup = tree.root.findByType(RadioButtonGroup);
    expect(radioButtonGroup.props.options).toEqual(['Einnahme', 'Ausgabe', 'Sparen']);
  });

  it('renders buttons with correct props', () => {
    const buttons = tree.root.findAllByType(Button);
    expect(buttons[0].props.props).toMatchObject({
      color: 'blue',
      size: 'mid',
      text: 'Abrechen',
      img: require("../../Icons/Button/cancel.png")
    });
    expect(buttons[1].props.props).toMatchObject({
      color: 'blue',
      size: 'mid',
      text: 'Speichern',
      img: require("../../Icons/Button/save.png")
    });
  });

  it('renders categories dropdown with correct options', () => {
    const categoriesDropdown = tree.root.findByType(CategoriesDropdown);
    expect(categoriesDropdown.props.props).toEqual([
      { label: 'Wähle eine Kategorie aus...', value: '0', icon: null },
      { label: 'Lebensmittel', value: '1', icon: require('../../Icons/Categories/groceries.png') },
      { label: 'Miete', value: '2', icon: require('../../Icons/Categories/rent.png') },
      { label: 'Klamotten', value: '3', icon: require('../../Icons/Categories/clothes.png') },
      { label: 'Technik', value: '4', icon: require('../../Icons/Categories/devices.png') },
      { label: 'Transportmittel', value: '5', icon: require('../../Icons/Categories/transportation.png') },
      { label: 'Medikamente', value: '6', icon: require('../../Icons/Categories/medication.png') },
      { label: 'Haustier', value: '7', icon: require('../../Icons/Categories/pets.png') },
    ]);
  });

  it('renders correct text headers', () => {
    const textHeaders = tree.root.findAllByType(TextHeader);
    expect(textHeaders[0].children).toEqual(['Transaktion hinufügen']);
    expect(textHeaders[1].children).toEqual(['Betrag']);
    expect(textHeaders[2].children).toEqual(['Kategorie']);
  });
});

