import { Text, View } from 'react-native';
import Button from '../components/Button';
import TextInput from '../components/TextInput';

const CandidateFormScreen = ({ navigation }) => {
  return (
    <View>
      <Button
          onPress={() => { alert('balls');/*navigation.navigate('AddCandidate')*/ }}
          title={"This is a button"}
        />
        <TextInput></TextInput>
    </View>
  )
}

export default CandidateFormScreen;