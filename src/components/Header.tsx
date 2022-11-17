import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function Header() {
  return (
    <SafeAreaView style={styles.header}>
      <TouchableOpacity>
        <Image
          source={require('../assets/image/icon/logo.png')}
          style={styles.logo1}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
      <View style={styles.header}>
        <Image
          source={require('../assets/image/icon/plus.png')}
          style={styles.logo2}
          resizeMode={'contain'}
        />
        <Image
          source={require('../assets/image/icon/love.png')}
          style={styles.logo2}
          resizeMode={'contain'}
        />
      </View>
    </SafeAreaView>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(8),
    paddingVertical: hp(4),
    height: hp(4),
    backgroundColor: '#ffffff',
  },
  logo1: {
    width: wp(30),
    marginRight: wp(25),
  },
  logo2: {
    width: wp(10),
    height: hp(3.5),
  },
});
