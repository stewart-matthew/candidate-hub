import { Text, View } from 'react-native';
import Button from '../components/Button';

const UploadResumeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
          onPress={() => { alert('balls');/*navigation.navigate('AddCandidate')*/ }}
          title={"DO IT"}
        />
    </View>
  )
}

export default UploadResumeScreen;