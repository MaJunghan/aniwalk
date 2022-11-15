import React, {useState, useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Video from 'react-native-video';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Carousel from '../components/Carousel';

function Home() {
  const [slideTime, setSlideTime] = useState(14); // 초기 슬라이딩 시간 1초
  const [page, setPage] = useState(0);

  // paused : 일시중지여부 , repeat : 반복여부
  const swiperData: any = [
    {
      id: 0,
      require: require('../assets/video/tv.mp4'),
      mode: 'contain',
      paused: false,
      repeat: false,
    },
    {
      id: 1,
      require: require('../assets/video/bird.mp4'),
      mode: 'contain',
      paused: false,
      repeat: false,
    },
    {
      id: 2,
      require: require('../assets/video/pet2.mp4'),
      mode: 'contain',
      paused: false,
      repeat: false,
    },
    {
      id: 3,
      require: require('../assets/video/pet3.mp4'),
      mode: 'contain',
      paused: false,
      repeat: false,
    },
    {
      id: 4,
      require: require('../assets/video/pet4.mp4'),
      mode: 'contain',
      paused: false,
      repeat: true,
    },
  ];

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

  const RainbowSheetPage = ({item}: {item: any}) => {
    return (
      <View
        style={{
          width: wp(90),
          height: hp(20),
          borderRadius: 10,
          marginBottom: hp(10),
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

  const RainCoupleList = ({item}: {item: any}) => {
    return (
      <View
        style={{
          width: wp(30),
          height: hp(20),
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

  const onMomentumScrollEnd = () => {
    console.log('scroll');
  };

  useEffect(() => {
    setSlideTime(10);
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView style={styles.scrollView}>
        <View>
          <Text style={styles.inputText}>Banner</Text>
          <Carousel
            page={page}
            setPage={setPage}
            gap={wp(3)}
            data={RainbowSheet}
            pageWidth={wp(90)}
            RenderItem={RainbowSheetPage}
          />
        </View>
        <View>
          <Text style={styles.inputText}>Hot Video</Text>
          <Swiper
            autoplay
            showsPagination={false}
            autoplayTimeout={slideTime}
            onMomentumScrollEnd={onMomentumScrollEnd}>
            {swiperData.map((item: any) => {
              return (
                <View
                  key={item.id}
                  style={{
                    width: wp(100),
                    height: hp(50),
                    marginTop: hp(-12),
                    borderRadius: 20,
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
        </View>
        <View style={{marginTop: hp(-60)}}>
          <Text style={styles.inputText}>이달의 Best Couple!</Text>
          <Carousel
            page={page}
            setPage={setPage}
            gap={wp(15)}
            data={RainbowSheet}
            pageWidth={wp(90)}
            RenderItem={RainCoupleList}
          />
        </View>
        <View style={{marginTop: hp(1)}}>
          <Text style={styles.inputText}>이달의 Best MeMe!</Text>
          <Carousel
            page={page}
            setPage={setPage}
            gap={wp(15)}
            data={RainbowSheet}
            pageWidth={wp(90)}
            RenderItem={RainCoupleList}
          />
        </View>
        <View style={{marginTop: hp(1)}}>
          <Text style={styles.inputText}>이달의 Best 산책로!</Text>
          <Carousel
            page={page}
            setPage={setPage}
            gap={wp(15)}
            data={RainbowSheet}
            pageWidth={wp(90)}
            RenderItem={RainCoupleList}
          />
        </View>
        <View style={{marginTop: hp(1)}}>
          <Text style={styles.inputText}>이달의 Best 집사!</Text>
          <Carousel
            page={page}
            setPage={setPage}
            gap={wp(15)}
            data={RainbowSheet}
            pageWidth={wp(90)}
            RenderItem={RainCoupleList}
          />
        </View>
        <View style={{marginTop: hp(10)}} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  inputText: {
    width: wp(100),
    height: hp(5),
    marginLeft: wp(5),
    fontSize: hp(3),
    marginTop: hp(3),
    fontFamily: 'DancingScript-Bold',
    color: 'black',
  },
  partScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default Home;
