/**
 * Sample React Native App
 */

import React, { Component } from 'react';
import { 
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TodoInput from './src/component/TodoInput';

export default class App extends Component<{}> {
  _onPress = (text) => {
    console.log(text);
  }  
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <TodoInput onPress={this._onPress} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#233',
    paddingTop: 40,
    alignItems: 'center',
  },
  main: {
    flex: 1,
    maxWidth: 400,
    alignItems: 'center',
  }
});
