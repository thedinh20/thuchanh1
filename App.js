import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';

const Stack = createNativeStackNavigator();

const FirstScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 3000); // 3 giây trước khi chuyển

    return () => clearTimeout(timer); // Dọn dẹp timer khi component unmount
  }, [navigation]);

  return (
    <View style={styles.firstContainer}>
      <Image
        source={require('./assets/icon_nectar.png')}
        style={styles.firstImg}
      />
      <TouchableOpacity 
        style={styles.startButton} 
        onPress={() => navigation.navigate('Onboarding')}
      >
      </TouchableOpacity>
    </View>
  );
};

const Onboarding = ({ navigation }) => {
  return (
    <View style={styles.onboardingContainer}>
      <Image
        source={require('./assets/background_onbording.png')}
        style={styles.backgroundOnboarding}
      />
      <Image
        source={require('./assets/icon_carrot.png')}
        style={styles.onboardingImg}
      />
      <View style={styles.textBording}>
        <Text style={styles.text1Bording}>
          Welcome to our store
        </Text>
        <Text style={styles.text2Bording}>
          Get your groceries in as fast as one hour
        </Text>
      </View>
      <TouchableOpacity style={styles.buttonBording} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.textbtnBording}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const SignIn = ({ navigation }) => {
  return (
    <View style={styles.SignInContainer}>
      <Image
          source={require('./assets/bg_signin.png')}
          style={styles.signinimg}
      />
      <Text style={styles.title}>
        Get your groceries 
      </Text>
      <Text style={styles.title1}>
        with nectar
      </Text>

      <TextInput
          style={styles.input}
          
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
      />
      <Text style={styles.socialMediaText}>Or connect with social media</Text>
      <View style={styles.buttonContainer}>
      
        <TouchableOpacity style={styles.googleButton} onPress={() => navigation.navigate('number')}>
          <Text style={styles.ggbtnText}>Continue with Google</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.facebookButton} onPress={() => navigation.navigate('number')}>
          <Text style={styles.fbbtnText}>Continue with Facebook</Text>
        </TouchableOpacity>
      
      </View>
    </View>
  );
};

const number = ({ navigation }) => {
  return(
    <View style={styles.numberContainer}>
      <Text>
        <TouchableOpacity style={styles.btnBack} onPress={() => navigation.navigate('SignIn')} >
          <Text>{'<'}</Text>
        </TouchableOpacity>
      </Text>
      <Text style={styles.mobileNumberText}>Nhập số điện thoại của bạn</Text>
    </View>
  );
};

const verification = () => {
  <View style={styles.numberContainer}>
    <Text>hakhfkaf</Text>
  </View>
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="number" component={number} options={{ headerShown: false }} />
        <Stack.Screen name="verification" component={verification} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  firstContainer: {
    flex: 1,
    backgroundColor: '#5eb078',
  },
  firstImg: {
    width: 267.4,
    height: 68.6,
    marginTop: 413.7,
    marginLeft: 73.3,
  },
  startButton: {
    width: '100%',
    height:'100%'
  },
  firstButton1: {
    width:'100%',
    height:'100%'
  },
  onboardingContainer: {
    flex: 1,
  },
  backgroundOnboarding: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  onboardingImg: {
    width: 48.5,
    height: 56.4,
    marginTop: 470,
    marginLeft: 182.8,
    position: 'absolute',
  },
  textBording: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 200, // Căn giữa dọc
    left: 0,
    right: 0,
  },
  text1Bording: {
    width: 253,
    height: 86,
    color: 'white',
    fontFamily: 'Gilroy', // Đảm bảo bạn đã tải font này vào ứng dụng
    fontWeight: '600',
    fontSize: 48,
    lineHeight: 42,
    letterSpacing: 0,
    textAlign: 'center',
  },
  text2Bording: {
    width: 295,
    height: 15,
    marginTop: 5,
    fontFamily: 'Gilroy-Medium',
    fontSize: 16,
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: 'center',
    color: 'rgba(252, 252, 252, 0.34)', // Đã sửa lại màu sắc
  },
  buttonBording: {
    position: 'absolute',
    backgroundColor: '#5eb078',
    width: 353,
    height: 67,
    bottom: 100, // Căn giữa dọc
    left: 30.5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textbtnBording: {
    color: 'white',
    fontWeight: '600', // Đã sửa lại định dạng
    fontSize: 20,
  },
  SignInContainer:{
    flex:1,
    backgroundColor: '#fcfcfc',
    position:'relative'
  },
  signinimg: {
    width: 413.36627197265625,
    height: 374.151611328125,
    marginTop: 30,
    backgroundColor: '#fcfcfc',
  },
  title: {
    marginTop: 400,
    marginLeft: 25,
    fontFamily: 'Gilroy',
    fontWeight: 600,
    fontSize: 26,
    lineHeight: 29,
    letterSpacing: 0,
    color: ' #030303',
    position:'absolute'
  },
  title1: {
    marginTop: 430,
    marginLeft: 25,
    fontFamily: 'Gilroy',
    fontWeight: 600,
    fontSize: 26,
    lineHeight: 29,
    letterSpacing: 0,
    color: ' #030303',
    position:'absolute'
  },
  input: {
    width: 364,
    height: 39.550201416015625,
    marginTop: 490,
    marginLeft: 25,
    borderBottomWidth: 1,
    borderColor:' #E2E2E2',
    position:'absolute'
  },
  socialMediaText: {
    fontSize: 16,
    color: '#888',
    position: 'absolute',
    width: 220,
    height: 17,
    marginTop: 565,
    marginLeft: 100,

  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft:30
  },
  googleButton: {
    width: 364,
    height: 67,
    backgroundColor:'#5683e8',
    position:'absolute',
  },
  ggbtnText:{
    color:'white',
    textAlign: 'center',
    fontSize:18,
    fontWeight:600,
    paddingTop:20,
  },
  facebookButton: {
    width: 364,
    height: 67,
    backgroundColor: '#4b66a9',
    marginTop:150
  },
  fbbtnText:{
    color:'white',
    textAlign: 'center',
    fontSize:18,
    fontWeight:600,
    paddingTop:20,
  },
  numberContainer: {
    flex:1,
    backgroundColor:'#fcfcfc'
  },
  mobileNumberText: {
    marginTop: 140.02,
    marginLeft: 25,
    fontFamily: 'Gilroy',
    fontWeight: '600',
    fontSize: 26,
    lineHeight: 29,
    letterSpacing: 0,
    color: '#181725',
    
  },
});

export default App;