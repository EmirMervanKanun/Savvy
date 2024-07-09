import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ButtonFilter from '../../Components/Buttons/ButtonFilter';

describe('ButtonFilter Component', () => {
  it('changes filter option on button press', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    let changedFilter = null; // Variable, um den geänderten Filter zu speichern

    const { getByText, rerender } = render(
      <ButtonFilter
        options={options}
        onPress={(filter) => {
          changedFilter = filter;
        }}
        selected={options[0]} // Wähle die erste Option als standardmäßig ausgewählt
      />
    );

    // Wähle eine andere Option aus, indem du darauf klickst
    const optionToSelect = getByText('Option 2');
    fireEvent.press(optionToSelect);

    // Führe ein Rerender durch, um sicherzustellen, dass die Komponente aktualisiert wird
    rerender(
      <ButtonFilter
        options={options}
        onPress={(filter) => {
          changedFilter = filter;
        }}
        selected={changedFilter} // Aktualisiere die ausgewählte Option basierend auf changedFilter
      />
    );
  });
});
