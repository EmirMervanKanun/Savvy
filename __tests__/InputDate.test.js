import React from 'react';
import { render } from '@testing-library/react-native';
import InputDate from '../Components/Inputfelder/InputDate';

describe('InputDate Component', () => {
  test('renders calendar icon and input field', () => {
    const { getByTestId, getByPlaceholderText } = render(<InputDate />);
    
    // Überprüfe, ob das Kalender-Icon vorhanden ist
    const calendarIcon = getByTestId('calendar-icon');
    expect(calendarIcon).toBeDefined();

    // Überprüfe, ob das Eingabefeld für das Datum vorhanden ist
    const inputField = getByPlaceholderText('DD.MM.YYYY');
    expect(inputField).toBeDefined();
  });
});
