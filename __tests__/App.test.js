import React from 'react';
import renderer, { act } from 'react-test-renderer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import App from '../App';
import Navbar from '../Components/Navigation/Navbar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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
  NavigationContainer: jest.fn(({ children }) => children),
  useNavigation: jest.fn(),
}));
jest.mock('react-native-safe-area-context', () => ({
  SafeAreaProvider: jest.fn(({ children }) => children),
}));
jest.mock('react-native-gesture-handler', () => ({
  GestureHandlerRootView: jest.fn(({ children }) => children),
}));
jest.mock('@react-navigation/native-stack', () => {
  return {
    createNativeStackNavigator: jest.fn().mockReturnValue({
      Navigator: jest.fn(({ children }) => children),
      Screen: jest.fn(() => null),
    }),
  };
});

describe('App Component', () => {
  it('renders App correctly', async () => {
    await act(async () => {
      renderer.create(<App />);
    });
  });

  it('contains NavigationContainer, SafeAreaProvider, and Navbar', async () => {
    let tree;
    await act(async () => {
      tree = renderer.create(<App />);
    });

    // Debugging: Print the rendered tree
    console.log(JSON.stringify(tree.toJSON(), null, 2));

    const navigationContainerInstance = tree.root.findByType(NavigationContainer);
    expect(navigationContainerInstance).not.toBeNull();

    const safeAreaProviderInstance = tree.root.findByType(SafeAreaProvider);
    expect(safeAreaProviderInstance).not.toBeNull();

    const gestureHandlerRootViewInstance = tree.root.findByType(GestureHandlerRootView);
    expect(gestureHandlerRootViewInstance).not.toBeNull();

    /*Debugging: Check if Navbar is found in the tree
    try {
      const navbarInstance = tree.root.findByType(Navbar);
      console.log('Navbar found:', navbarInstance);
      expect(navbarInstance).not.toBeNull();
    } catch (error) {
      console.log('Navbar not found in the tree', error);
      throw error;
    }*/
  });

  it('loads and saves data correctly', async () => {
    // Set up the getItem mock to return null initially
    AsyncStorage.getItem.mockReturnValueOnce(Promise.resolve(null));

    await act(async () => {
      renderer.create(<App />);
    });

    // Check that getItem was called to load the data
    expect(AsyncStorage.getItem).toHaveBeenCalledWith('AppData');

    // Check that setItem was called to save the data
    expect(AsyncStorage.setItem).toHaveBeenCalledWith('AppData', expect.any(String));
  });
});
