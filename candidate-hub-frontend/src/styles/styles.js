import { StyleSheet } from 'react-native';
import * as Colors from './colors';

const styles = StyleSheet.create({
    button: {
        borderStyle: 'solid',
        borderWidth: '2px',
        borderColor: '#fff',
        borderRadius: '8px',
        margin: 10,
        padding: 30,
        minWidth: '90%',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 25,
        color: '#fff'
    },
    container: {
        flex: 1
    }
});

export { styles };