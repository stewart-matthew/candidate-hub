import { Text, View, StyleSheet, ScrollView, StatusBar } from 'react-native';
import Button from '../components/Button';
import InputField from '../components/InputField';
import { styles } from '../styles/styles';

const CandidateFormScreen = ({ route, navigation }) => {
  const uri = route.params;
  return (
    <View>
      <ScrollView style={styles.ScrollView}>     
          <InputField input = {"First Name"} textType = {"text"}
          />  
          <InputField input = {"Last Name"} textType = {"text"}
          />  
          <InputField input = {"Email Address"} textType = {"email"}
          />  
          <InputField input = {"Degree"} textType = {"text"}
          />  
          <InputField input = {"Major"} textType = {"text"}
          />  
          <InputField input = {"GPA"} textType = {"decimal"}
          />  
          <InputField input = {"Graduation Date"} textType = {"text"}
          />  
          <InputField input = {"Position Type"} textType = {"text"}
          />  
          <InputField input = {"Sponsorship Needed"} textType = {"text"}
          />  
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
    </View>
  )
}

export default CandidateFormScreen;