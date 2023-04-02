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
        borderColor: '#d4dcfc',
        borderRadius: '8px',
        marginTop: 10,
        marginHorizontal: 7.5,
        padding: 15,
        minWidth: '90%',
    },
    candidateBoxText: {
        fontSize: 20,
        fontWeight: '400',
        color: Colors.HEADER_COLOR
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
    buttonTextUnselected: {
        fontSize: 25,
        color: '#000000'
    },
    container: {
        flex: 1
    },
    star: {
        color: Colors.HEADER_COLOR,
        alignSelf: 'flex-end',
        bottom: 20,
        right: 20,
        position: 'absolute',
    },
    star2: {
        color: Colors.HEADER_COLOR,
    },
    buttonSelected: {
        backgroundColor: '#3b5cc8',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderColor: '#4f69ce',
        borderRadius: '8px',
        marginHorizontal: 5,
        padding: 5,
        //minWidth: '30%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonUnselected: {
        backgroundColor: '#f5f6fa',
        color: '#000000',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderColor: '#d1d1d1',
        borderRadius: '8px',
        marginHorizontal: 5,
        padding: 5,
        //minWidth: '0%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
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
    sponsorship: {
        color: '#000000',
        fontWeight: '400',
        fontSize: 20,
        flex: 1,
        textAlign: 'right'

    },
      });

export { styles };