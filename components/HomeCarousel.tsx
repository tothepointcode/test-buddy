import React, { useState, useRef } from "react";
import Carousel from "react-native-snap-carousel";

import { View, Text, Image } from "react-native";
// colors
import { Colors } from "./../components/Colors";
const { gray1, gray2, black, white, dark1 } = Colors;

interface CarouselProps {
  dataItems: Object[];
  type: string | any;
}

const HomeCarousel = (props: CarouselProps): JSX.Element => {
  const carouRef = useRef(null);
  const [active, setActive] = useState<Number>();

  const _renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: white,
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
        <View
          style={{
            backgroundColor: gray2,
            borderRadius: 15,
            alignItems: "center",
            marginTop: 10,
            padding: 5,
          }}
        >
          <Text style={{ fontSize: 30, color: white }}>{item.title}</Text>
          <Text style={{ color: white }}>{item.text}</Text>
        </View>
      </View>
    );
  };

  return (
    <Carousel
      layout={props.type}
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
