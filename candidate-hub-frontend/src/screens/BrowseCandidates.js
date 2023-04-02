import { ActivityIndicator, Text, View } from 'react-native';
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
      ? 'there is no candidate!'
      : candidates.map((candidate) => <Button title={candidate.firstName} key={candidate._id}/>);

  return (
    <View>
      <Text>{candidateList}</Text>
    </View>
  );
}

export default BrowseCandidatesScreen;