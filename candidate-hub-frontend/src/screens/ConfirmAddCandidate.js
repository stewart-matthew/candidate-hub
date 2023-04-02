import { Image, View } from 'react-native';
import Button from '../components/Button';

const ConfirmAddCandidateScreen = ({ route, navigation }) => {
  const data = route.params;
  return (
    <View>
      <Button
          onPress={() => { navigation.navigate('Home') }}
          title={"It worked now lets go home"}
        />
    </View>
  )
}

export default ConfirmAddCandidateScreen;