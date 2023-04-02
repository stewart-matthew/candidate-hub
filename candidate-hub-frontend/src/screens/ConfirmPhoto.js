import { Image, View } from 'react-native';
import Button from '../components/Button';

const ConfirmPhotoScreen = ({ route, navigation }) => {
  const uri = route.params;
  return (
    <View>
      <View style={{padding: '2%'}}><Image
       style={{
        width: 400,
        height: 500,
        alignContent: 'center'
       }}
       resizeMode={"contain"}
       source={{
        uri: uri
       }}
      /></View>
      <Button
          onPress={() => { navigation.navigate('UploadResume') }}
          title={"Retake"}
        />
      <Button
          onPress={() => { navigation.navigate('CandidateForm', uri) }}
          title={"Save"}
        />
    </View>
  )
}

export default ConfirmPhotoScreen;