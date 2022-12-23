import React from 'react';
import {Dimensions, FlatList, Pressable, View} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const {width} = Dimensions.get('window');
type CarouselProps = {
  gap: number;
  RenderItem: ({page, item}: {page: number; item: any}) => JSX.Element;
  pageWidth: number;
  data: any[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  contentOffset?: {x: number; y: number};
};

const Carousel = ({gap, RenderItem, pageWidth, data, page, setPage, contentOffset}: CarouselProps) => {
  const onScroll = (e: any) => {
    const newPage = Math.round(e.nativeEvent.contentOffset.x / (pageWidth + gap));
    setPage(newPage);
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <FlatList
        contentContainerStyle={{
          paddingHorizontal: (width - pageWidth - gap) / 2,
        }}
        contentOffset={contentOffset}
        onScroll={onScroll}
        decelerationRate="fast"
        snapToInterval={pageWidth + gap}
        snapToAlignment="start"
        pagingEnabled
        horizontal
        keyExtractor={item => String(item.id)}
        data={data}
        renderItem={({item}: any) => (
          <View
            style={{
              marginHorizontal: gap / 2,
              marginTop: heightPercentageToDP(1),
            }}>
            <RenderItem page={page} item={item} />
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Carousel;
