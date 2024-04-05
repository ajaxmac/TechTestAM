/**
 * Tech Test - React Native
 * @format
 */
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import Provider from './graphql/ApolloProvider';
import Routes from './routes/Routes';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <PaperProvider>
        <Provider>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <Routes />
        </Provider>
      </PaperProvider>
    </NavigationContainer>
  );
}

export default App;
