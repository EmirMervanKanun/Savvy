import React from 'react';
import renderer, { act } from 'react-test-renderer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import App from '../App';

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

it('renders App correctly', async () => {
  await act(async () => {
    renderer.create(<App />);
  });
});



/*
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

it('renders App correctly', () => {
    renderer.create(<App />);
});*/
