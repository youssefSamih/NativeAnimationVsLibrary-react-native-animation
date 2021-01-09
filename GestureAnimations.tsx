import React from 'react';
import {View} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {
  usePanGestureHandler,
  withOffset,
} from 'react-native-redash/lib/module/v1';
import {styles} from './style';

const GestureAnimations = () => {
  const {gestureHandler, translation, state} = usePanGestureHandler();
  const translateX = withOffset(translation.x, state);
  const translateY = withOffset(translation.y, state);
  return (
    <View style={styles.container}>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={[styles.ball, {transform: [{translateX}, {translateY}]}]}
        />
      </PanGestureHandler>
    </View>
  );
};

export default GestureAnimations;
