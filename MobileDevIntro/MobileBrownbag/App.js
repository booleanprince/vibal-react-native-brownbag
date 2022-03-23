/**
 * Sample Code for Mobile Platforms Brownbag
 */

import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  TextInput,
  StyleSheet,
  Alert
} from 'react-native';
import VibalModal from './components/CustomModal';

const App = () => {
  const [word, setWord] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onSubmitClicked = () => {
    if(word.length > 2){
      setIsModalVisible(true)
    } else {
      ShowWarning();
    }
  };

  const onTextChanged = (text) => {
    setWord(text);
  };

  const closeModal = () => {
    setIsModalVisible(false)
  }

  const ShowWarning = () => {
    Alert.alert("Invalid Input", "The word must be longer than 2 characters!", 
    [{text: 'OK'}])
  };

  return (
    <View style={styles.main_app}>
      <VibalModal 
        word={word}
        visible={isModalVisible}
        closeModal={closeModal}
      />
      <View>
        <Text style={styles.label}>Enter a word: </Text>
        <TextInput 
          style={styles.text_box}
          placeholder='e.g. team or group'
          onChangeText={onTextChanged}
        />
        <Pressable 
          style={styles.button}
          onPress={onSubmitClicked}
          android_ripple={{color: '#3E98FE'}}
        >
          <Text style={styles.button_text}>SUBMIT</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_app: {
    backgroundColor: '#ffffff',
    flex: 1
  },
  button: {
    backgroundColor: '#094BA8',
    color: '#ffffff',
    margin: 10,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button_text: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15
  },
  view_row: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 5,
    marginTop: 100
  },
  text_box: {
    fontSize: 20,
    backgroundColor: '#ffffff',
    borderColor: "#000000",
    borderRadius: 5,
    padding: 15,
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
