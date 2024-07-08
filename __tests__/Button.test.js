import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../Components/Buttons/Button';
import COLORS from '../Components/Colors';

describe('Button', () => {
    test('renders text button correctly and responds to press', () => {
        const onPressMock = jest.fn();
        const { getByTestId } = render(
            <Button props={{ text: 'Click me', onPress: onPressMock }} />
        );

        const button = getByTestId('text-button');

        // Check button is rendered correctly
        expect(button).toBeTruthy();

        // Simulate press
        fireEvent.press(button);

        // Ensure onPress was called
        expect(onPressMock).toHaveBeenCalled();
    });

    test('renders icon and text button correctly and responds to press', () => {
        const onPressMock = jest.fn();
        const { getByTestId } = render(
            <Button props={{ img: require('../Icons/Objects/arrowRight.png'), text: 'Next', onPress: onPressMock }} />
        );

        const button = getByTestId('icon-text-button');

        // Check button is rendered correctly
        expect(button).toBeTruthy();

        // Simulate press
        fireEvent.press(button);

        // Ensure onPress was called
        expect(onPressMock).toHaveBeenCalled();
    });

    test('renders icon button correctly and responds to press', () => {
        const onPressMock = jest.fn();
        const { getByTestId } = render(
            <Button props={{ img: require('../Icons/Objects/arrowRight.png'), onPress: onPressMock }} />
        );

        const button = getByTestId('icon-button');

        // Check button is rendered correctly
        expect(button).toBeTruthy();

        // Simulate press
        fireEvent.press(button);

        // Ensure onPress was called
        expect(onPressMock).toHaveBeenCalled();
    });
});
