import { Text, View, StyleSheet, ScrollView, TextInput, React, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import Button from '../components/Button';
import InputField from '../components/InputField';
import { styles } from '../styles/styles';
import { useState } from 'react';

const CandidateFormScreen = ({ route, navigation }) => {
  const uri = route.params;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [major, setMajor] = useState('');
  const [gpa, setGPA] = useState('');
  const [graduationDate, setGraduationDate] = useState('');
  const [positionType, setPositionType] = useState('');
  const [sponsorshipNeeded, setSponsorshipNeeded] = useState('');

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      disabled
      keyboardVerticalOffset={135}
      >
      <ScrollView style={styles.ScrollView}>     
      <View style = {styles.inputField}>     
            <Text style = {styles.inputFieldText}> {"First Name"}{"\n"}</Text>
            <TextInput style={styles.textInput}  inputMode={"text"} onChangeText={(txt) => setFirstName(txt)}/>
          </View>
          <View style = {styles.inputField}>     
            <Text style = {styles.inputFieldText}> {"Last Name"}{"\n"}</Text>
            <TextInput style={styles.textInput}  inputMode={"text"} onChangeText={(txt) => setLastName(txt)}/>
          </View> 
          <View style = {styles.inputField}>     
            <Text style = {styles.inputFieldText}> {"Email Adress"}{"\n"}</Text>
            <TextInput style={styles.textInput}  inputMode={"email"} onChangeText={(txt) => setEmail(txt)}/>
          </View> 
          <View style = {styles.inputField}>     
            <Text style = {styles.inputFieldText}> {"Major"}{"\n"}</Text>
            <TextInput style={styles.textInput}  inputMode={"text"} onChangeText={(txt) => setMajor(txt)}/>
          </View> 
          <View style = {styles.inputField}>     
            <Text style = {styles.inputFieldText}> {"GPA"}{"\n"}</Text>
            <TextInput style={styles.textInput}  inputMode={"decimal"}  onChangeText={(txt) => setGPA(txt)}/>
          </View> 
          <View style = {styles.inputField}>     
            <Text style = {styles.inputFieldText}> {"Graduation Date"}{"\n"}</Text>
            <TextInput style={styles.textInput}  inputMode={"text"} onChangeText={(txt) => setGraduationDate(txt)}/>
          </View> 
          <View style = {styles.inputField}>     
            <Text style = {styles.inputFieldText}> {"Position Type"}{"\n"}</Text>
            <TextInput style={styles.textInput}  inputMode={"text"} onChangeText={(txt) => setPositionType(txt)}/>
          </View>   
          <View style = {styles.inputField}>     
            <Text style = {styles.inputFieldText}> {"Sponsership Needed"}{"\n"}</Text>
            <TextInput style={styles.textInput}  inputMode={"text"} onChangeText={(txt) => setSponsorshipNeeded(txt)}/>
            </View>
          <Button 
            onPress={() => { 
              if (!firstName) return alert('The "First Name" field is required.')
              if (!lastName) return alert('The "Last Name" field is required.')
              if (!email) return alert('The "Email Address" field is required.')
              if (!major) return alert('The "Major" field is required.')
              if (!gpa) return alert('The "GPA" field is required.')
              if (!graduationDate) return alert('The "Graduation Date" field is required.')
              if (!positionType) return alert('The "Position Type" field is required.')
              let data = { firstName, lastName, email, major, gpa, graduationDate, positionType, sponsorshipNeeded };
              data.gpa = Number(gpa);
              if (sponsorshipNeeded) {
                data.sponsorshipNeeded = true;
              } else {
                data.sponsorshipNeeded = false;
              }
              data.uploadDate = new Date().toString();
              data.event = 'UA Innovate 2023';
              if (uri) data.resumeURI = uri;
              console.log(data)
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