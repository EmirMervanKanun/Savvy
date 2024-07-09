import React from 'react';
import renderer, { act } from 'react-test-renderer';
import HomeStart from '../../Screens/Home/Home';
import HomeHeader from '../../Components/OBJHome/HomeHeader';
import HomeIE from '../../Components/OBJHome/HomeIE';
import TransactionSwipeList from '../../Components/Objects/TransactionSwipeList';
import Transactions from '../../Components/Objects/Transactions';

// Mock der untergeordneten Komponenten
jest.mock('../../Components/OBJHome/HomeHeader', () => 'HomeHeader');
jest.mock('../../Components/OBJHome/HomeIE', () => 'HomeIE');
jest.mock('../../Components/Objects/TransactionSwipeList', () => 'TransactionSwipeList');
jest.mock('../../Components/Objects/Transactions', () => [
  {
    id: 1,
    type: 'expense',
    amount: '50.00',
    date: '2024-07-10',
  },
  {
    id: 2,
    type: 'income',
    amount: '100.00',
    date: '2024-07-09',
  },
]);

describe('HomeStart Component', () => {
  it('renders correctly', async () => {
    let tree;
    await act(async () => {
      tree = renderer.create(<HomeStart />);
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders HomeHeader with correct props', async () => {
    let tree;
    await act(async () => {
      tree = renderer.create(<HomeStart />);
    });

    const homeHeaderInstance = tree.root.findByType(HomeHeader);
    expect(homeHeaderInstance.props.props.profilePicture).toBe(
      require('../../Icons/ProfilePictures/profilePicture1.png')
    );
    expect(homeHeaderInstance.props.props.name).toBe('John');
    expect(homeHeaderInstance.props.props.amount).toBe('123.456,89');
  });

  it('renders HomeIE with correct props', async () => {
    let tree;
    await act(async () => {
      tree = renderer.create(<HomeStart />);
    });

    const homeIEInstance = tree.root.findByType(HomeIE);
    expect(homeIEInstance.props.props.iAmount).toBe('1.234,56');
    expect(homeIEInstance.props.props.eAmount).toBe('7.890,12');
  });

  it('renders TransactionSwipeList with correct transactions', async () => {
    let tree;
    await act(async () => {
      tree = renderer.create(<HomeStart />);
    });

    const transactionSwipeListInstance = tree.root.findByType(TransactionSwipeList);
    expect(transactionSwipeListInstance.props.transactions).toEqual(Transactions);
    expect(transactionSwipeListInstance.props.height).toBe(264);
  });
});
