import React from 'react';
import { render, getByTestId } from '@testing-library/react-native';
import Notification from '../../Components/SonstSonstiges/Notifications';

describe('Notification Component', () => {
  const mockData = [
    { label: 'Notification1' },
    { label: 'Notification2' },
    { label: 'Notification3' },
  ];

  test('renders notifications correctly', () => {
    const { getByTestId } = render(<Notification props={mockData} />);

    // Check if each notification item is rendered correctly (using testID)
    const notification1 = getByTestId('notification-item-0');
    const notification2 = getByTestId('notification-item-1');
    const notification3 = getByTestId('notification-item-2');

    expect(notification1).toBeDefined();
    expect(notification2).toBeDefined();
    expect(notification3).toBeDefined();
  });

  test('renders correct labels', () => {
    const { getByTestId } = render(<Notification props={mockData} />);

    // Check if labels are rendered correctly
    const label1 = getByTestId('notification-label-0');
    const label2 = getByTestId('notification-label-1');
    const label3 = getByTestId('notification-label-2');

  });
});
