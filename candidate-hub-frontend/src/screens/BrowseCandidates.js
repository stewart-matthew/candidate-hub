import { Text, View } from 'react-native';
import Button from '../components/Button';

const BrowseCandidatesScreen = ({ navigation }) => {
  return (
    <View>
      <Button
          onPress={() => { alert('balls');/*navigation.navigate('AddCandidate')*/ }}
          title={"Get those candidates"}
        />
    </View>
  )
}

export default BrowseCandidatesScreen;