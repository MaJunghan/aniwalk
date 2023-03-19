import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function PetSecurityNumber() {
  return (
    <View style={{paddingVertical: hp(1)}}>
      <View>
        <Text style={styles.textBold}>jimingchu_u</Text>
      </View>
      <View
        style={{
          marginTop: hp(5),
          height: hp(35),
          borderColor: '#999',
          borderWidth: hp(0.1),
          borderRadius: hp(3),
          paddingHorizontal: wp(3),
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../assets/image/icon/pet_num.png')}
            resizeMode={'contain'}
            style={{width: 30, height: 30, borderRadius: hp(5), marginRight: wp(1)}}
          />
          <Text style={{fontFamily: 'NotoSansKR-Bold', color: '#000', fontSize: hp(2.5)}}>반려동물 등록증</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: wp(60), justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center', height: hp(3)}}>
              <Text style={styles.textLight}>이 름 : </Text>
              <Text style={styles.textLight}>꼬미</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', height: hp(3)}}>
              <Text style={styles.textLight}>등록번호 : </Text>
              <Text style={styles.textLight}>4170160028361654</Text>
            </View>
            <View style={{flexDirection: 'row', height: hp(3)}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.textLight}>품 종 : </Text>
                <Text style={styles.textLight}>포메라니안</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: wp(20)}}>
                <Text style={styles.textLight}>생 일 : </Text>
                <Text style={styles.textLight}>2016. 03. 09</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', height: hp(3)}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.textLight}>성 별 : </Text>
                <Text style={styles.textLight}>남(이미지교체예정)</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: wp(11.5)}}>
                <Text style={styles.textLight}>중성화 : </Text>
                <Text style={styles.textLight}>O</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', height: hp(3)}}>
              <Text style={styles.textLight}>성 격 : </Text>
              <Text style={styles.textLight}>사람좋아함, 활발, 애교많음</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', height: hp(3)}}>
              <Text style={styles.textLight}>첫만남 : </Text>
              <Text style={styles.textLight}>2016. 05. 02</Text>
            </View>
            <View style={{flexDirection: 'row', height: hp(3)}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.textLight}>보호자 : </Text>
                <Text style={styles.textLight}>마정한</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: wp(23)}}>
                <Text style={styles.textLight}>연락처 : </Text>
                <Text style={styles.textLight}>O10-4180-6554</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', height: hp(3)}}>
              <Text style={styles.textLight}>주 소 : </Text>
              <Text style={styles.textLight}>서울특별시 신림동 1462-30</Text>
            </View>
          </View>
          <View style={{marginLeft: wp(5), width: wp(25), justifyContent: 'center'}}>
            <Image
              source={require('../assets/image/icon/pet_num2.jpg')}
              resizeMode={'contain'}
              style={{width: wp(35), height: hp(20), marginRight: wp(1), marginLeft: wp(-5)}}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textBold: {
    fontFamily: 'NotoSansKR-Bold',
    color: '#000',
    fontSize: hp(1.5),
  },
  textLight: {
    fontFamily: 'NotoSansKR-Light',
    color: '#000',
    fontSize: hp(1.5),
  },
});

export default PetSecurityNumber;
