import {useState} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SearchBar from '../components/SearchBar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function Class() {
  const [searchState, setSearchState] = useState(false);
  const [tabbarData, setTabbarData] = useState([
    {id: 0, title: '일반피드', isActive: false},
    {id: 1, title: '산책피드', isActive: false},
  ]);

  const onChangeSearchState = () => {
    setSearchState(prev => !prev);
    console.log(searchState);
  };

  const onActiveTabbar = (index: number) => {
    const data = tabbarData.map((item, idx) =>
      idx === index ? {...item, isActive: true} : {...item, isActive: false},
    );
    setTabbarData(data);
  };

  const tabBar = tabbarData.map((item, index) => {
    return (
      <Pressable key={item.id} onPress={() => onActiveTabbar(index)}>
        <View style={item.isActive ? styles.tabBarActive : styles.tabBar}>
          <Text style={item.isActive ? styles.tabBarFontActive : styles.tabBarFont}>{item.title}</Text>
        </View>
      </Pressable>
    );
  });

  return (
    <SafeAreaView style={{backgroundColor: '#ffffff', height: hp(100)}}>
      <SearchBar onChangeSearchState={onChangeSearchState} searchState={searchState} />
      <View
        style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: wp(10), marginTop: hp(1.5)}}>
        {tabBar}
      </View>
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
});

export default Class;
