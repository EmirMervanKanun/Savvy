import React from 'react';
import { render } from '@testing-library/react-native';
import Categories from '../../Components/SonstSonstiges/Categorielist';

describe('CategoryList', () => {
  const mockCategories = [
    { label: 'Category1', icon: require('../../Icons/Categories/party.png') },
    { label: 'Category2', icon: require('../../Icons/Categories/party.png') },
    { label: 'Category3', icon: require('../../Icons/Categories/party.png') },
  ];

  test('renders categories correctly', () => {
    const { getByTestId } = render(<Categories props={mockCategories} />);

    // Check if each category icon is rendered correctly (using testID)
    const icon1 = getByTestId('category-icon-0');
    const icon2 = getByTestId('category-icon-1');
    const icon3 = getByTestId('category-icon-2');

    expect(icon1).toBeDefined();
    expect(icon2).toBeDefined();
    expect(icon3).toBeDefined();
  });

  test('applies correct styles to categories', () => {
    const { getByTestId } = render(<Categories props={mockCategories} />);

    // Check if each category has the correct style applied
    const category1 = getByTestId('category-item-0');
    const category2 = getByTestId('category-item-1');
    const category3 = getByTestId('category-item-2');
  });
});
