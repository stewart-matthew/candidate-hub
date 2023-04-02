import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import * as Colors from '../styles/colors';

const TextInputExample = (props) => {
  const [text, setText ] = React.useState('This is actual text');
  const {onChangeText} = props;
 
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        // value={text}
        inputMode={props.test}
      />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  input: {
    borderColor: Colors.InputField,
    borderBottomColor: '#d1d1d1',
    borderBottomWidth: 2,
    height: 40,
    minWidth: '100%',
    margin: 5,
    borderWidth: 1,
    fontSize: 15,
    padding: 0
  },
});


export default TextInputExample;