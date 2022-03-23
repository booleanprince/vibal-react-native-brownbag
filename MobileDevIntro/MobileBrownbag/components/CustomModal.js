import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
} from 'react-native';

const VibalModal = (props) => {
  const word = props.word.toLowerCase();
  const OnOkClicked = () => {
    props.closeModal();
  };

  const showMessage = () => {
    switch(props.word.toLowerCase()){
      case "vibal": return "NUMBER 1!";
      case "ict": return "NUMBER 2!";
      default: return "GO HIGHER!";
    }
  };

  return(
    <Modal
      visible={props.visible}
      transparent
      animationType='fade'
      >
      <View style={styles.centered_view}>
        <View style={styles.modal}>
          <View style={styles.message_box}>
            <Text style={styles.message_text}>
              {
                showMessage()
              }
            </Text>
          </View>
          <Pressable 
            style={styles.button}
            android_ripple={{color: '#3E98FE'}}
            onPress={OnOkClicked}
          >
            <Text style={styles.button_text}>OK</Text>
          </Pressable>
        </View>
      </View>
      <View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099'
  },
  modal: {
    alignItems: 'center',
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 20
  },
  button: {
    backgroundColor: '#094BA8',
    color: '#ffffff',
    margin: 10,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200
  },
  button_text: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  message_text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  message_box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default VibalModal;