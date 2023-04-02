import { ScrollView, Text, View, Pressable } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Button from '../components/Button';
import { useState, useEffect } from 'react';
import { styles } from '../styles/styles';

const ApplyFiltersScreen = ({ route, navigation }) => {
  const { nameSearch, majorSearch, degreeSearch, gpaSearch, graduationDateSearch, positionTypeSearch } = route.params;
  const [_nameSearch, setNameSearch] = useState(nameSearch || '')
  const [_majorSearch, setMajorSearch] = useState(majorSearch || '')
  const [_degreeSearch, setDegreeSearch] = useState(degreeSearch || '')
  const [_gpaSearch, setGpaSearch] = useState(gpaSearch || 0)
  //const [_graduationDateSearch, setGraduationDateSearch] = useState(graduationDateSearch || 0)
  const [_positionTypeSearch, setPositionTypeSearch] = useState(positionTypeSearch || '')

  return (
    <ScrollView style={styles.ScrollView}>
      <SearchBar
        placeholder="Filter by Name..."
        onChangeText={setNameSearch}
        value={_nameSearch}
        lightTheme={true}
        round={true}
        inputStyle={{color: 'black'}}
      />
      <SearchBar
        placeholder="Filter by Major..."
        onChangeText={setMajorSearch}
        value={_majorSearch}
        lightTheme={true}
        round={true}
        inputStyle={{color: 'black'}}
      />
      <View>     
            <Text style={{textAlign: 'center', fontSize: 18, marginBottom: '-5%'}}> {"Filter by Degree Type"}{"\n"}</Text>
            <View style={{ flexDirection:"row", minWidth: "100%"}}>
              <Pressable style={() => [_degreeSearch && _degreeSearch.includes('A') ? styles.buttonSelected : styles.buttonUnselected ]} onPress={() => setDegreeSearch(_degreeSearch.includes('A') ? _degreeSearch.replace('A', '') : (_degreeSearch + 'A'))}>
                    <Text style={ [_degreeSearch && _degreeSearch.includes('A') ? styles.buttonText : styles.buttonTextUnselected, {fontSize: 18} ]} >Associate's</Text>
                </Pressable>
              <Pressable style={() => [_degreeSearch && _degreeSearch.includes('B') ? styles.buttonSelected : styles.buttonUnselected ]} onPress={() => setDegreeSearch(_degreeSearch.includes('B') ? _degreeSearch.replace('B', '') : (_degreeSearch + 'B'))}>
                    <Text style={ [_degreeSearch && _degreeSearch.includes('B') ? styles.buttonText : styles.buttonTextUnselected, {fontSize: 18} ]} >Bachelor's</Text>
                </Pressable>
                <Pressable style={() => [_degreeSearch && _degreeSearch.includes('M') ? styles.buttonSelected : styles.buttonUnselected ]} onPress={() => setDegreeSearch(_degreeSearch.includes('M') ? _degreeSearch.replace('M', '') : (_degreeSearch + 'M'))}>
                    <Text style={ [_degreeSearch && _degreeSearch.includes('M') ? styles.buttonText : styles.buttonTextUnselected, {fontSize: 18} ]} >Master's</Text>
                </Pressable>
            </View>
      </View>
      <View>     
            <Text style={{textAlign: 'center', fontSize: 18, marginBottom: '-5%'}}> {"Filter by Minimum GPA"}{"\n"}</Text>
            <View style={{ flexDirection:"row", minWidth: "100%"}}>
              <Pressable style={() => [_gpaSearch === 2 ? styles.buttonSelected : styles.buttonUnselected ]} onPress={() => setGpaSearch(_gpaSearch === 2 ? 0 : 2)}>
                    <Text style={ [_gpaSearch === 2 ? styles.buttonText : styles.buttonTextUnselected ]} >2.0</Text>
                </Pressable>
              <Pressable style={() => [_gpaSearch === 3 ? styles.buttonSelected : styles.buttonUnselected ]} onPress={() => setGpaSearch(_gpaSearch === 3 ? 0 : 3)}>
                    <Text style={ [_gpaSearch === 3 ? styles.buttonText : styles.buttonTextUnselected ]} >3.0</Text>
                </Pressable>
                <Pressable style={() => [_gpaSearch === 3.5 ? styles.buttonSelected : styles.buttonUnselected ]} onPress={() => setGpaSearch(_gpaSearch === 3.5 ? 0 : 3.5)}>
                    <Text style={ [_gpaSearch === 3.5 ? styles.buttonText : styles.buttonTextUnselected ]} >3.5</Text>
                </Pressable>
                <Pressable style={() => [_gpaSearch === 4 ? styles.buttonSelected : styles.buttonUnselected ]} onPress={() => setGpaSearch(_gpaSearch === 4 ? 0 : 4)}>
                    <Text style={ [_gpaSearch === 4 ? styles.buttonText : styles.buttonTextUnselected ]} >4.0</Text>
                </Pressable>
            </View>
      </View>
      <View>     
            <Text style={{textAlign: 'center', fontSize: 18, marginBottom: '-5%'}}> {"Filter by Position Type"}{"\n"}</Text>
            <View style={{ flexDirection:"row", minWidth: "100%"}}>
                <Pressable style={() => [_positionTypeSearch && _positionTypeSearch.includes('I') ? styles.buttonSelected : styles.buttonUnselected ]} onPress={() => setPositionTypeSearch(_positionTypeSearch.includes('I') ? _positionTypeSearch.replace('I', '') : (_positionTypeSearch + 'I'))}>
                    <Text style={ [_positionTypeSearch && _positionTypeSearch.includes('I') ? styles.buttonText : styles.buttonTextUnselected ]} >Internship</Text>
                </Pressable>
                <Pressable style={() => [_positionTypeSearch && _positionTypeSearch.includes('F') ? styles.buttonSelected : styles.buttonUnselected ]} onPress={() => setPositionTypeSearch(_positionTypeSearch.includes('F') ? _positionTypeSearch.replace('F', '') : (_positionTypeSearch + 'F'))}>
                    <Text style={ [_positionTypeSearch && _positionTypeSearch.includes('F') ? styles.buttonText : styles.buttonTextUnselected ]} >Full Time</Text>
                </Pressable>
            </View>
      </View>
      <Button title="Apply Filters" onPress={() => navigation.navigate('BrowseCandidates', {
        nameSearch: _nameSearch, majorSearch: _majorSearch, degreeSearch: _degreeSearch, gpaSearch: _gpaSearch, positionTypeSearch: _positionTypeSearch
      })}/>
      <Button title="Clear Filters" onPress={() => {
        setNameSearch('');
        setMajorSearch('');
        setDegreeSearch('');
        setGpaSearch(0);
        setPositionTypeSearch('');
      }}/>
    </ScrollView>
  );
}

export default ApplyFiltersScreen;