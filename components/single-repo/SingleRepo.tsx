import React from 'react';
import { View, Text } from 'react-native';
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
    <View style={styles.Repo}>
      <View style={styles.status}>
        <Text style={styles.Name}>{name}</Text>
        {isPrivate ? <Text>Private</Text> : <Text>Public</Text>}
      </View>
      <Text style={styles.Description}>{description}</Text>
      <Text style={styles.EverythingElse}>
        All the other repo info goes here...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Repo: {
    flex: 1,
    gap: 10,
    margin: 10,
    padding: 10,
    width: '95%',
  },
  Name: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  Description: {
    fontSize: 16,
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  EverythingElse: {
    fontSize: 14,
    color: 'grey',
  },
});

export default Repo;
