import React, {useRef} from 'react';
import {View, Text, Animated, StyleSheet, Button} from 'react-native';

const TestAnimation = () => {
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const onPressHandler = () => {
    Animated.timing(fadeAnimation, {
      toValue: 130,
      duration: 600,
      useNativeDriver: false,
    }).start(() => {
      Animated.spring(fadeAnimation, {
        toValue: 0,
        useNativeDriver: false,
        damping: 300,
      }).start();
    });
  };
  return (
    <View style={styles.root}>
      <Animated.View
        style={[
          styles.box,
          {
            transform: [{translateX: fadeAnimation}],
            opacity: fadeAnimation.interpolate({
              inputRange: [0, 100],
              outputRange: [0, 1],
              extrapolate: 'clamp',
            }),
            backgroundColor: fadeAnimation.interpolate({
              inputRange: [0, 130],
              outputRange: ['#aadfe0', '#00adef'],
            }),
          },
        ]}
      />

      <Button onPress={onPressHandler} title="start" />
    </View>
  );
};

export default TestAnimation;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#aadfe0',
  },
});
