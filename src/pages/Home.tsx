import React, {useState, useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Video from 'react-native-video';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Carousel from '../components/Carousel';
import {CubeNavigationHorizontal} from 'react-native-3dcube-navigation';

function Home() {
  const [slideTime, setSlideTime] = useState(10); // 초기 슬라이딩 시간 1초
  const [page, setPage] = useState(0);
  // paused : 일시중지여부 , repeat : 반복여부
  const swiperData: any = [
    {
      id: 1,
      require: require('../assets/video/pet1.mp4'),
      mode: 'contain',
      paused: false,
      repeat: true,
    },
    {
      id: 2,
      require: require('../assets/video/pet2.mp4'),
      mode: 'contain',
      paused: false,
      repeat: true,
    },
    {
      id: 3,
      require: require('../assets/video/pet3.mp4'),
      mode: 'contain',
      paused: false,
      repeat: true,
    },
    {
      id: 4,
      require: require('../assets/video/pet4.mp4'),
      mode: 'contain',
      paused: false,
      repeat: true,
    },
  ];

  const RainbowSheetPage = ({item}: {item: any}) => {
    return (
      <View
        style={{
          width: 350,
          height: 300,
          borderRadius: 10,
          overflow: 'hidden',
        }}>
        <Image
          key={item.id}
          source={item.require}
          style={{
            resizeMode: item.resizeMode,
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}
        />
      </View>
    );
  };

  const RainbowSheet = [
    {
      id: 1,
      require: require('../assets/image/banner/1.jpg'),
      resizeMode: 'cover',
    },
    {
      id: 2,
      require: require('../assets/image/banner/2.jpg'),
      resizeMode: 'cover',
    },
    {
      id: 3,
      require: require('../assets/image/banner/3.jpg'),
      resizeMode: 'cover',
    },
    {
      id: 4,
      require: require('../assets/image/banner/4.jpg'),
      resizeMode: 'cover',
    },
    {
      id: 5,
      require: require('../assets/image/banner/5.jpg'),
      resizeMode: 'cover',
    },
    {
      id: 6,
      require: require('../assets/image/banner/6.jpg'),
      resizeMode: 'cover',
    },
  ];

  useEffect(() => {
    setSlideTime(10);
  }, []);

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <Carousel
        page={page}
        setPage={setPage}
        gap={15}
        data={RainbowSheet}
        pageWidth={wp(90)}
        RenderItem={RainbowSheetPage}
      />
      <Text
        style={{
          width: wp(100),
          height: hp(5),
          marginLeft: wp(5),
          fontSize: hp(3),
          marginTop: hp(3),
        }}>
        인기 동영상
      </Text>
      <Swiper
        autoplay
        showsPagination={false}
        autoplayTimeout={slideTime}
        style={{marginTop: hp(-12)}}>
        {swiperData.map((item: any) => {
          return (
            <View
              key={item.id}
              style={{
                width: wp(100),
                height: hp(50),
              }}>
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
  partScreen: {
    height: '100%',
    width: '100%',
  },
});

export default Home;
