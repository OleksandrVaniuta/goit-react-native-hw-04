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
} from 'react-native';

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

export default function Posts() {
  const [content, setCourses] = useState(CONTENT);

  return (
    <SafeAreaView style={styles.PostScrenContainer}>
      <View style={styles.ContentContainer}>
        <FlatList
          style={styles.ContentList}
          data={content}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.Contentitem}>
              <View style={styles.PhotoBox}></View>
              <View style={styles.TextBox}>
                <Text style={styles.TextName}>{item.name}</Text>
                <Text style={styles.TextMail}>{item.mail}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  PostScrenContainer: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  PostScrenHeader: {
    width: '100%',
    marginTop: StatusBar.currentHeight || 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
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
    justifyContent: 'flex-start',
    width: '100%',
    paddingRight: 16,
    paddingLeft: 16,
  },
  ContentList: {
    flex: 1,
    flexDirection: 'column',
  },
  Contentitem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  PhotoBox: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: '#f6f6f6',
  },
  TextBox: {
    marginLeft: 8,
  },
  TextName: {
    fontSize: 13,
    lineHeight: 15,
    color: '#212121',
    fontFamily: 'Roboto-Bold',
  },
  TextMail: {
    fontSize: 11,
    lineHeight: 13,
    color: 'rgba(33, 33, 33, 0.8)',
    fontFamily: 'Roboto-Regular',
  },
  PostScrenTitle: {
    fontSize: 17,
    lineHeight: 22,
    fontFamily: 'Roboto-Medium',
    marginRight: '33%',
  },
  PostsBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderTopColor: '#b3b3b3',
    borderTopWidth: 1,
  },
  AddBtn: {
    width: 70,
    height: 40,
    borderRadius: 20,
    marginLeft: 39,
    marginRight: 39,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6C00',
  },
});
