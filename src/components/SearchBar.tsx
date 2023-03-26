import {useCallback, useRef, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

type eventProps = {
  searchState: boolean;
  onChangeSearchState: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function SearchBar({onChangeSearchState, searchState}: eventProps) {
  const [searchText, setSearchText] = useState('');
  const searchTextRef = useRef<TextInput | null>(null);
  const onChangeSearchText = useCallback((text: string) => {
    setSearchText(text.trim());
    console.log(text);
  }, []);
  const searchTextDelete = () => {
    setSearchText('');
  };

  return searchState ? (
    <View>
      <View
        style={{
          marginHorizontal: wp(3),
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'space-between',
        }}>
        <Pressable onPress={onChangeSearchState}>
          <View
            style={{
              height: hp(5),
              marginTop: hp(2),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={require('../assets/image/icon/left.png')} style={{width: 30, height: 30}} />
          </View>
        </Pressable>
        <View>
          <View
            style={{
              width: wp(84),
              height: hp(5),
              backgroundColor: '#e3e3e3',
              marginTop: hp(2),
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: wp(3),
            }}>
            <View style={{height: hp(5), alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('../assets/image/icon/search.png')} style={{width: 15, height: 15}} />
            </View>
            <View>
              <TextInput
                style={styles.textInput}
                onChangeText={onChangeSearchText}
                placeholder="검색"
                value={searchText}
                returnKeyType="next"
                clearButtonMode="while-editing"
                textContentType="name"
                ref={searchTextRef}
                onSubmitEditing={() => searchTextRef.current?.focus()}
                blurOnSubmit={false}
              />
            </View>
            <Pressable onPress={searchTextDelete}>
              <View style={{marginLeft: wp(3), height: hp(5), alignContent: 'center', justifyContent: 'center'}}>
                <Image source={require('../assets/image/icon/x.png')} style={{width: 10, height: 10}} />
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  ) : (
    <View>
      <Pressable onPress={onChangeSearchState}>
        <View
          style={{
            width: wp(94),
            height: hp(5),
            backgroundColor: '#e3e3e3',
            marginLeft: wp(2.5),
            marginTop: hp(2),
            borderRadius: 10,
            flexDirection: 'row',
            paddingHorizontal: wp(3),
          }}>
          <View style={{marginTop: hp(1.25)}}>
            <Image source={require('../assets/image/icon/search.png')} style={{width: 15, height: 15}} />
          </View>
          <View style={{marginLeft: wp(3), marginTop: hp(-1), justifyContent: 'center'}}>
            <Text style={styles.textLight}>검색</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  textBold: {
    fontFamily: 'NotoSansKR-Bold',
    color: '#333',
    fontSize: hp(2.5),
  },
  textLight: {
    fontFamily: 'NotoSansKR-Light',
    color: '#333',
    fontSize: hp(2.5),
  },
  textInput: {
    width: wp(63),
    height: hp(4),
    alignItems: 'center',
    padding: 0,
    fontSize: hp(2.5),
    marginLeft: wp(3),
  },
});

export default SearchBar;
