import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

export const Register = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Text style={{fontSize: 30}}>Signup</Text>
      <Text style={{fontSize: 15}}>Please Signup to continue</Text>

      <View style={{width: '80%', margin: 20}}>
        <TextInput
          placeholder="Full Name:"
          style={{
            marginTop: 15,
            backgroundColor: '#eaeaea',
            paddingHorizontal: 20,
          }}></TextInput>

        <TextInput
          placeholder="Email:"
          style={{
            marginTop: 15,
            backgroundColor: '#eaeaea',
            paddingHorizontal: 20,
          }}></TextInput>

        <TextInput
          placeholder="Password: "
          style={{
            marginTop: 15,
            backgroundColor: '#eaeaea',
            paddingHorizontal: 20,
          }}></TextInput>

        <View style={{marginTop: 20}}>
          <Button
            title="Register"
            color="#ff0000"
            onPress={() => navigation.navigate('Login')}></Button>
        </View>
      </View>
    </View>
  );
};
