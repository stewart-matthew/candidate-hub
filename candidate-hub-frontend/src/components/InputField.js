import { Component, React } from 'react';
import { Text, View, Pressable } from 'react-native';
import * as Colors from '../styles/colors';
import { styles } from '../styles/styles';
import TextInputExample from './TextInput';

export default class InputField extends Component {
  render() {
      const { input = '', textType = '', onChangeText} = this.props;
            return (
                <View style = {styles.inputField}>     
                    <Text style = {styles.inputFieldText}> {input}{"\n"}</Text>
                    <TextInputExample test = {textType} onChangeText = {onChangeText}></TextInputExample>
                </View>
            )
          }
};