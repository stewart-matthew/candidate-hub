import { Component, React } from 'react';
import { Text, View, Pressable } from 'react-native';
import * as Colors from '../styles/colors';
import { styles } from '../styles/styles';
import TextImputExample from './TextInput';

export default class InputField extends Component {
  render() {
      const { input = '', textType = ''} = this.props;
            return (
                <View style = {styles.inputField}>     
                    <Text style = {styles.inputFieldText}> {input}{"\n"}</Text>
                    <TextImputExample test = {textType}></TextImputExample>
                </View>
            )
          }
};