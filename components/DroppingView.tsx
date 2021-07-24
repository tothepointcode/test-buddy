import React, { useRef } from "react";
import { Animated, View } from "react-native";

interface DroppingViewProps {
  style?: any;
  children: React.ReactNode;
}

const DroppingView = (props: DroppingViewProps): JSX.Element => {
  // Initial value for opacity: 0
  const dropAnim = useRef(new Animated.Value(-100)).current;

  React.useEffect(() => {
    Animated.timing(dropAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [dropAnim]);

  return (
    <Animated.View style={[props.style, { marginTop: dropAnim }]}>
      {props.children}
    </Animated.View>
  );
};

export default DroppingView;
