import React from 'react';
import { Facebook } from 'expo';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';

import { FACEBOOK_APP_ID } from '~/services/constants/auth';

export default class Login extends React.Component {
  handleFacebookButtonPress = async () => {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      FACEBOOK_APP_ID,
      {
        permissions: ['public_profile', 'email', 'user_birthday'],
      },
    );

    if (type === 'success') {
      const response = await axios.get('https://graph.facebook.com/me', {
        params: {
          access_token: token,
          fields: ['name', 'email', 'birthday', 'gender', 'picture'].join(','),
        },
      });
      console.log(response);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handleFacebookButtonPress}>
          <Text>Login with Facebook</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
