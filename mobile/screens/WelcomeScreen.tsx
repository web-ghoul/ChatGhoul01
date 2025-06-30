import SliderSection from '@/sections/SliderSection';
import React, { useRef, useState } from 'react';
import { FlatList } from 'react-native';

const slides = [
  {
    id: '1',
    image: require('../assets/images/have_fun.png'),
    title: 'Have Fun',
    description: 'engage in enjoyable activities and creating memorable moments.',
  },
  {
    id: '2',
    image: require('../assets/images/meet_friends.png'),
    title: 'Meet New People',
    description: 'Opens doors to fresh prespectives and potential friendships.',
  },
  {
    id: '3',
    image: require('../assets/images/send_msg.png'),
    title: 'Chat With Friedns',
    description: 'Share your thoughts, and express your feelings without any reservations.',
  },
];

const WelcomeScreen = () => {
  const flatListRef = useRef<FlatList<any>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollToNext = () => {
    if (flatListRef.current && currentIndex < slides.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  const scrollToPrev = () => {
    if (flatListRef.current && currentIndex > 0) {
      flatListRef.current.scrollToIndex({ index: currentIndex - 1 });
    }
  };

  return (
    <FlatList
      ref={flatListRef}
      data={slides}
      horizontal
      pagingEnabled
      scrollEnabled={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <SliderSection index={index} image={item.image} title={item.title} description={item.description} scrollToNext={scrollToNext} scrollToPrev={scrollToPrev} />
      )}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
    />
  );
};

export default WelcomeScreen;
