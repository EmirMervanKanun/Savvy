import React from 'react';
import renderer, { act } from 'react-test-renderer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import App from '../App';
import Navbar from '../Components/Navigation/Navbar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(() => Promise.resolve()),
  getItem: jest.fn(() => Promise.resolve(null)),
  removeItem: jest.fn(() => Promise.resolve()),
}));

// Mock useFonts
jest.mock('expo-font', () => ({
  useFonts: () => [true, null],
}));

// Mock other components
jest.mock('../Components/Navigation/Navbar', () => 'Navbar');
jest.mock('@react-navigation/native', () => ({
  NavigationContainer: jest.fn(({ children }) => children)
}));
jest.mock('react-native-safe-area-context', () => ({
  SafeAreaProvider: jest.fn(({ children }) => children)
}));

describe('App Component', () => {
  it('renders App correctly', async () => {
    await act(async () => {
      renderer.create(<App />);
    });
  });

  it('contains NavigationContainer and Navbar', async () => {
    let tree;
    await act(async () => {
      tree = renderer.create(<App />);
    });

    const navigationContainerInstance = tree.root.findByType(NavigationContainer);
    expect(navigationContainerInstance).not.toBeNull();

    const navbarInstance = tree.root.findByType(Navbar);
    expect(navbarInstance).not.toBeNull();

    const safeAreaProviderInstance = tree.root.findByType(SafeAreaProvider);
    expect(safeAreaProviderInstance).not.toBeNull();
  });
});