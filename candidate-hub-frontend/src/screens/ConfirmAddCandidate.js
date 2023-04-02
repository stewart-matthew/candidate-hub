import { Image, View } from 'react-native';
import { useEffect } from 'react';
import axios from 'axios';
import { baseURL } from '../config/config/';
import fetch from 'node-fetch'
import * as FileSystem from 'expo-file-system'

import Button from '../components/Button';

const ConfirmAddCandidateScreen = ({ route, navigation }) => {
  const data = route.params;

  useEffect(() => {
    if (data.resume) {
      console.log("data.resume is " + data.resume);
      FileSystem.readAsStringAsync(data.resume, { encoding: 'base64' }).then(output => {
        data.resume = output;
        //console.log(data.sponsorshipNeeded)
          axios.post(baseURL, data)
          .then((res) => {
            console.log('success?')
          })
          .catch((err) => {
            console.log('Error from ConfirmAddCandidate with resume: ' + err);
          });
      }).catch((err) => {
        console.log('Error from FileSystem: ' + err.replace(/'.+?'/g))
      });
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