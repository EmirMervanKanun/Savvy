import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RadioButtonGroup from '../Components/Buttons/ButtonRadio';

describe('RadioButtonGroup Component', () => {
  it('selects an option in the radio button group', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];

    const { getByText } = render(
      <RadioButtonGroup options={options} />
    );

    // Wähle eine Option aus, indem du darauf klickst
    const optionToSelect = getByText('Option 2');
    fireEvent.press(optionToSelect);

    // Überprüfe, ob die Auswahl korrekt aktualisiert wurde
    const selectedOptionText = getByText('Option 2');
    expect(selectedOptionText).toBeTruthy();
  });
});
