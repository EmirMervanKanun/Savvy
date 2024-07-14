import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native'; // waitFor importiert
import Registry from '../../Screens/Onboarding/Registry';

// Mocken der react-navigation Funktionen
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: jest.fn() }),
}));

describe('Registry Komponente', () => {
  let navigation;

  beforeEach(() => {
    // Mocken der Navigation
    navigation = require('@react-navigation/native').useNavigation();
    navigation.navigate.mockClear();
  });

  it('rendert korrekt', () => {
    const { toJSON } = render(<Registry />);
    expect(toJSON()).toMatchSnapshot();
  });

  
});
