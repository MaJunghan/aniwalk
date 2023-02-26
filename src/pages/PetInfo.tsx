import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  PetInfoInput: undefined;
};

type PetInfoScreenProps = NativeStackScreenProps<RootStackParamList>;

function PetInfo({navigation}: PetInfoScreenProps) {
  // 메인페이지 이동
  const movePetInfoInputPage = () => {
    return navigation.navigate('PetInfoInput');
  };

  return (
    <View style={{paddingHorizontal: wp(5), marginTop: hp(1)}}>
      <View>
        <Text style={{fontFamily: 'NotoSansKR-Bold', color: '#111'}}>반려동물 정보를 입력하러 가볼까요? </Text>
      </View>
      <View>
        <Image
          resizeMode="contain"
          source={require('../assets/image/icon/pet.png')}
          style={{
            marginTop: hp(5),
            marginLeft: wp(20),
            width: wp(50),
            height: hp(20),
          }}
        />
      </View>
      <View
        style={{
          marginTop: hp(20),
        }}>
        <View
          style={{
            backgroundColor: 'blue',
            height: hp(7),
            borderRadius: wp(1),
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: hp(1),
          }}>
          <Pressable onPress={movePetInfoInputPage}>
            <Text
              style={{
                color: '#ffffff',
                fontFamily: 'NotoSansKR-Bold',
                fontSize: hp(1.5),
              }}>
              지금 입력하기
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            height: hp(7),
            borderRadius: wp(1),
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: hp(1),
            borderWidth: wp(0.1),
          }}>
          <Pressable>
            <Text
              style={{
                color: '#111',
                fontFamily: 'NotoSansKR-Light',
                fontSize: hp(1.5),
              }}>
              나중에 하기
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default PetInfo;
