import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Image, Platform, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import DismissKeyboardView from '../components/DismissKeyboardView';
import {RootStackParamList} from '../../AppInner';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Timer from '../components/Timer';
import CustomError from '../types/index';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducer';
import {getNickName, emailAuthorizationSend, emailAuthorizationConfirm} from '../api';

type SignUpScreenProps = NativeStackScreenProps<RootStackParamList>;

function SignUp({navigation}: SignUpScreenProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [authNumber, setAuthNumber] = useState('');
  // 이메일 인증 참조
  const [authCheck, setAuthCheck] = useState(false);
  // 타이머
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);

  const userData = useSelector((state: RootState) => state.index.data);

  const emailRef = useRef<TextInput | null>(null);
  const emailAuthRef = useRef<TextInput | null>(null);
  const nameRef = useRef<TextInput | null>(null);

  const [genderList, setGenderList] = useState([
    {id: 0, title: '남성', isActive: false},
    {id: 1, title: '여성', isActive: false},
    {id: 2, title: '선택하지 않음', isActive: false},
  ]);

  const onChangeEmail = useCallback((text: string) => {
    setEmail(text.trim());
    console.log(text);
  }, []);
  const onChangeName = useCallback((text: string) => {
    setName(text.trim());
    console.log(text);
  }, []);
  const onChangeAuthNumber = useCallback((text: string) => {
    setAuthNumber(text.trim());
    console.log(text);
  }, []);
  const onActiveGender = (index: number) => {
    const data = genderList.map((item, idx) =>
      idx === index ? {...item, isActive: true} : {...item, isActive: false},
    );
    setGenderList(data);
  };

  // 닉네임 랜덤생성
  const onChangeNickname = async () => {
    try {
      const data = await getNickName();
      setName(data);
    } catch (err) {
      if (err instanceof CustomError) {
        console.error(err.response?.data);
        err.response?.data;
      }
    }
  };

  // 이메일 인증
  const onClickEmailAuthentication = () => {
    // 버튼상태 변경
    setAuthCheck(true);
    // 이메일 인증 api 발송
    try {
      // code number로 2번쨰 이메일요청부터는 알람추가
      // 시퀸스로 해도될듯.
      emailAuthorizationSend(email);
      setMinutes(3);
      setSeconds(0);
    } catch (err) {
      if (err instanceof CustomError) {
        console.error(err.response?.data);
        err.response?.data;
      }
    }
  };

  // 이메일 인증번호 확인
  const emailAuthenticationConfirmInput = async () => {
    try {
      const data = await emailAuthorizationConfirm(authNumber);
      console.log(data, '검증스');
    } catch (err) {
      if (err instanceof CustomError) {
        console.error(err.response?.data);
        err.response?.data;
      }
    }
  };

  useEffect(() => {
    if (userData) {
      setEmail(userData?.email);
    }
  }, [userData]);

  return (
    <DismissKeyboardView>
      <View style={styles.signUp}>
        <View style={styles.inputWrapper}>
          <Text style={Platform.OS === 'ios' ? styles.label : styles.labelAnd}>
            아이디(이메일)<Text style={styles.special}>*</Text>
          </Text>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <TextInput
              style={styles.emailTextInput}
              onChangeText={onChangeEmail}
              placeholder="aniwalk@aniwalkmail.com"
              placeholderTextColor="#999"
              textContentType="emailAddress"
              value={email}
              returnKeyType="next"
              clearButtonMode="while-editing"
              ref={emailRef}
              onSubmitEditing={() => emailAuthRef.current?.focus()}
              blurOnSubmit={false}
            />
            <Pressable onPress={onClickEmailAuthentication}>
              <View
                style={{
                  backgroundColor: 'blue',
                  width: wp(30),
                  height: hp(6),
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: wp(1),
                  marginLeft: wp(5),
                }}>
                <Text style={{fontFamily: 'NotoSansKR-Bold', fontSize: hp(1.5), color: 'white'}}>
                  {authCheck ? '재전송' : '이메일 인증'}
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
        {authCheck && (
          <View style={styles.inputWrapper}>
            <View style={{flexDirection: 'row', alignItems: 'center', position: 'relative', marginTop: hp(2)}}>
              <TextInput
                style={styles.authTextInput}
                placeholder="인증번호 입력"
                placeholderTextColor="#999"
                onChangeText={onChangeAuthNumber}
                value={authNumber}
                textContentType="name"
                returnKeyType="next"
                clearButtonMode="while-editing"
                ref={emailAuthRef}
                onSubmitEditing={() => nameRef.current?.focus()}
                blurOnSubmit={false}
              />
              <View style={{position: 'absolute', marginLeft: wp(44)}}>
                <Timer minutes={minutes} setMinutes={setMinutes} seconds={seconds} setSeconds={setSeconds} />
              </View>
              <Pressable onPress={emailAuthenticationConfirmInput}>
                <View
                  style={{
                    backgroundColor: 'blue',
                    width: wp(30),
                    height: hp(6),
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: wp(1),
                    marginLeft: wp(5),
                  }}>
                  <Text style={{fontFamily: 'NotoSansKR-Bold', fontSize: hp(1.5), color: 'white'}}> 확인</Text>
                </View>
              </Pressable>
            </View>
          </View>
        )}
        <View style={styles.inputWrapper}>
          <Text style={Platform.OS === 'ios' ? styles.label : styles.labelAnd}>
            닉네임<Text style={styles.special}>*</Text>
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center', position: 'relative'}}>
            <TextInput
              style={styles.textInput}
              placeholder="닉네임을 입력해주세요."
              placeholderTextColor="#999"
              onChangeText={onChangeName}
              value={name}
              textContentType="name"
              returnKeyType="next"
              clearButtonMode="while-editing"
              ref={nameRef}
              blurOnSubmit={false}
            />
            <View style={{position: 'absolute', marginLeft: wp(80)}}>
              <Pressable onPress={onChangeNickname}>
                <Image
                  source={require('../assets/image/icon/refresh.png')}
                  style={{width: wp(5), height: hp(5), resizeMode: 'contain'}}
                />
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <Text style={Platform.OS === 'ios' ? styles.label : styles.labelAnd}>
            성별<Text style={styles.select}> (선택)</Text>
          </Text>
          <View style={styles.gender}>
            {genderList.map((item, index) => {
              return (
                <Pressable key={item.id} onPress={() => onActiveGender(index)}>
                  <View style={item.isActive ? styles.genderViewActive : styles.genderView}>
                    <Text style={item.isActive ? styles.genderTextActive : styles.genderText}>{item.title}</Text>
                  </View>
                </Pressable>
              );
            })}
          </View>
        </View>
      </View>
      <View style={styles.buttonZone}>
        <Pressable>
          <Text style={styles.buttonZoneText}>가입완료</Text>
        </Pressable>
      </View>
    </DismissKeyboardView>
  );
}

const styles = StyleSheet.create({
  signUp: {
    paddingHorizontal: wp(5),
    marginTop: hp(1),
  },
  textInput: {
    width: wp(90),
    height: hp(6),
    alignItems: 'center',
    paddingHorizontal: hp(2),
    borderWidth: 1,
    borderColor: '#e3e3e3',
    borderRadius: wp(1),
    margin: 0,
    padding: 0,
    fontSize: hp(1.5),
  },
  emailTextInput: {
    width: wp(55),
    height: hp(6),
    alignItems: 'center',
    paddingHorizontal: hp(2),
    borderWidth: 1,
    borderColor: '#e3e3e3',
    borderRadius: wp(1),
    margin: 0,
    padding: 0,
    fontSize: hp(1.5),
  },
  authTextInput: {
    width: wp(55),
    height: hp(6),
    alignItems: 'center',
    paddingHorizontal: hp(2),
    borderWidth: 1,
    borderColor: '#e3e3e3',
    borderRadius: wp(1),
    margin: 0,
    padding: 0,
    fontSize: hp(1.5),
  },
  inputWrapper: {
    marginBottom: hp(2),
  },
  label: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: hp(1.5),
    color: '#555',
  },
  labelAnd: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: hp(1.5),
    color: '#555',
    marginBottom: hp(-1),
  },
  buttonZone: {
    backgroundColor: 'blue',
    height: hp(7),
    borderRadius: wp(1),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(25),
  },
  buttonZoneText: {
    color: '#ffffff',
    fontFamily: 'NotoSansKR-Bold',
  },
  authenticationNumber: {
    width: wp(30),
    borderRadius: wp(1),
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    color: '#ffffff',
    fontFamily: 'NotoSansKR-Bold',
    fontSize: hp(2),
  },
  gender: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  genderViewActive: {
    width: wp(29),
    height: hp(6),
    borderRadius: wp(1),
    borderWidth: wp(0.4),
    borderColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  genderView: {
    width: wp(29),
    height: hp(6),
    borderRadius: wp(1),
    borderWidth: wp(0.2),
    borderColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
  },
  genderTextActive: {
    color: 'blue',
    fontSize: hp(1.5),
    borderColor: 'blue',
  },
  genderText: {
    color: '#666',
    fontSize: hp(1.5),
  },
  select: {
    fontSize: hp(1.4),
    color: '#d1d1d1',
  },
  special: {
    width: wp(1),
    height: hp(1),
    marginLeft: wp(5),
    color: 'red',
  },
});

export default SignUp;
