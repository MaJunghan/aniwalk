import {Image, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {login, getProfile, KakaoOAuthToken} from '@react-native-seoul/kakao-login';
import {SafeAreaView} from 'react-native-safe-area-context';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import NaverLogin, {GetProfileResponse, NaverLoginResponse} from '@react-native-seoul/naver-login';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import DismissKeyboardView from '../components/DismissKeyboardView';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../AppInner';
import indexSlice from '../slices';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/reducer';
import CustomError from '../types/index';
import Config from 'react-native-config';
import {socialLogin, socialToken} from '../api';

type SignUpScreenProps = NativeStackScreenProps<RootStackParamList>;
type CallBackDataLogin = {
  accessToken: string;
  email: string;
};

const MyFeed = ({navigation}: SignUpScreenProps) => {
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.index.data);
  const consumerKey = `${Config.CONSUMER_KEY}`;
  const consumerSecret = `${Config.CONSUMER_SECRET}`;
  const appName = `${Config.APP_NAME}`;
  const serviceUrlScheme = `${Config.SERVICE_URL_SCHEME}`;

  // redux저장, axios defaults.headers 저장
  const socialCallback = (data: CallBackDataLogin) => {
    socialToken(data.accessToken);
    dispatch(indexSlice.actions.getLoginUserData(data));
  };

  // 카카오 로그인
  const signInWithKakao = async (): Promise<void> => {
    try {
      const {accessToken} = (await login()) as KakaoOAuthToken;
      const data = await socialLogin(accessToken, 'KAKAO');
      if (data) socialCallback(data);
    } catch (err) {
      if (err instanceof CustomError) {
        console.error(err.response?.data);
        err.response?.data;
      }
    }
  };

  // 네이버 로그인
  const naverLogin = async () => {
    try {
      const {successResponse} = await NaverLogin.login({
        appName,
        consumerKey,
        consumerSecret,
        serviceUrlScheme,
      });
      const data = await socialLogin(successResponse?.accessToken, 'NAVER');
      if (data) socialCallback(data);
    } catch (err) {
      if (err instanceof CustomError) {
        console.error(err.response?.data);
        err.response?.data;
      }
    }
  };

  //구글소셜로그인
  const onGoogleButtonPress = async () => {
    try {
      const {idToken} = await GoogleSignin.signIn();
      const data = await socialLogin(idToken, 'GOOGLE');
      if (data) socialCallback(data);
    } catch (err) {
      if (err instanceof CustomError) {
        console.error(err.response?.data);
        err.response?.data;
      }
    }
  };

  useEffect(() => {
    if (userData) console.log(userData);
    // first => 처음 회원가입하는 경우
    if (userData.isFirst) {
      return navigation.navigate('SignUp');
    }
    // 로그인
  }, [userData]);

  return (
    <SafeAreaView style={styles.container}>
      <DismissKeyboardView>
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
          <View style={styles.utility}>
            <Text style={styles.utilityText}>아이디 찾기</Text>
            <Text style={{height: wp(5), marginBottom: hp(0.5), color: '#999'}}>|</Text>
            <Text style={styles.utilityText}>비밀번호 찾기</Text>
          </View>
        </View>
        <View style={styles.social}>
          <View style={styles.socialLineBox}>
            <View style={styles.socialLine} />
            <View>
              <Text style={styles.socialLineText}>OR</Text>
            </View>
            <View style={styles.socialLine} />
          </View>
          <View style={styles.snsLogin}>
            <Text style={styles.snsText}>SNS 계정으로 로그인</Text>
          </View>
          <View style={styles.socialBox}>
            <Pressable onPress={() => signInWithKakao()}>
              <View style={styles.kakaoLoginBox}>
                <Image
                  source={require('../assets/image/login/kakao.png')}
                  resizeMode={'contain'}
                  style={{width: 24, height: 24}}
                />
              </View>
            </Pressable>
            <Pressable onPress={() => naverLogin()}>
              <View>
                <Image
                  source={require('../assets/image/login/naver.png')}
                  resizeMode={'contain'}
                  style={{width: 55, height: 55}}
                />
              </View>
            </Pressable>
            <Pressable onPress={() => onGoogleButtonPress()}>
              <View style={styles.googleLoginBox}>
                <Image
                  source={require('../assets/image/login/google.png')}
                  resizeMode={'contain'}
                  style={{width: 24, height: 24}}
                />
              </View>
            </Pressable>
            <View>
              <Image
                source={require('../assets/image/login/apple.jpg')}
                resizeMode={'contain'}
                style={{width: 55, height: 55}}
              />
            </View>
          </View>
        </View>
      </DismissKeyboardView>
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
    backgroundColor: 'blue',
  },
  loginBtn: {
    width: wp(90),
    height: hp(7),
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    fontSize: hp(2.3),
    color: '#ffffff',
    fontFamily: 'NotoSansKR-Bold',
  },
  utility: {
    flexDirection: 'row',
    paddingHorizontal: wp(10),
    marginVertical: hp(3),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  utilityText: {
    fontFamily: 'NotoSansKR-Light',
    color: '#999',
  },
  // 소셜로그인
  social: {
    height: hp(30),
  },
  socialLineBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  snsLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(1),
  },
  socialBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(1),
  },
  socialLine: {
    width: wp(40),
    height: hp(0.1),
    backgroundColor: '#666',
  },
  socialLineText: {
    paddingHorizontal: wp(5),
    fontFamily: 'NotoSansKR-Light',
    color: '#666',
  },
  kakaoLoginBox: {
    backgroundColor: '#fae100',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    width: 55,
    height: 55,
  },
  googleLoginBox: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: '#efefef',
  },
  snsText: {
    fontFamily: 'NotoSansKR-Light',
    color: '#666',
  },
});
