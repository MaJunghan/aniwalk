import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {login, getProfile} from '@react-native-seoul/kakao-login';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NaverLogin, {NaverLoginResponse} from '@react-native-seoul/naver-login';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
const MyFeed = () => {
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

  // 카카오 프로필
  const getKakaoProfile = async (): Promise<void> => {
    const profile: any = await getProfile();
    console.log('프로필', profile);

    setResult(JSON.stringify(profile));
  };

  // 카카오 로그인
  const signInWithKakao = async (): Promise<void> => {
    try {
      const token = await login();
      console.log(token, 'tokenData');
      setResult(JSON.stringify(token));
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('login err', err);
      getKakaoProfile();
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
      <ScrollView>
        <View>
          <View>
            <TextInput placeholder="아이디" style={styles.loginInput} />
          </View>
          <View>
            <TextInput placeholder="비밀번호" style={styles.loginInput} />
          </View>
          <View style={styles.loginBtnBox}>
            <Pressable style={styles.loginBtn}>
              <Text style={styles.inputText}>로그인</Text>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: wp(15),
              marginVertical: hp(3),
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text>아이디 찾기</Text>
            <Text style={{height: wp(4), marginBottom: hp(0.5)}}>|</Text>
            <Text>비밀번호 찾기</Text>
          </View>
        </View>
        <View style={styles.social}>
          <View style={styles.kakaoBox}>
            <Pressable onPress={signInWithKakao}>
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
              <Text
                style={{fontSize: wp(4), marginLeft: wp(24), marginTop: hp(1)}}>
                네이버 로그인
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              marginTop: hp(2),
              width: wp(90),
              height: hp(7),
              backgroundColor: '#FFFFFF',
              justifyContent: 'center',
              borderWidth: 1,
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
              <Text style={{fontSize: wp(4), marginLeft: wp(24)}}>
                구글 로그인
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default MyFeed;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: wp(5),
  },
  // 회원로그인
  loginInput: {
    marginTop: hp(3),
    borderWidth: 1,
    borderColor: '#e3e3e3',
    height: hp(7),
    paddingLeft: wp(3),
  },
  loginBtnBox: {
    marginTop: hp(3),
    backgroundColor: '#e3e3e3',
  },
  loginBtn: {
    width: wp(90),
    height: hp(7),
    justifyContent: 'center',
    marginLeft: wp(40),
  },
  inputText: {
    fontSize: hp(2.3),
    color: '#ffffff',
    fontFamily: 'DancingScript-Bold',
  },

  // 소셜로그인
  social: {marginTop: wp(10)},
  kakaoBox: {},
  naverBox: {
    width: wp(90),
    height: hp(7),
    backgroundColor: '#03C75A',
    marginTop: wp(3),
    justifyContent: 'space-between',
  },
  kakaoIcon: {
    width: wp(90),
    height: hp(7),
  },
  naverLogin: {
    width: wp(60 / 6),
    height: hp(3),
    marginTop: hp(2),
    marginLeft: wp(1),
  },
  googleLogin: {
    width: 20,
    height: 20,
  },
});
