import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import CategorySwipeList from '../Components/Objects/CategorySwipeList';

// Mock für NavigationContainer
const MockNavigationContainer = ({ children }) => (
  <NavigationContainer>
    {children}
  </NavigationContainer>
);

describe('CategorySwipeList Komponente', () => {
  test('wird korrekt gerendert', () => {
    // Mock-Daten für Kategorien
    const categories = [
      { title: 'Kategorie 1', details: { img: require('../Icons/Categories/clothes.png') } },
      { title: 'Kategorie 2', details: { img: require('../Icons/Categories/sports.png') } },
    ];

    // Die Komponente innerhalb des Mock-NavigationContainers rendern
    const { getByTestId } = render(
      <MockNavigationContainer>
        <CategorySwipeList categories={categories} />
      </MockNavigationContainer>
    );
  });
});
