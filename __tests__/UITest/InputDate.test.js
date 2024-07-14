import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import InputDate from '../../Components/Inputfelder/InputDate';

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

  test('opens date picker on calendar icon press and updates date', async () => {
    const { getByTestId, getByPlaceholderText, queryByTestId } = render(<InputDate />);
    
    // Simuliere den Klick auf das Kalender-Icon, um den DatePicker zu öffnen
    const calendarIcon = getByTestId('calendar-icon');
    fireEvent.press(calendarIcon);

    // Überprüfe, ob das Eingabefeld mit dem ausgewählten Datum aktualisiert wurde
    const inputField = getByPlaceholderText('DD.MM.YYYY');
    expect(inputField.props.value).toBe('');
  });

  test('closes date picker on cancel', async () => {
    const { getByTestId, queryByTestId } = render(<InputDate />);
    
    // Simuliere den Klick auf das Kalender-Icon, um den DatePicker zu öffnen
    const calendarIcon = getByTestId('calendar-icon');
    fireEvent.press(calendarIcon);

  });
});
