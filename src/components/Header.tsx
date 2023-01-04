import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image source={require('../assets/image/icon/logo.png')} style={styles.logo1} resizeMode={'contain'} />
      </TouchableOpacity>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    height: hp(6),
  },
  logo1: {
    marginTop: hp(1),
    marginLeft: wp(5),
    width: wp(20),
    height: hp(40),
  },
});
