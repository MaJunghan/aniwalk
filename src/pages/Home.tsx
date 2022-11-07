import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Slick from 'react-native-slick';
import Video from 'react-native-video';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function Home() {
  const pet1 = require('../assets/video/pet1.mp4');
  const pet2 = require('../assets/video/pet2.mp4');
  const pet3 = require('../assets/video/pet3.mp4');
  const pet4 = require('../assets/video/pet4.mp4');

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={styles.banner}>
        <Text>배너</Text>
      </View>
      <Slick dotStyle={{display: 'none'}} activeDotStyle={{display: 'none'}}>
        <View>
          <Video
            source={pet1}
            style={styles.partScreen}
            paused={false}
            resizeMode={'contain'}
            repeat={false}
          />
        </View>
        <View>
          <Video
            source={pet2}
            style={styles.partScreen}
            paused={false}
            resizeMode={'contain'}
            repeat={false}
          />
        </View>
        <View>
          <Video
            source={pet3}
            style={styles.partScreen}
            paused={false}
            resizeMode={'contain'}
            repeat={false}
          />
        </View>
        <View>
          <Video
            source={pet4}
            style={styles.partScreen}
            paused={false}
            resizeMode={'contain'}
            repeat={false}
          />
        </View>
      </Slick>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  banner: {
    borderRadius: 10,
    marginTop: hp(3),
    marginBottom: hp(-7),
    marginHorizontal: wp(10),
    width: wp(80),
    height: wp(80 / 4),
    backgroundColor: '#ccc',
    fontSize: hp(3),
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  partScreen: {
    width: wp(80),
    height: hp(80) / 2,
    marginHorizontal: wp(10),
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Home;
