import React from 'react';
import { Button, Pressable, StyleSheet } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import CarouselComp from '../components/CarouselComp';
import { globalStyles } from '../globalStyles';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';


function IntroScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={container}>
      <View style={headerSec}>
        <CarouselComp />
      </View>
      <View style={buttonSec}>
        <Pressable style={loginBtn} onPress={() => { console.log("hey there") }}>
          <Text style={{...whiteTxt, ...btnTxt }}>Login</Text>
        </Pressable>
        <Pressable style={signUpBtn}>
          <Text style={{...blackTxt, ...btnTxt }}>Sign-in</Text>
        </Pressable>
      </View>
    </View>
  );
}

// FFFFFF

const defaultBtnStyles = { 
  height: "50px", 
  width: "130px",
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: "100%",
    position: 'absolute'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  headerSec:{
    height: "100%"
  },
  buttonSec:{
    height: "225px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    bottom: "10px",
    position: "absolute",
    backgroundColor: 'none',
  },
  signUpBtn:{
      ...defaultBtnStyles,
      backgroundColor: "white",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
  },
  loginBtn:{
      ...defaultBtnStyles,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  },
  btnTxt:{
    width: '100%',
    textAlign: 'center'
  }
});


const { blackTxt, whiteTxt } = globalStyles;
const { container, headerSec, buttonSec, signUpBtn, loginBtn, btnTxt } = styles;

export default IntroScreen
