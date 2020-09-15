import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export const Login = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Text style={{fontSize: 30}}>Login</Text>
      <Text style={{fontSize: 15}}>Please signin to continue</Text>

      <View style={{width: '80%', margin: 20}}>
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
            title="Login"
            color="#ff0000"
            onPress={() => navigation.navigate('Register')}></Button>
        </View>
      </View>
    </View>
  );
};
