import { Image, Pressable, View, Text, SafeAreaView, FlatList, ImageBase } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Button from '../components/Button';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { baseURL } from '../config/config/';
import {styles} from '../styles/styles';
import { ScrollView } from 'react-native';

const ViewCandidateScreen = ({ route, navigation }) => {
  const userData = route.params;
  const [isStarred, setIsStarred] = useState(userData.starred)
  const [resume, setResume] = useState('')

  useEffect(() => {
    axios
      .get(baseURL + "/" + userData._id)
      .then((res) => {
        setResume(res.data.resume);
      })
      .catch((err) => {
        console.log('Error from BrowseCandidates' + err);
      });
  }, []);

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
    
    <SafeAreaView>
       <View style={{flexDirection: 'row', textAlign: 'center', padding: 35, paddingTop: 20}}>
      <Text style={{paddingLeft: 15, paddingTop: 15, fontSize: 35, fontWeight: 'bold'}}>Information</Text>
      </View>
      <Pressable onPress={this.toggleButtonState}>
      <View style={{
        alignSelf: 'flex-end',position: 'absolute', marginTop: -85, right: 45}}>
        <Ionicons style={styles.star2}name={isStarred ? 'ios-star' : 'ios-star-outline'} size={50} />
        </View>
      </Pressable>
      <ScrollView>
        <View style={{ padding: 10, margin: 10, marginLeft: 25, marginBottom: -2, flexDirection: 'row'}}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{'First Name'}</Text><Text style={{fontSize: 18}}>{": " + userData.firstName}</Text>
        </View>        
        <View style={{ padding: 10, margin: 10, marginLeft: 25, marginBottom: -2, flexDirection: 'row'}}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{'Last Name'}</Text><Text style={{fontSize: 18}}>{": " + userData.lastName}</Text>
        </View>        
        <View style={{ padding: 10, margin: 10, marginLeft: 25, marginBottom: -2, flexDirection: 'row'}}> 
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{'Email'}</Text><Text style={{fontSize: 18}}>{": " + userData.email}</Text>
        </View>        
        <View style={{ padding: 10, margin: 10, marginLeft: 25, marginBottom: -2, flexDirection: 'row'}}> 
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{'Major'}</Text><Text style={{fontSize: 18}}>{": " + userData.major}</Text>
        </View>        
        <View style={{ padding: 10, margin: 10, marginLeft: 25, marginBottom: -2, flexDirection: 'row'}}> 
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{'Degree'}</Text><Text style={{fontSize: 18}}>{": " + userData.degree}</Text>
        </View>        
        <View style={{ padding: 10, margin: 10, marginLeft: 25, marginBottom: -2, flexDirection: 'row'}}> 
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{'GPA'}</Text><Text style={{fontSize: 18}}>{": " + userData.gpa}</Text>
        </View>        
        <View style={{ padding: 10, margin: 10, marginLeft: 25, marginBottom: -2, flexDirection: 'row'}}> 
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{'Graduation Date'}</Text><Text style={{fontSize: 18}}>{": " + processGraduationDate(userData.graduationDate)}</Text>
        </View>        
        <View style={{ padding: 10, margin: 10, marginLeft: 25, marginBottom: -2, flexDirection: 'row'}}> 
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{'Position Type'}</Text><Text style={{fontSize: 18}}>{": " + userData.positionType}</Text>
        </View>        
        <View style={{ padding: 10, margin: 10, marginLeft: 25, marginBottom: -2, flexDirection: 'row'}}> 
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{'Sponsorship Needed'}</Text><Text style={{fontSize: 18}}>{": " + (userData.sponsorshipNeeded ? 'Yes' : 'No')}</Text>
        </View>        
        <View style={{ padding: 10, margin: 10, marginLeft: 25, marginBottom: -2, flexDirection: 'row'}}> 
        </View>
      <Image style={{
        width: 415,
        height: 615,
        marginBottom: 100
       }}
       resizeMode={"contain"} source={{uri: 'data:image/png;base64,' + resume}}></Image>
       </ScrollView>
      
    </SafeAreaView>
  )
}

export default ViewCandidateScreen;