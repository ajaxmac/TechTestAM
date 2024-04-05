import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native';
import useCreateRepo from '../../graphql/useCreateRepo';

const Add = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);
  const [newRepo, setNewRepo] = useState<any>(null);
  const createRepo = useCreateRepo();

  /**
   * on input change
   */
  const onNameChange = (e: any) => {
    const text = e.nativeEvent.text;
    setName(text);
  };

  const onDescriptionChange = (e: any) => {
    const text = e.nativeEvent.text;
    setDescription(text);
  };

  const onPress = async () => {
    // very simple validation
    if (!name || !description) {
      setError(true);
      return;
    }

    const repo = await createRepo.create(name, description);
    setNewRepo(repo);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Heading}>
        {!newRepo ? 'Add a new Private Repository' : 'Success!'}
      </Text>
      {!newRepo ? (
        <View style={styles.Rows}>
          <View style={styles.Inputs}>
            <Text style={styles.Label}>Name</Text>
            <TextInput
              placeholder="Enter Repository Name"
              style={styles.Input}
              onChange={e => onNameChange(e)}
              value={name}
              autoFocus={true}
            />
          </View>
          <View style={styles.Inputs}>
            <Text style={styles.Label}>Description</Text>
            <TextInput
              placeholder="Enter Repository Description"
              style={styles.Input}
              onChange={e => onDescriptionChange(e)}
              value={description}
              autoFocus={false}
            />
          </View>
          {error ? (
            <Text style={styles.Error}>Please fill in all fields</Text>
          ) : null}
          <Button
            onPress={onPress}
            buttonColor="green"
            textColor="white"
          >
            Create
          </Button>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'lightblue',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
  },
  Heading: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
    width: '100%',
  },
  Label: {
    fontSize: 16,
    fontWeight: 'bold',
    width: 100,
  },
  Rows: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  Inputs: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  Input: {
    color: 'black',
    backgroundColor: 'white',
    padding: 10,
    width: 150,
  },
  Error: {
    color: 'red',
    fontSize: 12,
  },
});
export default Add;
