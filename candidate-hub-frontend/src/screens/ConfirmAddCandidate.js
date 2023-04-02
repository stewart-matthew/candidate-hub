import { Image, View } from 'react-native';
import { useEffect } from 'react';
import axios from 'axios';
import { baseURL } from '../config/config/';

import Button from '../components/Button';

const ConfirmAddCandidateScreen = ({ route, navigation }) => {
  const data = route.params;

  useEffect(() => {
    axios
      .post(baseURL, data)
      .then((res) => {
      })
      .catch((err) => {
        console.log('Error from ConfirmAddCandidate' + err);
      });
  }, []);


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