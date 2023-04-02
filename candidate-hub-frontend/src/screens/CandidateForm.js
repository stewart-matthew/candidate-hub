import { Pressable, Text, View, ScrollView, TextInput, React, KeyboardAvoidingView, Platform } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements'
import { CheckBox } from 'react-native-elements'
import Button from '../components/Button';
import { styles } from '../styles/styles';
import { useState } from 'react';

const CandidateFormScreen = ({ route, navigation }) => {
  const uri = route.params;

  const height = useHeaderHeight()
  const isDate = (date) => {
    return date.match(/^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/)
  }

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [major, setMajor] = useState('');
  const [degree, setDegree] = useState('');
  const [gpa, setGPA] = useState('');
  const [graduationDate, setGraduationDate] = useState('');
  const [positionType, setPositionType] = useState('');
  const [sponsorshipNeeded, setSponsorshipNeeded] = useState(false);

  return (
    <KeyboardAvoidingView 
      behavior={(Platform.OS === 'ios') ? 'padding' : null}
      enabled
      keyboardVerticalOffset={height}
      
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
            <Text style = {styles.inputFieldText}> {"Email Address"}{"\n"}</Text>
            <TextInput style={styles.textInput}  inputMode={"email"} onChangeText={(txt) => setEmail(txt)}/>
          </View> 
          <View style = {styles.inputField}>     
            <Text style = {styles.inputFieldText}> {"Major"}{"\n"}</Text>
            <TextInput style={styles.textInput}  inputMode={"text"} onChangeText={(txt) => setMajor(txt)}/>
          </View>
          <View style = {styles.inputField}>     
            <Text style = {styles.inputFieldText}> {"Degree Type (BS, MS, etc.)"}{"\n"}</Text>
            <TextInput style={styles.textInput}  inputMode={"text"} onChangeText={(txt) => setDegree(txt)}/>
          </View> 
          <View style = {styles.inputField}>     
            <Text style = {styles.inputFieldText}> {"GPA"}{"\n"}</Text>
            <TextInput style={styles.textInput}  inputMode={"decimal"}  onChangeText={(txt) => setGPA(txt)}/>
          </View> 
          <View style = {styles.inputField}>     
            <Text style = {styles.inputFieldText}> {"Graduation Date (mm/dd/yyyy)"}{"\n"}</Text>
            <TextInput style={styles.textInput}  inputMode={"text"} onChangeText={(txt) => setGraduationDate(txt)}/>
          </View> 
          <View style = {styles.inputField}>     
            <Text style = {styles.inputFieldText}> {"Position Type"}{"\n"}</Text>
            <View style={{ flexDirection:"row", minWidth: "100%"}}>
            <Pressable style={() => [positionType === 'Internship' ? styles.buttonSelected : styles.buttonUnselected ]} onPress={() => setPositionType('Internship')}>
                    <Text style={ [positionType === 'Internship' ? styles.buttonText : styles.buttonTextUnselected ]} >Internship</Text>
                </Pressable>
                <Pressable style={() => [positionType === 'Full Time' ? styles.buttonSelected : styles.buttonUnselected ]} onPress={() => setPositionType('Full Time')}>
                    <Text style={ [positionType === 'Full Time' ? styles.buttonText : styles.buttonTextUnselected ]} >Full Time</Text>
                </Pressable>
            </View>
          </View>   
          <View style = {styles.inputField}>
            <CheckBox
              title="Sponsorship Needed"
              textStyle={styles.sponsorship}
              checked={sponsorshipNeeded}
              onPress={() => setSponsorshipNeeded(!sponsorshipNeeded)}
            />
            </View>
          <Button 
            onPress={() => { 
              //console.log(positionType)
              if (!firstName) return alert('The "First Name" field is required.')
              if (!lastName) return alert('The "Last Name" field is required.')
              if (!email) return alert('The "Email Address" field is required.')
              if (!major) return alert('The "Major" field is required.')
              if (!degree) return alert('The "Degree Type" field is required.')
              if (!gpa) return alert('The "GPA" field is required.')
              if (!graduationDate) return alert('The "Graduation Date" field is required.')
              if (!positionType) return alert('The "Position Type" field is required.')
              let data = { firstName, lastName, email, major, degree, gpa, graduationDate, positionType, sponsorshipNeeded };
              data.gpa = Number(gpa);
              if (data.gpa > 5 || data.gpa < 0) return alert('Invalid GPA')
              if (!isDate(data.graduationDate)) return alert('Invalid Date')
              data.uploadDate = new Date().toString();
              data.event = 'UA Innovate 2023';
              data.starred = false;
              //console.log(data)
              if (uri) data.resume = uri;
              navigation.navigate('ConfirmAddCandidate', data) 
            }}
            title={"Submit"}
          />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default CandidateFormScreen;