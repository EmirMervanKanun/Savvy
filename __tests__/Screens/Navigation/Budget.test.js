import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {render,screen} from '@testing-library/react-native';
import {it} from '@jest/globals';
import {Budget} from "../../../Screens";

it('renders Budget correctly', () => {
    const tree = renderer.create(<Budget/>);
    //console.log(JSON.stringify(tree.toJSON()));
});

it('renderer Budget has 1 child', () => {
    const tree = renderer.create(<Budget />).toJSON();
    //console.log(JSON.stringify(tree));
    expect(tree.children.length).toBe(1);
});

it('renders Budget find text "Sparziele Budget"', () => {
    render(<Budget />);
    expect(screen.getByText('Sparziele Budget').props.children).toBe('Sparziele Budget');
});

