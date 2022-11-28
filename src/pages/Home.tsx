import React, {useState, useEffect, useRef} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View, Dimensions, ScrollView, Platform, TextInput} from 'react-native';
import Swiper from 'react-native-swiper';
import Video from 'react-native-video';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Carousel from '../components/Carousel';
import Header from '../components/Header';

interface SwiperDataType {
  id: number;
  require: NodeRequire;
  mode: string;
  paused: boolean;
  repeat: boolean;
}

function Home() {
  const [slideTime, setSlideTime] = useState(14); // 초기 슬라이딩 시간 1초
  const [page, setPage] = useState(0);

  // paused : 일시중지여부 , repeat : 반복여부
  const swiperData: SwiperDataType[] = [
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
          height: hp(25),
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
          width: wp(43),
          height: hp(30),
          borderRadius: 10,
          overflow: 'hidden',
          backgroundColor: '#ffffff',
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

  useEffect(() => {
    setSlideTime(10);
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <ScrollView>
        <Header />
        <View>
          <Carousel
            page={page}
            setPage={setPage}
            gap={wp(3)}
            data={RainbowSheet}
            pageWidth={wp(90)}
            RenderItem={RainbowSheetPage}
          />
        </View>
        <View style={styles.video}>
          <Text style={styles.inputText}>Hot Video</Text>
          <Swiper
            autoplay
            showsPagination={false}
            autoplayTimeout={slideTime}
            onIndexChanged={() => console.log('출력되냐?')}>
            {swiperData.map((item: any) => {
              return (
                <View
                  key={item.id}
                  style={{
                    width: wp(100),
                    height: hp(60),
                    marginTop: hp(-40),
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
          <View style={Platform.OS === 'ios' ? styles.videoIconBoxIos : styles.videoIconBoxAnd}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/image/icon/love.png')}
                resizeMode={'contain'}
                style={styles.videoIcon}
              />
              <Image
                source={require('../assets/image/icon/speech.png')}
                resizeMode={'contain'}
                style={[styles.videoIcon, {marginLeft: wp(4)}]}
              />
              <Image
                source={require('../assets/image/icon/send.png')}
                resizeMode={'contain'}
                style={[styles.videoIcon, , {marginLeft: wp(4)}]}
              />
            </View>
            <Text
              style={{
                fontSize: wp(3),
                fontFamily: 'NotoSansKR-Light',
                color: '#999',
              }}>
              좋아요 101개
            </Text>
          </View>
          <View style={styles.comment}>
            <View style={styles.avatar}>
              <Image
                source={require('../assets/image/icon/avatar.webp')}
                resizeMode={'contain'}
                style={Platform.OS === 'ios' ? [styles.videoIcon, {marginLeft: wp(5)}] : styles.avatarAnd}
              />
              <TextInput placeholder="댓글 달기..." style={{marginLeft: wp(5)}} />
            </View>
          </View>
        </View>

        <View style={{marginTop: hp(-1)}}>
          <Text style={styles.inputText}>이달의 Best Couple!</Text>
          <Carousel
            page={page}
            setPage={setPage}
            gap={wp(3)}
            data={RainbowSheet}
            pageWidth={wp(90)}
            RenderItem={RainCoupleList}
          />
        </View>
        <View style={{marginTop: hp(-1)}}>
          <Text style={styles.inputText}>이달의 Best MeMe!</Text>
          <Carousel
            page={page}
            setPage={setPage}
            gap={wp(3)}
            data={RainbowSheet}
            pageWidth={wp(90)}
            RenderItem={RainCoupleList}
          />
        </View>
        <View style={{marginTop: hp(-1)}}>
          <Text style={styles.inputText}>이달의 Best 산책로!</Text>
          <Carousel
            page={page}
            setPage={setPage}
            gap={wp(3)}
            data={RainbowSheet}
            pageWidth={wp(90)}
            RenderItem={RainCoupleList}
          />
        </View>
        <View style={{marginTop: hp(-1)}}>
          <Text style={styles.inputText}>이달의 Best 집사!</Text>
          <Carousel
            page={page}
            setPage={setPage}
            gap={wp(3)}
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
  video: {
    marginTop: hp(-15),
  },
  videoIconBoxIos: {
    marginTop: hp(-77),
    flexDirection: 'row',
    height: hp(7),
    paddingHorizontal: wp(5),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  videoIconBoxAnd: {
    marginTop: hp(-74),
    flexDirection: 'row',
    height: hp(8),
    paddingHorizontal: wp(5),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  videoIcon: {
    width: wp(7),
    height: hp(7),
  },
  inputText: {
    width: wp(100),
    height: hp(10),
    marginLeft: wp(5),
    fontSize: hp(3),
    marginTop: hp(7),
    fontFamily: 'NotoSansKR-Light',
    color: 'black',
  },
  partScreen: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  comment: {
    marginTop: hp(2),
  },
  avatar: {
    flexDirection: 'row',
    marginTop: hp(-3),
  },
  avatarAnd: {
    width: wp(7),
    height: hp(7),
    marginLeft: wp(5),
    marginTop: hp(1),
  },
});

export default Home;
