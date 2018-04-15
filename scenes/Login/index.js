import React from 'react';
import { View } from 'react-native';

import FacebookButton from './FacebookButton';
import styles from './styles';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FacebookButton />
      </View>
    );
  }
}
