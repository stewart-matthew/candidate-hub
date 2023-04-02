import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

const UploadResumeScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const ref = useRef(null)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  
  _takePhoto = async () => {
    const photo = await ref.current.takePictureAsync()
    console.debug(photo)
    navigation.navigate('CandidateForm', photo.uri)
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={ref}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              marginLeft: '33%',
              marginBottom: '5%',
              borderWidth: '3',
              borderRadius: '4px',
              padding: '5%'
            }}
            onPress={_takePhoto}
          >
            <Text style={{
                fontWeight: 'bold',
                fontSize: 20
            }}>Take Photo</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};
export default UploadResumeScreen;