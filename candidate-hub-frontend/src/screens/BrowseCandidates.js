import { ScrollView, Text, View } from 'react-native';
import CandidateBox from '../components/CandidateBox';
import Button from '../components/Button';
import axios from 'axios'
import { baseURL } from '../config/config/';
import { useState, useEffect } from 'react';
import { styles } from '../styles/styles';

const BrowseCandidatesScreen = ({ route, navigation }) => {
  route.params = route.params || {};
  const { nameSearch, majorSearch, degreeSearch, gpaSearch, positionTypeSearch } = route.params;

  const [candidates, setCandidates] = useState([]);

  var i = 0;
  navigation.addListener('focus', () => {
    if (i === 0) return i++;
    axios
      .get(baseURL)
      .then((res) => {
        setCandidates(res.data);
      })
      .catch((err) => {
        console.log('Error from BrowseCandidates' + err);
      });
  })
  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        setCandidates(res.data);
      })
      .catch((err) => {
        console.log('Error from BrowseCandidates' + err);
      });
  }, []);

  const candidateList =
    candidates.length === 0
      ? <Text>There are no candidates!</Text>
      : candidates.filter((candidate) => {
        if (nameSearch && nameSearch.length > 0 && !(candidate.firstName.toLowerCase() + " " + candidate.lastName.toLowerCase()).includes(nameSearch.trim().toLowerCase())) return false;
        if (majorSearch && majorSearch.length > 0 && !candidate.major.toLowerCase().includes(majorSearch.trim().toLowerCase())) return false;
        if (degreeSearch && degreeSearch.length > 0) {
          let values = [];
          if (degreeSearch.includes('A')) values.push('associate', 'aa', 'as');
          if (degreeSearch.includes('B')) values.push('bachelor', 'ba', 'bs');
          if (degreeSearch.includes('M')) values.push('master', 'ma', 'mfa', 'mba', 'ms');
          if (!values.includes(candidate.degree.toLowerCase())) return false;
        }
        if (gpaSearch && gpaSearch > 0 && candidate.gpa < gpaSearch) return false;
        if (positionTypeSearch && positionTypeSearch.length > 0) {
          if (positionTypeSearch === 'I' && candidate.positionType !== 'Internship') return false;
          if (positionTypeSearch === 'F' && candidate.positionType !== 'Full Time') return false;
        }
        return true;
      }).sort((a, b) => {
        if (a.starred === b.starred) {
          return a.lastName < b.lastName ? -1 : 1;
        }
        return b.starred - a.starred;
      }).map((candidate) => <CandidateBox onPress={() => { navigation.navigate('ViewCandidate', candidate) }} firstName={candidate.firstName} lastName={candidate.lastName}
        major={candidate.major} degree={candidate.degree} starred={candidate.starred} key={candidate._id}/>);

  return (
    <ScrollView style={styles.ScrollView}>
      <Button title="Set Filters" onPress={() => navigation.navigate('ApplyFilters', {nameSearch, majorSearch, degreeSearch, gpaSearch, positionTypeSearch})}/>
      {candidateList}
    </ScrollView>
  );
}

export default BrowseCandidatesScreen;