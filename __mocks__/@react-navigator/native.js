// __mocks__/@react-navigation/native.js
import { jest } from '@jest/globals';

export const useNavigation = jest.fn().mockReturnValue({
  navigate: jest.fn(),
  goBack: jest.fn(),
  setParams: jest.fn(),
  getParam: jest.fn(),
  // Add other navigation functions that you use
});
