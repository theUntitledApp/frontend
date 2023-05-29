import React, { FunctionComponent, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../screens/rootStacks';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';

type FormProps = {
  form: 'login' | 'register'
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    padding: 8,
    marginBottom: 16,
    marginTop: 20,
    fontSize: 18,
    color: 'white',
  },
  button: {
    marginTop: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})

const Form: FunctionComponent<FormProps> = ({ form }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userName, setUserName] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handleSubmit = () => {
    if (form === 'login') {
      // Alert.alert('Login', `Logging in with phone number: ${phoneNumber}`);
      navigation.navigate('Home')
    } else if (form === 'register') {
      navigation.navigate('Home')
      // Alert.alert('Register', `Registering with phone number: ${phoneNumber}`);
    }
    setPhoneNumber('');
  };

  return (
    <View style={styles.container}>
      {form === 'register' && (<TextInput
        placeholder="Username"
        placeholderTextColor="white"
        onChangeText={setUserName}
        value={userName}
        style={styles.input}
        underlineColorAndroid="white"
      />)
      }
      <TextInput
        placeholder="Phone Number"
        placeholderTextColor="white"
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        keyboardType="numeric"
        maxLength={10}
        underlineColorAndroid="white"
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>{form === 'login' ? 'Login' : 'Register'}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Form;
