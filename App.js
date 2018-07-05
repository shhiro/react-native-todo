import React, { Component } from 'react';
import { 
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TodoInput from './src/component/TodoInput';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <TodoInput />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    paddingTop: 40,
    alignItems: 'center',
  },
  main: {
    flex: 1,
    maxWidth: 400,
    alignItems: 'center',
  }
});
