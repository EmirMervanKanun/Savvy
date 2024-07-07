import React from 'react';
import renderer, { act } from 'react-test-renderer';
import TransactionDiagramm from '../Screens/Transactions/TransactionsDiagram';

// Mock the ButtonFilter component
jest.mock('../Components/Buttons/ButtonFilter', () => ({ options, changedFilter, selectedAtStart }) => (
  <div data-testid="mocked-button-filter" options={options} changedFilter={changedFilter} selectedAtStart={selectedAtStart} />
));

describe('TransactionDiagramm Component', () => {
  let component;

  beforeEach(() => {
    act(() => {
      component = renderer.create(<TransactionDiagramm />);
    });
  });

  afterEach(() => {
    component.unmount();
  });

  it('renders correctly', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('changes filter when ButtonFilter is interacted with', () => {
    act(() => {
      const mockedButtonFilter = component.root.findByProps({ 'data-testid': 'mocked-button-filter' });
      // Simulate a filter change
      if (mockedButtonFilter.props.changedFilter) {
        mockedButtonFilter.props.changedFilter('Einnahmen');
      }
    });

    // Assert the component after filter change
    expect(component.toJSON()).toMatchSnapshot();
  });
});
