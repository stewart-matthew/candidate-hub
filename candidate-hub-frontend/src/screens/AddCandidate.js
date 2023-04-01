import { Text, View } from 'react-native';
import Button from '../components/Button';
import TextInput from '../components/TextInput';

const AddCandidateScreen = ({ navigation }) => {
  return (
    <View>
      <Button
          onPress={() => { alert('balls');/*navigation.navigate('AddCandidate')*/ }}
          title={"Upload Resume"}
        />
      <TextInput     
      />
    </View>
  )
}

export default AddCandidateScreen;