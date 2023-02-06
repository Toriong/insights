import React from 'react';
import { Button, Pressable, StyleSheet } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import CarouselComp from '../components/CarouselComp';
import { globalStyles } from '../globalStyles';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';


function IntroScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={container}>
      <View style={headerSec}>
        <CarouselComp />
      </View>
      <View style={buttonSec}>
        <Pressable style={signUpBtn}>
          <Text style={{ ...blackTxt, ...btnTxt }}>Create Account</Text>
        </Pressable>
        <Pressable style={loginBtn} onPress={() => { console.log("hey there") }}>
          <Text style={{ ...whiteTxt, ...btnTxt }}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
}


const defaultBtnStyles = StyleSheet.create({
  styles:{
    height: "50px",
    width: "65%",
  }
})

const { blackTxt, whiteTxt, btnStyles } = globalStyles;
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
  headerSec: {
    height: "100%"
  },
  buttonSec: {
    height: "225px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    bottom: "10px",
    position: "absolute",
    backgroundColor: 'none',
  },
  signUpBtn: {
    ...defaultBtnStyles.styles,
    backgroundColor: "white",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopEndRadius: 8,
    borderTopStartRadius: 8,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
    borderWidth: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
  },
  loginBtn: {
    ...defaultBtnStyles.styles,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  btnTxt: {
    width: '100%',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: "500"
  }
});



const { container, headerSec, buttonSec, signUpBtn, loginBtn, btnTxt } = styles;

export default IntroScreen
