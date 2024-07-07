import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import InputText from '../Components/Inputfelder/InputText';
import COLORS from '../Components/Colors';

describe('InputText Component', () => {
  it('renders correctly with placeholder and keyboardType', () => {
    const { getByPlaceholderText } = render(
      <InputText placeholder="Enter text" keyboardType="default" />
    );
    const inputElement = getByPlaceholderText('Enter text');
    expect(inputElement).toBeTruthy();
    expect(inputElement.props.keyboardType).toBe('default');
  });

  it('updates value on text change', () => {
    const { getByPlaceholderText } = render(
      <InputText placeholder="Enter text" keyboardType="default" />
    );
    const inputElement = getByPlaceholderText('Enter text');

    fireEvent.changeText(inputElement, 'Hello');
    expect(inputElement.props.value).toBe('Hello');
  });
});
