import React from "react";
import {
  Animated,
  View,
  Text,
  Pressable,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { useCardAnimation } from "@react-navigation/stack";

// colors
import { Colors } from "./../components/Colors";
import MediumButton from "../components/MediumButton";
const { gray1 } = Colors;

interface ModalProps {
  navigation: any;
}

const Modal = ({ navigation }: ModalProps): JSX.Element => {
  const { colors } = useTheme();
  const { current } = useCardAnimation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Pressable
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        ]}
        onPress={navigation.goBack}
      />
      <Animated.View
        style={{
          padding: 16,
          width: "90%",
          maxWidth: 400,
          borderRadius: 3,
          backgroundColor: colors.card,
          transform: [
            {
              scale: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0.9, 1],
                extrapolate: "clamp",
              }),
            },
          ],
        }}
      >
        <Text>
          Mise en place is a French term that literally means “put in place.” It
          also refers to a way cooks in professional kitchens and restaurants
          set up their work stations—first by gathering all ingredients for a
          recipes, partially preparing them (like measuring out and chopping),
          and setting them all near each other. Setting up mise en place before
          cooking is another top tip for home cooks, as it seriously helps with
          organization. It’ll pretty much guarantee you never forget to add an
          ingredient and save you time from running back and forth from the
          pantry ten times.
        </Text>
        <MediumButton
          style={{ backgroundColor: gray1 }}
          buttonHandler={navigation.goBack}
        >
          Okay
        </MediumButton>
      </Animated.View>
    </View>
  );
};

export default Modal;
