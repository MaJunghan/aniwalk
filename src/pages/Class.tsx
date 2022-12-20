import React from 'react';
import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import Reels from '../components/Reels';

function Class() {
  return (
    <SafeAreaView>
      <Reels />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default Class;
