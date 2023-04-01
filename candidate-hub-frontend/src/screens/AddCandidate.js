import { Text, View } from 'react-native';
import Button from '../components/Button';
import TextInput from '../components/TextInput';

const AddCandidateScreen = ({ navigation }) => {
  return (
    <View>
      <Button
          onPress={() => { navigation.navigate('UploadResume') }}
          title={"Upload Resume"}
        />
      <Button
          onPress={() => { navigation.navigate('CandidateForm') }}
          title={"Skip"}
        />
    </View>
  )
}

export default AddCandidateScreen;