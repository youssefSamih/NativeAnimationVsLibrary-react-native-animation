import React, {useEffect} from 'react';
import {View, Animated, PanResponder} from 'react-native';
import {styles} from './style';

const VanillaAnimation = () => {
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: () => true, // tell iOS that we allow dragging
    onPanResponderGrant: () => {
      position.setOffset({
        x: ((position.x as unknown) as {_value: number})._value,
        y: ((position.y as unknown) as {_value: number})._value,
      });
      position.setValue({x: 0, y: 0});
    },
    onPanResponderMove: Animated.event([
      null,
      {dx: position.x, dy: position.y},
    ]), // Creates a function to handle the movement and set offsets
    onPanResponderRelease: () => {
      position.flattenOffset(); //Flatten the offset so it resets the default positioning
    },
  });
  // useEffect(() =>
  //   new Array(51111).fill(0).map(() => console.log('JS thread busy!')),
  // ); // do some memory leak to keep javascript thread busy
  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.ball, position.getLayout()]}
        {...panResponder.panHandlers}
      />
    </View>
  );
};

export default VanillaAnimation;
