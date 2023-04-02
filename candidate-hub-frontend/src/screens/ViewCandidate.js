import { Image, Pressable, View, Text, SafeAreaView, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Button from '../components/Button';
import { useState } from 'react';

const ViewCandidateScreen = ({ route, navigation }) => {
  const userData = route.params;
  const [isStarred, setIsStarred] = useState(userData.starred)
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
      <Pressable onPress={() => {
        // api call and then do this:
        setIsStarred(!isStarred)
      }}>
        <Ionicons name={isStarred ? 'ios-star' : 'ios-star-outline'} size="40" />
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