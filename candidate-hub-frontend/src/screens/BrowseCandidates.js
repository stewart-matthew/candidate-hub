import { ActivityIndicator, Text, View } from 'react-native';
import CandidateBox from '../components/CandidateBox';
import Button from '../components/Button';
import axios from 'axios'
import { baseURL } from '../config/config/';
import { useState, useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';

const BrowseCandidatesScreen = ({ navigation }) => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        setCandidates(res.data);
      })
      .catch((err) => {
        console.log('Error from BrowseCandidates');
      });
  }, []);

  const candidateList =
    candidates.length === 0
      ? <Text>There are no candidates!</Text>
      : candidates.map((candidate) => <CandidateBox onPress={() => { navigation.navigate('ViewCandidate', candidate) }} firstName={candidate.firstName} lastName={candidate.lastName}
        major={candidate.major} degree={candidate.degree} starred={candidate.starred} key={candidate._id}/>);

  return (
    <View>
      {candidateList}
    </View>
  );
}

export default BrowseCandidatesScreen;