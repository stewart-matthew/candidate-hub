import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';

const UploadResumeScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const ref = useRef(null);
  let hasPhotoTaken = false;

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  
  _takePhoto = async () => {
    if (hasPhotoTaken) return;
    hasPhotoTaken = true;
    const photo = await ref.current.takePictureAsync()
    console.debug(photo)
    hasPhotoTaken = false
    navigation.navigate('ConfirmPhoto', photo.uri)
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
              padding: '5%'
            }}
            onPress={_takePhoto}
          >
            <Image style={{
              width: 100
              }}
              resizeMode='contain'
              source={require("../images/Camera_Button.png")}
            />

          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};
export default UploadResumeScreen;