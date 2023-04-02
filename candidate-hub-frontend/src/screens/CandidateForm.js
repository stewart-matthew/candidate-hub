import { Text, View, StyleSheet, ScrollView, StatusBar } from 'react-native';
import Button from '../components/Button';
import InputField from '../components/InputField';
import { styles } from '../styles/styles';

const CandidateFormScreen = ({ navigation }) => {
  return (
    <View>
      <ScrollView style={styles.ScrollView}>     
          <InputField input = {"First Name"} textType = {"text"}
          />  
          <InputField input = {"Last Name"} textType = {"text"}
          />  
          <InputField input = {"Email Address"} textType = {"email"}
          />  
          <InputField input = {"Major"} textType = {"text"}
          />  
          <InputField input = {"GPA"} textType = {"decimal"}
          />  
          <InputField input = {"Graduation Date"} textType = {"text"}
          />  
          <InputField input = {"Position Type"} textType = {"text"}
          />  
          <InputField input = {"Sponsership Needed"} textType = {"text"}
          />  
          <InputField input = {"Are you gay?"} textType = {"text"}
          />  
      </ScrollView>
    </View>
  )
}

export default CandidateFormScreen;