import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Repos from '../../components/Repos';
import { StyleSheet } from 'react-native';

const Home = () => {

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Repos />
      <View style={styles.Buttons}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Add')}
          buttonColor={'red'}
          textColor={'white'}
        >
          Add
        </Button>
      </View>
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

export default Home;
