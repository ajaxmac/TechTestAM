import React from 'react';
import { Text, View } from 'react-native';
import SingleRepo from '../../components/single-repo/SingleRepo';
import useSingleRepo from '../../graphql/useSingleRepo';
import { StyleSheet } from 'react-native';

const RepoSingle = ({ route }: { route: any }) => {
  console.log(route);
  const { repo, loading } = useSingleRepo('ajaxmac', route.params.screen);

  console.log(repo);
  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SingleRepo repo={repo.repository} />
    </View>
  );
};

// create a stylesheet for the home screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'lightblue',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
  },
  Buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  button: {
    margin: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    backgroundColor: 'blue',
  },
});

export default RepoSingle;
