import React, { useState, useRef } from "react";
import Carousel from "react-native-snap-carousel";

import { View, Text } from "react-native";

interface CarouselProps {
  dataItems: Object[];
}

const HomeCarousel = (props: CarouselProps): JSX.Element => {
  const carouRef = useRef(null);
  const [active, setActive] = useState<Number>();

  const _renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "floralwhite",
          borderRadius: 5,
          height: 250,
          padding: 50,
        }}
      >
        <Text style={{ fontSize: 30 }}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  };

  return (
    <Carousel
      layout={"default"}
      ref={carouRef}
      data={props.dataItems}
      sliderWidth={400}
      itemWidth={300}
      renderItem={_renderItem}
      onSnapToItem={(index) => setActive(index)}
    />
  );
};

export default HomeCarousel;
