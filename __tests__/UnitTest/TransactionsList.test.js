import React from 'react';
import renderer, { act } from 'react-test-renderer';
import TransactionScreen from '../../Screens/Transactions/TransactionsList';
import ButtonFilter from '../../Components/Buttons/ButtonFilter';
import TransactionsSwipeList from '../../Components/Objects/TransactionSwipeList';

// Mocken der ButtonFilter-Komponente
jest.mock('../../Components/Buttons/ButtonFilter', () => ({ options, changedFilter, selectedAtStart }) => (
  <div data-testid="mocked-button-filter" options={options} changedFilter={changedFilter} selectedAtStart={selectedAtStart} />
));

// Mocken der TransactionsSwipeList-Komponente
jest.mock('../../Components/Objects/TransactionSwipeList', () => ({ transactions }) => (
  <div data-testid="mocked-transaction-swipe-list" transactions={transactions} />
));

describe('TransactionScreen Komponente', () => {
  let component;

  beforeEach(() => {
    act(() => {
      component = renderer.create(<TransactionScreen />);
    });
  });

  it('rendert korrekt', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('überprüft den Filterwechsel in ButtonFilter', () => {
    act(() => {
      const mockedButtonFilter = component.root.findByProps({ 'data-testid': 'mocked-button-filter' });
      // Überprüfen, ob changedFilter als Funktion existiert, bevor Sie sie aufrufen
      if (mockedButtonFilter.props.changedFilter) {
        mockedButtonFilter.props.changedFilter('Einnahmen');
      }
    });

  });
});
