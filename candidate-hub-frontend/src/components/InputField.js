import { Component, React } from 'react';
import { Text, View, Pressable } from 'react-native';
import * as Colors from '../styles/colors';
import { styles } from '../styles/styles';
import TextInput from './TextInput';

export default class InputField extends Component {
  render() {
      const { input = ''} = this.props;
            return (
                <View style = {styles.inputField}>     
                    <Text style = {styles.inputFieldText}> {input }{"\n"}</Text>
                    <TextInput></TextInput>
                </View>
            )
          }
};