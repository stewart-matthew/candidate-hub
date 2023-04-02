import { ActivityIndicator, Text, View } from 'react-native';
import Button from '../components/Button';
import { baseURL } from '../config/config/';
import { useState, useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';

const BrowseCandidatesScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getCandidates = async () => {
    try {
      const response = await fetch("http://10.122.109.151:8082/api/candidates");
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCandidates();
  }, []);

  console.log(data);
  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={candidate => candidate._id}
          renderItem={(candidate) => (
            <Button title={candidate.firstName}/>
          )}
        />
      )}
    </View>
  );
};

export default BrowseCandidatesScreen;