import React from 'react';
import { render  } from '@testing-library/react-native';
import SingleRepo from './SingleRepo';

describe('SingleRepo', () => {
  it('should render the repo name and description and Private', () => {
    const repo = {
      id: '1',
      name: 'repo1',
      description: 'description1',
      isPrivate: true,
    };
    const { getByText } = render(<SingleRepo repo={repo} />);
    expect(getByText(repo.name)).not.toBeNull();
    expect(getByText(repo.description)).not.toBeNull();
    expect(getByText('Private')).not.toBeNull();
  });

  it('should render the repo name and description and Public', () => {
    const repo = {
      id: '2',
      name: 'repo2',
      description: 'description2',
      isPrivate: false,
    };
    const { getByText } = render(<SingleRepo repo={repo} />);
    expect(getByText(repo.name)).not.toBeNull();
    expect(getByText(repo.description)).not.toBeNull();
    expect(getByText('Public')).not.toBeNull();
  });
});
