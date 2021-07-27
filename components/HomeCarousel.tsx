import React, { useState, useRef } from "react";
import Carousel from "react-native-snap-carousel";

import { View, Text, Image } from "react-native";

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
          backgroundColor: "#fff",
          borderRadius: 15,
          height: 300,
        }}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover",
            borderRadius: 15,
          }}
          source={{ uri: item.img }}
        />
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
