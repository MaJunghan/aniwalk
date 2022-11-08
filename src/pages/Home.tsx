import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import Video from 'react-native-video';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function Home() {
  const [slideTime, setSlideTime] = useState(10); // 초기 슬라이딩 시간 1초
  const pet1 = require('../assets/video/pet1.mp4');
  const pet2 = require('../assets/video/pet2.mp4');
  const pet3 = require('../assets/video/pet3.mp4');
  const pet4 = require('../assets/video/pet4.mp4');

  // paused : 일시중지여부 , repeat : 반복여부
  const swiperData: any = [
    {
      id: 1,
      require: pet1,
      mode: 'contain',
      paused: false,
      repeat: true,
    },
    {
      id: 2,
      require: pet2,
      mode: 'contain',
      paused: false,
      repeat: true,
    },
    {
      id: 3,
      require: pet3,
      mode: 'contain',
      paused: false,
      repeat: true,
    },
    {
      id: 4,
      require: pet4,
      mode: 'contain',
      paused: false,
      repeat: true,
    },
  ];

  useEffect(() => {
    setSlideTime(10);
  }, []);

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={styles.banner}>
        <Text>배너</Text>
      </View>
      <Swiper autoplay showsPagination={false} autoplayTimeout={slideTime}>
        {swiperData.map((item: any) => {
          return (
            <View key={item.id}>
              <Video
                source={item.require}
                paused={item.paused}
                resizeMode={item.mode}
                repeat={item.repeat}
                style={styles.partScreen}
              />
            </View>
          );
        })}
      </Swiper>
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
