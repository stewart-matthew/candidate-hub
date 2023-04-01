import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import * as Colors from '../styles/colors';

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter your social security number"
        placeholderTextColor={Colors.BUTTON_COLOR}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;