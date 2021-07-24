import React, { useRef } from "react";
import { Animated, View } from "react-native";

interface FadingViewProps {
  style?: any;
  children: React.ReactNode;
}

const FadingView = (props: FadingViewProps): JSX.Element => {
  // Initial value for opacity: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[props.style, { opacity: fadeAnim }]}>
      {props.children}
    </Animated.View>
  );
};

export default FadingView;
