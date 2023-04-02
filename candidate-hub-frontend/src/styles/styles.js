import { StyleSheet } from 'react-native';
import * as Colors from './colors';

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.HEADER_COLOR,
        paddingTop: '5%'
    },
    image: {
        width: 180,
        alignSelf: 'center'
    },
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
    candidateBox: {
        borderStyle: 'solid',
        borderWidth: '2px',
        borderColor: '#fff',
        borderRadius: '8px',
        marginTop: 10,
        padding: 10,
        minWidth: '90%',
    },
    candidateBoxText: {
        fontSize: 16,
        color: '#fff'
    },
    inputField: {
        backgroundColor: Colors.InputField,
        borderStyle: 'solid',
        borderWidth: '2px',
        borderColor: '#d4dcfc',
        borderRadius: '8px',
        margin: 10,
        padding: 15,
        paddingVertical: 20,
        minWidth: '90%',
    },
    inputFieldText: {
        fontSize: 20,
        textAlign: 'left',
        margin: 0
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