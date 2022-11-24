import React, {useCallback, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import DismissKeyboardView from '../components/DismissKeyboardView';
import {RootStackParamList} from '../../App';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type SignUpScreenProps = NativeStackScreenProps<RootStackParamList>;

function SignUp({navigation}: SignUpScreenProps) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef<TextInput | null>(null);
  const nameRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);

  const onChangeEmail = useCallback((text: string) => {
    setEmail(text.trim());
  }, []);
  const onChangeName = useCallback((text: string) => {
    setName(text.trim());
  }, []);
  const onChangePassword = useCallback((text: string) => {
    setPassword(text.trim());
  }, []);

  const canGoNext = email && name && password;
  return (
    <DismissKeyboardView>
      <View style={styles.signUp}>
        <View style={styles.inputWrapper}>
          <Text style={Platform.OS === 'ios' ? styles.label : styles.labelAnd}>
            아이디(이메일)<Text style={styles.special}>*</Text>
          </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={onChangeEmail}
            placeholder="aniwalk@aniwalkmail.com"
            placeholderTextColor="#666"
            textContentType="emailAddress"
            value={email}
            returnKeyType="next"
            clearButtonMode="while-editing"
            ref={emailRef}
            onSubmitEditing={() => nameRef.current?.focus()}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={Platform.OS === 'ios' ? styles.label : styles.labelAnd}>
            비밀번호<Text style={styles.special}>*</Text>
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="비밀번호를 입력해주세요(영문,숫자,특수문자)"
            placeholderTextColor="#666"
            onChangeText={onChangePassword}
            value={password}
            keyboardType={
              Platform.OS === 'android' ? 'default' : 'ascii-capable'
            }
            textContentType="password"
            secureTextEntry
            returnKeyType="send"
            clearButtonMode="while-editing"
            ref={passwordRef}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={Platform.OS === 'ios' ? styles.label : styles.labelAnd}>
            이름<Text style={styles.special}>*</Text>
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="이름을 입력해주세요."
            placeholderTextColor="#666"
            onChangeText={onChangeName}
            value={name}
            textContentType="name"
            returnKeyType="next"
            clearButtonMode="while-editing"
            ref={nameRef}
            onSubmitEditing={() => passwordRef.current?.focus()}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={Platform.OS === 'ios' ? styles.label : styles.labelAnd}>
            성별<Text style={styles.select}> (선택)</Text>
          </Text>
          <View style={styles.gender}>
            <View style={[styles.genderView, {borderColor: 'blue'}]}>
              <Text
                style={[
                  styles.genderText,
                  {
                    color: 'blue',
                    fontFamily: 'NotoSansKR-Bold',
                  },
                ]}>
                남성
              </Text>
            </View>
            <View style={styles.genderView}>
              <Text style={styles.genderText}>여성</Text>
            </View>
            <View style={styles.genderView}>
              <Text style={styles.genderText}>선택하지 않음</Text>
            </View>
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <Text style={Platform.OS === 'ios' ? styles.label : styles.labelAnd}>
            휴대폰 번호<Text style={styles.special}>*</Text>
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={[styles.textInput, , {width: wp(55), marginRight: wp(5)}]}
              placeholder="01012345678"
              placeholderTextColor="#666"
              onChangeText={onChangeName}
              value={name}
              textContentType="name"
              returnKeyType="next"
              clearButtonMode="while-editing"
              ref={nameRef}
              onSubmitEditing={() => passwordRef.current?.focus()}
              blurOnSubmit={false}
            />
            <View style={styles.authenticationNumber}>
              <Text style={styles.numberText}>인증번호 전송</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonZone}>
          <Pressable>
            <Text style={styles.buttonZoneText}>가입완료</Text>
          </Pressable>
        </View>
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
    height: hp(7),
    alignItems: 'center',
    paddingLeft: wp(3),
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: wp(1),
    margin: 0,
    padding: 0,
  },

  inputWrapper: {
    marginBottom: hp(2),
  },
  label: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: hp(2),
    color: '#555',
  },
  labelAnd: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: hp(2),
    color: '#555',
    marginBottom: hp(-1),
  },
  buttonZone: {
    backgroundColor: 'blue',
    height: hp(7),
    borderRadius: wp(1),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(5),
    marginBottom: hp(10),
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
  genderView: {
    width: wp(29),
    height: hp(7),
    borderRadius: wp(1),
    borderWidth: wp(0.2),
    borderColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
  },
  genderText: {
    color: '#666',
    fontSize: hp(2),
  },
  select: {
    fontSize: hp(1.5),
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
