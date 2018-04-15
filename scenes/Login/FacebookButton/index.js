import React from 'react';
import { Facebook } from 'expo';
import { Text, TouchableOpacity } from 'react-native';
import axios from 'axios';

import { facebook } from '~/services/constants/auth';

export default class FacebookButton extends React.Component {
  handleFacebookButtonPress = async () => {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      facebook.APP_ID,
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

      const apiResponse = await axios.post('http://localhost:8000/auth/login', {
        name: response.data.name,
        email: response.data.email,
        birthday: response.data.birthday || null,
        gender: response.data.gender || null,
        avatar: response.data.picture.data.url,
      });

      console.log(apiResponse);
    }
  };

  render() {
    return (
      <TouchableOpacity onPress={this.handleFacebookButtonPress}>
        <Text>Login with Facebook</Text>
      </TouchableOpacity>
    );
  }
}
