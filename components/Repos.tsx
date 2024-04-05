import React from 'react';
import useRepos from '../graphql/useRepos';
import Repo from './repo/Repo';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

const Repos = () => {
  const { repos, loading } = useRepos();

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.User}>{repos.viewer.name}'s repositories</Text>
      {repos.viewer.repositories.nodes.map((repo: any) => (
          <Repo key={repo.id} repo={repo}/>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'lightblue',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
  },
  User: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
    width: '100%',
  }
});

export default Repos;
