import React from 'react';
import renderer from 'react-test-renderer';
import FixedTransactions from '../Screens/FixedTransactions/FixedTransactions';
import Header from '../Components/TextComponents/Header';
import TransactionsSwipeList from '../Components/Objects/TransactionSwipeList';

jest.mock('../Components/TextComponents/Header', () => 'Header');
jest.mock('../Components/Objects/TransactionSwipeList', () => 'TransactionsSwipeList');
jest.mock('../Components/Objects/Transactions', () => []);

describe('FixedTransactions Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<FixedTransactions />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('contains Header with correct text', () => {
    const tree = renderer.create(<FixedTransactions />);
    const headerInstance = tree.root.findByType(Header);
    expect(headerInstance.props.children).toBe('Daueraufträge');
  });

  it('contains TransactionsSwipeList with correct transactions', () => {
    const tree = renderer.create(<FixedTransactions />);
    const transactionsSwipeListInstance = tree.root.findByType(TransactionsSwipeList);
    expect(transactionsSwipeListInstance.props.transactions).toEqual([]);
  });
});
