import {useRef, useState, useEffect} from 'react';
import {View, StyleSheet, Text, Animated} from 'react-native';

type ProgressProps = {
  steps: number;
  step: number;
  height: number;
};

const Progress = ({steps, step, height}: ProgressProps) => {
  const animatedValue = useRef(new Animated.Value(-1000)).current;
  const reactive = useRef(new Animated.Value(-1000)).current;
  const [width, setWidth] = useState(0);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, []);

  useEffect(() => {
    reactive.setValue(-width + (width * step) / steps);
  }, [step, width]);

  return (
    <>
      <Text
        style={{
          fontFamily: 'Menlo',
          fontSize: 12,
          fontWeight: '900',
          marginBottom: 0,
        }}>
        {step}/{steps}
      </Text>
      <View
        onLayout={e => {
          const new_width = e.nativeEvent.layout.width;
          setWidth(new_width);
        }}
        style={{
          height,
          backgroundColor: 'rgba(0,0,0,0.1)',
          borderRadius: height,
          overflow: 'hidden',
          width: 300,
        }}>
        <Animated.View
          style={{
            height,
            width: 300,
            borderRadius: height,
            backgroundColor: 'rgba(0,0,0,0.5)',
            position: 'absolute',
            left: 0,
            top: 0,
            transform: [{translateX: animatedValue}],
          }}
        />
      </View>
    </>
  );
};

const ProgressAnimation = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % (10 + 1));
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [index]);
  return (
    <View style={styles.root}>
      <Progress step={index} steps={10} height={20} />
    </View>
  );
};

export default ProgressAnimation;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
});
