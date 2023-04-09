import {useState} from 'react';
import {
  Image,
  ImageRequireSource,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/reducer';

type SearchProsp = {
  item: {
    id: number;
    images: ImageRequireSource;
    type: number;
  };
};

function Class() {
  const dispatch = useDispatch();
  const videoState = useSelector((state: RootState) => state.index.videoState);
  const [searchState, setSearchState] = useState(false);
  const [tabbarData, setTabbarData] = useState([
    {id: 0, title: '일반피드', isActive: false},
    {id: 1, title: '산책피드', isActive: false},
  ]);

  const searchData = [
    {
      id: 0,
      images: [
        require('../assets/image/feed/1.png'),
        require('../assets/image/feed/2.png'),
        require('../assets/image/feed/3.png'),
        require('../assets/image/feed/4.png'),
        require('../assets/image/feed/5.png'),
      ],
    },
    {
      id: 1,
      images: [
        require('../assets/image/feed/6.png'),
        require('../assets/image/feed/7.png'),
        require('../assets/image/feed/8.png'),
        require('../assets/image/feed/9.png'),
        require('../assets/image/feed/10.png'),
      ],
    },
    {
      id: 2,
      images: [
        require('../assets/image/feed/11.png'),
        require('../assets/image/feed/12.png'),
        require('../assets/image/feed/13.png'),
        require('../assets/image/feed/14.png'),
        require('../assets/image/feed/15.png'),
      ],
    },
    {
      id: 3,
      images: [
        require('../assets/image/feed/16.png'),
        require('../assets/image/feed/17.png'),
        require('../assets/image/feed/18.png'),
        require('../assets/image/feed/19.png'),
        require('../assets/image/feed/20.png'),
      ],
    },
  ];
  // 검색창 상태
  const onChangeSearchState = () => {
    setSearchState(prev => !prev);
    console.log(searchState);
  };

  //일반피드, 산책피드
  const tabBar = tabbarData.map((item, index) => {
    return (
      <Pressable key={item.id} onPress={() => onActiveTabbar(index)}>
        <View style={item.isActive ? styles.tabBarActive : styles.tabBar}>
          <Text style={item.isActive ? styles.tabBarFontActive : styles.tabBarFont}>{item.title}</Text>
        </View>
      </Pressable>
    );
  });

  // 일반피드, 산책피드 active
  const onActiveTabbar = (index: number) => {
    const data = tabbarData.map((item, idx) =>
      idx === index ? {...item, isActive: true} : {...item, isActive: false},
    );
    setTabbarData(data);
  };

  //
  const feedContent = searchData.map(data => {
    return (
      <>
        {data.id === 0 ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'space-between',
            }}>
            <View
              style={{
                width: 261,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              {data.images.slice(0, 4).map(imageData => {
                return (
                  <TouchableOpacity style={{paddingBottom: 2}} activeOpacity={0.8}>
                    <Image
                      source={imageData}
                      style={{
                        width: 129,
                        height: 150,
                      }}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
            <TouchableOpacity style={{marginLeft: 2}} activeOpacity={0.8}>
              <Image source={data.images[4]} style={{width: 129, height: 302}} resizeMode="stretch" />
            </TouchableOpacity>
          </View>
        ) : null}
        {data.id === 1 ? (
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity style={{paddingRight: 2}} activeOpacity={0.8}>
              <Image source={data.images[1]} style={{width: 129, height: 302}} />
            </TouchableOpacity>
            <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: 261}}>
              {data.images.slice(0, 4).map(imageData => {
                return (
                  <TouchableOpacity style={{paddingBottom: 2}} activeOpacity={0.8}>
                    <Image source={imageData} style={{width: 129, height: 150}} />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        ) : null}
        {data.id === 2 ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'space-between',
            }}>
            <View
              style={{
                width: 261,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              {data.images.slice(0, 4).map(imageData => {
                return (
                  <TouchableOpacity style={{paddingBottom: 2}} activeOpacity={0.8}>
                    <Image
                      source={imageData}
                      style={{
                        width: 129,
                        height: 150,
                      }}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
            <TouchableOpacity style={{marginLeft: 2}} activeOpacity={0.8}>
              <Image source={data.images[4]} style={{width: 129, height: 302}} resizeMode="stretch" />
            </TouchableOpacity>
          </View>
        ) : null}
        {data.id === 3 ? (
          <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity style={{paddingRight: 2}} activeOpacity={0.8}>
                <Image source={data.images[1]} style={{width: 129, height: 302}} />
              </TouchableOpacity>
              <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: 261}}>
                {data.images.slice(0, 4).map(imageData => {
                  return (
                    <TouchableOpacity style={{paddingBottom: 2}} activeOpacity={0.8}>
                      <Image source={imageData} style={{width: 129, height: 150}} />
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
            <View style={{paddingBottom: hp(10)}} />
          </View>
        ) : null}
      </>
    );
  });

  return (
    <SafeAreaView style={{backgroundColor: '#ffffff', height: hp(100)}}>
      <ScrollView>
        <SearchBar onChangeSearchState={onChangeSearchState} searchState={searchState} />
        <View
          style={{flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: wp(20), marginTop: hp(3)}}>
          {tabBar}
        </View>
        <View style={{marginTop: hp(3)}}>{feedContent}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    width: wp(25),
    height: hp(5),
    borderWidth: wp(0.3),
    borderRadius: wp(5),
    borderColor: '#e5e5e5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarActive: {
    width: wp(25),
    height: hp(5),
    borderWidth: wp(0.3),
    borderRadius: wp(5),
    borderColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarFontActive: {
    fontFamily: 'NotoSansKR-Light',
    color: 'blue',
    fontSize: hp(1.5),
  },
  tabBarFont: {
    fontFamily: 'NotoSansKR-Light',
    color: '#333',
    fontSize: hp(1.5),
  },
  defaultImage: {
    width: wp(33),
    height: hp(20),
  },
  specialImage: {
    width: wp(33),
    height: hp(40),
  },
});

export default Class;
