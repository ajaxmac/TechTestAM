// __mocks__/@react-navigation/stack.js
import React from 'react';

const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
  reset: jest.fn(),
};

export const createStackNavigator = jest.fn().mockReturnValue({
  Navigator: ({ children }) => <>{children}</>,
  Screen: ({ children }) => <>{children}</>,
});

export function useNavigation() {
  return mockNavigation;
}

export function useRoute() {
  return {
    params: jest.fn(),
  };
}
