import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {Images} from './assets/images';
import {CARD_IMAGE_RATIO} from './constants';

const CardGesture = () => {
  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.x = x.value;
      ctx.y = y.value;
    },
    onActive: (event, ctx: any) => {
      x.value = ctx.x + event.translationX;
      y.value = ctx.y + event.translationY;
    },
    onEnd: () => {
      x.value = withSpring(0);
      y.value = withSpring(0);
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: x.value}, {translateY: y.value}],
    };
  });

  return (
    <GestureHandlerRootView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={Images.A}
        style={[
          styles.card,
          {
            zIndex: 0,
            transform: [{rotate: '-15deg'}, {translateX: -30}],
          },
        ]}
        resizeMode="contain"
      />
      <Image
        source={Images.eight}
        style={[styles.card, {zIndex: 1, transform: [{translateX: 0}]}]}
        resizeMode="contain"
      />
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={[animatedStyle, styles.card, {zIndex: 2}]}>
          <Image
            source={Images.back}
            style={[styles.card, {zIndex: 2}]}
            resizeMode="contain"
          />
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

export default CardGesture;

const styles = StyleSheet.create({
  card: {
    aspectRatio: CARD_IMAGE_RATIO,
    borderWidth: 0.5,
    width: 200,
    height: 'auto',
    borderColor: 'grey',
    position: 'absolute',
    borderRadius: 20,
  },
});
