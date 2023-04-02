import { Image, View } from 'react-native';
import Button from '../components/Button';

const ViewCandidateScreen = ({ route, navigation }) => {
  const userData = route.params;
  console.log(userData)
  return (
    <View>
      <Button
          onPress={() => { /*navigation.navigate('UploadResume')*/ }}
          title={userData.firstName}
        />
    </View>
  )
}

export default ViewCandidateScreen;