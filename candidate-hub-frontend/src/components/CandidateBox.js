import { Component } from 'react';
import { Text, View, Pressable } from 'react-native';
import * as Colors from '../styles/colors';
import { styles } from '../styles/styles';
import Ionicons from '@expo/vector-icons/Ionicons';

export default class CandidateBox extends Component {
    render() {
        const { firstName = '', lastName = '', major = '', degree = '', starred = false, onPress } = this.props;
        return (
            <View>
                <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? Colors.ON_PRESS_COLOR : Colors.BUTTON_COLOR }, styles.candidateBox ]} onPress={onPress}>
                    <Text style={styles.candidateBoxText}>{firstName + " " + lastName}</Text>
                    <Text style={styles.candidateBoxText}>{degree + " " + major}</Text>
                    <Ionicons name={starred ? 'ios-star' : 'ios-star-outline'} size={40}/>
                </Pressable>
            </View>
        )
    }
}