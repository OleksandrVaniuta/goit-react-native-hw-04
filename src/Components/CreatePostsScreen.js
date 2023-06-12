import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  StatusBar,
  FlatList,
  Platform,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

const CONTENT = [
  {
    id: '45k6-j54k-4jth',
    name: 'Natali Romanova',
    mail: 'email@example.com',
  },
  {
    id: '45k6-j54k-4jt2',
    name: 'Natali Romanova',
    mail: 'email@example.com',
  },
];

export default function CreatePosts() {
  const [content, setCourses] = useState(CONTENT);
  const [photo, setPhoto] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled || !result.canceled) {
      console.log(result);
      setPhoto(result.assets[0].uri);
      console.log(photo);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.PostScrenContainer}>
        <View style={styles.ContentContainer}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
            style={styles.Keyboard}
          >
            <View style={styles.container}>
              {photo ? (
                <Image source={{ uri: photo }} style={styles.photo} />
              ) : (
                <View>
                  <MaterialIcons
                    name="photo-camera"
                    size={24}
                    color="#BDBDBD"
                    style={styles.AddPhoto}
                  />
                </View>
              )}
              <TouchableOpacity onPress={pickImageAsync}>
                <View style={styles.buttonAddPhoto}>
                  <Text style={styles.buttonText}>Завантажте фото</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TextInput style={[styles.input]} placeholder="Назва" />
            <View style={styles.inputContainer}>
              <EvilIcons name="location" size={24} color="#BDBDBD" />
              <TextInput
                style={styles.inputLocation}
                placeholder="Місцевість..."
              />
            </View>
            <TouchableOpacity style={styles.createBtn}>
              <Text style={styles.createBtnText}>Опубліковати</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  PostScrenContainer: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  PostScrenHeader: {
    width: '100%',
    marginTop: StatusBar.currentHeight || 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#b3b3b3',
  },
  ContentContainer: {
    flex: 1,
    paddingTop: 32,
    paddingBottom: 22,
    justifyContent: 'flex-end',
    width: '100%',
    paddingRight: 16,
    paddingLeft: 16,
  },
  Keyboard: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    resizeMode: 'cover',
    backgroundColor: 'white',
  },
  PostScrenTitle: {
    fontSize: 17,
    lineHeight: 22,
    fontFamily: 'Roboto-Medium',
    marginLeft: '20%',
  },
  AddPhoto: {
    width: '100%',
    height: 240,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: '#E8E8E8',
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  photo: {
    width: '100%',
    height: 200,
    marginBottom: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: '#BDBDBD',
    fontSize: 16,
    marginBottom: 30,
  },
  input: {
    borderColor: '#E8E8E8',
    borderBottomWidth: 1,
    fontSize: 16,
    paddingBottom: 15,
    paddingTop: 15,
  },
  inputLocation: {
    flex: 1,
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    paddingHorizontal: 0,
    paddingVertical: 15,
    borderColor: '#E8E8E8',
    borderBottomWidth: 1,
  },
  createBtn: {
    width: '100%',
    marginTop: 30,
    backgroundColor: '#F6F6F6',
    paddingVertical: 16,
    borderRadius: 100,
    alignItems: 'center',
  },
  createBtnActive: {
    width: '100%',
    marginTop: 30,
    backgroundColor: '#FF6C00',
    paddingVertical: 16,
    borderRadius: 100,
    alignItems: 'center',
  },
  createBtnText: {
    fontSize: 16,
    color: '#BDBDBD',
  },
  createBtnTextActive: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});
