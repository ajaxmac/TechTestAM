import React from 'react';
import { View, Text } from 'react-native';
import { Link } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

type Props = {
  repo: {
    id: string;
    name: string;
    description: string;
    isPrivate: boolean;
  };
};

const Repo = (props: Props) => {
  const { name, description, isPrivate } = props.repo;
  return (
    <Link style={styles.Repo} to={`/RepoSingle/${name}`}>
      <View style={styles.status}>
        <Text style={styles.Name}>{name}</Text>
        {isPrivate ? <Text>Private</Text> : <Text>Public</Text>}
      </View>
      <Text style={styles.Description}>{description}</Text>
    </Link>
  );
};

const styles = StyleSheet.create({
  Repo: {
    backgroundColor: 'lightgrey',
    margin: 10,
    padding: 10,
    width: '95%',
  },
  Name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  Description: {
    fontSize: 16,
  },
  status: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});


export default Repo;
