import { Image, Pressable, View, Text, SafeAreaView, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Button from '../components/Button';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { baseURL } from '../config/config/';

const ViewCandidateScreen = ({ route, navigation }) => {
  const userData = route.params;
  const [isStarred, setIsStarred] = useState(userData.starred)
  // const [updateStar, setUpdateStar] = useState(false);

  // useEffect(() => {
  //   axios
  //     .put(baseURL + "/" + userData._id, {
  //       starred: !userData.starred //
  //     })
  //     .then((res) => {
  //       setIsStarred(!isStarred)
  //     })
  //     .catch((err) => {
  //       console.log('Error from ViewCandidate');
  //     });
  // }, [updateStar]);

  toggleButtonState = () => {
    setIsStarred(!isStarred)
    axios
      .put(baseURL + "/" + userData._id, {
        starred: !userData.starred
      })
      .then((res) => {
      })
      .catch((err) => {
        console.log('Error from ViewCandidate');
    });
  };

  const processGraduationDate = (d) => {
    if (d.match(/^\d{4}-\d{1,2}-.+$/)) {
        const split = d.split('-');
        return split[1] + '/' + split[0];
    }
    return d;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{flexDirection: 'row', textAlign: 'center', padding: 5}}>
      <Pressable onPress={this.toggleButtonState}>
        <Ionicons name={isStarred ? 'ios-star' : 'ios-star-outline'} size={50} />
      </Pressable>
      <Text style={{paddingLeft: 5, paddingTop: 5, fontSize: 25, fontWeight: 'bold'}}>Information</Text>
      </View>
      <View style={{ padding: 20 }}>
        <FlatList
          data={[
            { key: 'First Name', value: userData.firstName },
            { key: 'Last Name', value: userData.lastName },
            { key: 'Email', value: userData.email },
            { key: 'Major', value: userData.major },
            { key: 'Degree', value: userData.degree },
            { key: 'GPA', value: userData.gpa },
            { key: 'Graduation Date', value: processGraduationDate(userData.graduationDate) },
            { key: 'Position Type', value: userData.positionType },
            { key: 'Sponorship Needed', value: userData.sponsorshipNeeded ? 'Yes' : 'No' },
          ]}
          renderItem={({ item }) => {
            return (
              <View style={{ marginBottom: 10, flexDirection: 'row', flexShrink: 1 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.key}</Text><Text style={{fontSize: 18}}>{": " + item.value}</Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default ViewCandidateScreen;