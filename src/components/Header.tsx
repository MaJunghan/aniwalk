import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function Header() {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.text1}>Logo</Text>
      <Text style={styles.text2}>header</Text>
      <Text style={styles.text3}>header</Text>
    </SafeAreaView>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(5),
  },
  text1: {
    color: '#66FF66',
    fontSize: wp(5),
    width: wp(20),
    fontWeight: 'bold',
    backgroundColor: '#FFFF66',
  },
  text2: {
    color: '#ffffff',
    fontSize: wp(5),
    width: wp(40),
    fontWeight: 'bold',
    backgroundColor: '#B266FF',
  },
  text3: {
    color: '#ffffff',
    fontSize: wp(5),
    width: wp(40),
    fontWeight: 'bold',
    backgroundColor: '#FF99FF',
  },
});
