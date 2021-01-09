import React from 'react';
import {View} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {styles} from './style';

const GestureAnimations = () => {
  return (
    <View style={styles.container}>
      <PanGestureHandler>
        <Animated.View style={styles.ball} />
      </PanGestureHandler>
    </View>
  );
};

export default GestureAnimations;
