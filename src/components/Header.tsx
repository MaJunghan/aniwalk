import React from 'react';
import {
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
    <View style={styles.header}>
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
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(10),
    paddingVertical: hp(5),
    height: hp(5),
    backgroundColor: '#ffffff',
  },
  logo1: {
    width: wp(50),
    height: hp(5),
    marginLeft: wp(10),
  },
  logo2: {
    width: wp(7),
    height: hp(3.5),
    marginRight: wp(10),
  },
});
