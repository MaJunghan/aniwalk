import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {login} from '@react-native-seoul/kakao-login';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NaverLogin, {
  GetProfileResponse,
  NaverLoginResponse,
} from '@react-native-seoul/naver-login';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
const Intro = () => {
  const [result, setResult] = useState<string>('');
  console.log(result);
  const [success, setSuccessResponse] =
    useState<NaverLoginResponse['successResponse']>();
  const [failure, setFailureResponse] =
    useState<NaverLoginResponse['failureResponse']>();
  const consumerKey = 'lpKmvVpKYtGlS9D8qI6j';
  const consumerSecret = 'K7PbKFcaPM';
  const appName = 'com.aniwalk';
  const serviceUrlScheme = 'aniwalk';
  // 카카오 로그인
  const signInWithKakao = async (): Promise<void> => {
    try {
      const token = await login();
      setResult(JSON.stringify(token));
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('login err', err);
    }
  };
  // 네이버 로그인
  const naverLogin = async () => {
    const {failureResponse, successResponse} = await NaverLogin.login({
      appName,
      consumerKey,
      consumerSecret,
      serviceUrlScheme,
    });
    setSuccessResponse(successResponse);
    console.log(successResponse);
    setFailureResponse(failureResponse);
  };
  //구글소셜로그인
  const onGoogleButtonPress = async () => {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.kakaoBox}>
        <Pressable
          onPress={() => {
            signInWithKakao();
          }}>
          <Image
            source={require('../assets/image/login/kakao_login.png')}
            style={styles.kakaoIcon}
          />
        </Pressable>
      </View>
      <View style={styles.naverBox}>
        <Pressable
          onPress={() => {
            naverLogin();
          }}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../assets/image/login/naver_icon.png')}
            style={styles.naverLogin}
          />
          <Text style={{fontSize: wp(4), marginLeft: wp(21), marginTop: hp(1)}}>
            네이버 로그인
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          marginTop: hp(2),
          marginLeft: wp(10),
          width: wp(80),
          height: hp(5),
          backgroundColor: '#FFFFFF',
          borderRadius: 12,
          justifyContent: 'center',
        }}>
        <Pressable
          onPress={() => onGoogleButtonPress()}
          style={{
            flexDirection: 'row',
            marginLeft: wp(3),
          }}>
          <Image
            source={require('../assets/image/login/google.png')}
            style={styles.googleLogin}
          />
          <Text style={{fontSize: wp(4), marginLeft: wp(24)}}>구글 로그인</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default Intro;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  kakaoBox: {
    marginTop: wp(80),
    marginLeft: wp(10),
  },
  naverBox: {
    width: wp(80),
    height: hp(5),
    backgroundColor: '#03C75A',
    marginLeft: wp(10),
    marginTop: wp(3),
    justifyContent: 'space-between',
    borderRadius: 12,
  },
  kakaoIcon: {
    width: wp(80),
    height: hp(5),
    borderRadius: 12,
  },
  naverLogin: {
    width: wp(60 / 6),
    height: hp(3),
    marginTop: hp(1),
    marginLeft: wp(1),
  },
  googleLogin: {
    width: 20,
    height: 20,
  },
});
