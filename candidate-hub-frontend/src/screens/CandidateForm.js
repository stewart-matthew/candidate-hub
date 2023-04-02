import { Text, View, StyleSheet, ScrollView, StatusBar } from 'react-native';
import Button from '../components/Button';
import InputField from '../components/InputField';
import { styles } from '../styles/styles';

const CandidateFormScreen = ({ navigation }) => {
  return (
    <View>
      <ScrollView style={styles.ScrollView}>     
          <InputField input = {"First Name"}
          />  
          <InputField input = {"Last Name"}
          />  
          <InputField input = {"Email Address"}
          />  
          <InputField input = {"Major"}
          />  
          <InputField input = {"GPA"}
          />  
          <InputField input = {"Graduation Date"}
          />  
          <InputField input = {"Position Type"}
          />  
          <InputField input = {"Sponsership Needed"}
          />  
          <InputField input = {"Are you gay?"}
          />  
      </ScrollView>
    </View>
  )
}

export default CandidateFormScreen;