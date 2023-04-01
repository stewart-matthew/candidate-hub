import { Component } from 'react';
import { Text, View, Pressable } from 'react-native';
import * as Colors from '../styles/colors';
import { styles } from '../styles/styles';

export default class Button extends Component {
    render() {
        const { title = '', onPress } = this.props;
        return (
            <View>
                <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? Colors.ON_PRESS_COLOR : Colors.BUTTON_COLOR }, styles.button ]} onPress={onPress}>
                    <Text style={styles.buttonText}>{title}</Text>
                </Pressable>
            </View>
        )
    }
}