import { Image, View } from 'react-native';
import { useEffect } from 'react';
import axios from 'axios';
import { baseURL } from '../config/config/';
import fetch from 'node-fetch'

import Button from '../components/Button';

const ConfirmAddCandidateScreen = ({ route, navigation }) => {
  const data = route.params;

  useEffect(() => {
    if (data.resume) {
      fetch(data.resume)
      .then((response) => response.blob()
        .then((outputBlob) => {
          data.resume = outputBlob;
          axios.post(baseURL, data)
          .then((res) => {
          })
          .catch((err) => {
            console.log('Error from ConfirmAddCandidate' + err);
          });
        }))
        .catch((e) => console.log(e))
    }

    else {
      axios.post(baseURL, data)
      .then((res) => {
      })
      .catch((err) => {
        console.log('Error from ConfirmAddCandidate' + err);
      });
    }
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