import { Text, View, StyleSheet, ScrollView, TextInput, React, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import Button from '../components/Button';
import InputField from '../components/InputField';
import { styles } from '../styles/styles';

const CandidateFormScreen = ({ route, navigation }) => {
  const uri = route.params;
 // const [text, onChangeText] = React.useState('This is actual text');

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      disabled
      keyboardVerticalOffset={135}
      >
      <ScrollView style={styles.ScrollView}>     
      <View style = {styles.inputField}>     
            <Text style = {styles.inputFieldText}> {"First Name"}{"\n"}</Text>
            <TextInput style={styles.textInput}  inputMode={"text"}/>
          </View>
          <View style = {styles.inputField}>     
            <Text style = {styles.inputFieldText}> {"Last Name"}{"\n"}</Text>
            <TextInput style={styles.textInput}  inputMode={"text"}/>
          </View> 
          <View style = {styles.inputField}>     
            <Text style = {styles.inputFieldText}> {"Email Adress"}{"\n"}</Text>
            <TextInput style={styles.textInput}  inputMode={"email"}/>
          </View> 
          <View style = {styles.inputField}>     
            <Text style = {styles.inputFieldText}> {"Major"}{"\n"}</Text>
            <TextInput style={styles.textInput}  inputMode={"text"}/>
          </View> 
          <View style = {styles.inputField}>     
            <Text style = {styles.inputFieldText}> {"GPA"}{"\n"}</Text>
            <TextInput style={styles.textInput}  inputMode={"decimal"}/>
          </View> 
          <View style = {styles.inputField}>     
            <Text style = {styles.inputFieldText}> {"Graduation Date"}{"\n"}</Text>
            <TextInput style={styles.textInput}  inputMode={"text"}/>
          </View> 
          <View style = {styles.inputField}>     
            <Text style = {styles.inputFieldText}> {"Position Type"}{"\n"}</Text>
            <TextInput style={styles.textInput}  inputMode={"text"}/>
          </View>   
          <View style = {styles.inputField}>     
            <Text style = {styles.inputFieldText}> {"Sponsership Needed"}{"\n"}</Text>
            <TextInput style={styles.textInput}  inputMode={"text"}/>
            </View>
          <Button 
            onPress={() => { 
              // get values from input fields and add to data object
              let data = {
                
              }
              data.resumeURI = uri;
              // add data to api request
              // if success go to confirmation screen:
              navigation.navigate('ConfirmAddCandidate') 
            }}
            title={"Submit"}
          />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default CandidateFormScreen;