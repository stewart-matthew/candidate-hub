import { Text, View } from 'react-native';
import Button from '../components/Button';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
          onPress={() => { navigation.navigate('AddCandidate') }}
          title={"Add Candidate"}
        />
      <Button
          onPress={() => { navigation.navigate('BrowseCandidates') }}
          title={"Browse Candidates"}
        />
    </View>
  )
}

export default HomeScreen;