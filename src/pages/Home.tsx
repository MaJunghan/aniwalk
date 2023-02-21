import React, {useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View, Dimensions, ScrollView, Pressable} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import {useDispatch} from 'react-redux';
import Reels from '../components/Reels';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducer';
import indexSlice from '../slices';

function Home() {
  const dispatch = useDispatch();
  const [bannerPage, setBannerPage] = useState(0);
  console.log(bannerPage, 'wqewqesert');

  const [page, setPage] = useState(0);
  const videoState = useSelector((state: RootState) => state.index.videoState);

  const RainbowSheet = [
    {
      id: 0,
      require: require('../assets/image/banner/banner1.png'),
      resizeMode: 'cover',
      video: require('../assets/video/tv.mp4'),
      title: '등장과 동시에 충격 그자체였던 벌스모음',
      nickName: 'nickName1',
      likes: 245,
      isLike: false,
    },
    {
      id: 1,
      require: require('../assets/image/banner/banner2.png'),
      resizeMode: 'cover',
      video: require('../assets/video/bird.mp4'),
      title: 'Test2',
      nickName: 'nickName2',
      likes: 245,
      isLike: false,
    },
    {
      id: 2,
      require: require('../assets/image/banner/banner3.png'),
      resizeMode: 'cover',
      video: require('../assets/video/pet2.mp4'),
      title: 'Test3',
      nickName: 'nickName3',
      likes: 245,
      isLike: false,
    },
    {
      id: 3,
      require: require('../assets/image/banner/banner4.jpg'),
      resizeMode: 'cover',
      video: require('../assets/video/pet3.mp4'),
      title: 'Test4',
      nickName: 'nickName4',
      likes: 245,
      isLike: false,
    },
    {
      id: 4,
      require: require('../assets/image/banner/banner5.jpg'),
      resizeMode: 'cover',
      video: require('../assets/video/pet4.mp4'),
      title: 'Reels1',
      nickName: 'nickName5',
      likes: 245,
      isLike: false,
    },
  ];

  const onChangeVideoState = (item: any) => {
    dispatch(indexSlice.actions.onChangeVideoState(!videoState));
    console.log(item, '여기에 나중에 영상추가 로직만들어야함.');
  };

  const swiperDataList = ({item}: {item: any}) => {
    return (
      <Pressable onPress={() => onChangeVideoState(item)}>
        <View
          style={{
            width: wp(85),
            height: hp(55),
            borderRadius: 10,
            marginBottom: hp(10),
            overflow: 'hidden',
          }}>
          <Image
            key={item.id}
            source={item.require}
            style={{
              resizeMode: 'stretch',
              width: Dimensions.get('window').width,
              height: hp(55),
            }}
          />
        </View>
      </Pressable>
    );
  };

  const rainbowSheetPage = ({item}: {item: any}) => {
    return (
      <View
        style={{
          width: wp(100),
          height: hp(20),
          marginBottom: hp(5),
          overflow: 'hidden',
        }}>
        <View style={{position: 'relative', flexDirection: 'row'}}>
          <Image
            key={item.id}
            source={item.require}
            style={{
              resizeMode: 'stretch',
              position: 'absolute',
              width: wp(100),
              height: hp(25),
            }}
          />
          <View
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(153, 153, 153, 0.5)',
              width: wp(10),
              height: hp(4),
              top: hp(13),
              right: wp(1),
              borderRadius: wp(5),
              overflow: 'hidden',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontSize: hp(1.5)}}>
              {bannerPage + 1} / {RainbowSheet.length}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const rainCoupleList = ({item}: {item: any}) => {
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

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <ScrollView scrollEnabled={true}>
        <Header />
        <View>
          <Carousel
            page={bannerPage}
            setPage={setBannerPage}
            gap={wp(0)}
            data={RainbowSheet}
            pageWidth={wp(100)}
            RenderItem={rainbowSheetPage}
          />
        </View>
        <View style={{height: hp(60)}}>
          <Carousel
            page={page}
            setPage={setPage}
            gap={wp(3)}
            data={RainbowSheet}
            pageWidth={wp(90)}
            RenderItem={swiperDataList}
          />
        </View>
        {videoState ? <Reels /> : null}
        <View style={{marginTop: hp(-1)}}>
          <Text style={styles.inputText}>이달의 Best Couple!</Text>
          <Carousel
            page={page}
            setPage={setPage}
            gap={wp(3)}
            data={RainbowSheet}
            pageWidth={wp(90)}
            RenderItem={rainCoupleList}
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
            RenderItem={rainCoupleList}
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
            RenderItem={rainCoupleList}
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
            RenderItem={rainCoupleList}
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
    width: wp(40),
    height: hp(30),
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
