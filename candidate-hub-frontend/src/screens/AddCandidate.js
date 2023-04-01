import { Text, View } from 'react-native';
import Button from '../components/Button';

const AddCandidateScreen = ({ navigation }) => {
  return (
    <View>
      <Button
          onPress={() => { alert('balls');/*navigation.navigate('AddCandidate')*/ }}
          title={"Upload Resume"}
        />
    </View>
  )
}

export default AddCandidateScreen;