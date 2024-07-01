import React from 'react';
import renderer, { act } from 'react-test-renderer';
import HomeStart from '../Screens/Home/Home';

// Mock untergeordnete Komponenten
jest.mock('../Components/OBJHome/HomeHeader', () => 'HomeHeader');
jest.mock('../Components/OBJHome/HomeIE', () => 'HomeIE');
jest.mock('../Components/TextComponents/Header', () => 'Header');
jest.mock('../Components/Objects/TransactionSwipeList', () => 'TransactionSwipeList');
jest.mock('../Components/Objects/Transactions', () => 'Transactions');

describe('HomeStart Component', () => {
  it('renders correctly', async () => {
    let tree;
    await act(async () => {
      tree = renderer.create(<HomeStart />);
    });
  });
});
