import React, { useRef } from "react";
import { Animated } from "react-native";

interface ColorModViewProps {
  style?: any;
  children: React.ReactNode;
  color1: string;
  color2: string;
  color3: string;
}

const ColorModView = (props: ColorModViewProps): JSX.Element => {
  // Initial value for opacity: 0
  const dropAnim = useRef(new Animated.Value(-100)).current;

  React.useEffect(() => {
    Animated.timing(dropAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, [dropAnim]);

  return (
    <Animated.View
      style={[
        props.style,
        {
          marginTop: dropAnim,
          backgroundColor: dropAnim.interpolate({
            inputRange: [-100, -50, 0],
            outputRange: [props.color1, props.color2, props.color3],
          }),
          opacity: dropAnim.interpolate({
            inputRange: [-100, 0],
            outputRange: [0, 1],
          }),
        },
      ]}
    >
      {props.children}
    </Animated.View>
  );
};

export default ColorModView;
