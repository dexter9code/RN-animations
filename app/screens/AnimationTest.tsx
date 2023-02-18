import {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TextInput,
  Button,
} from 'react-native';

const AnimationTest = () => {
  const shakeAnimation = useRef(new Animated.Value(0)).current;
  const [name, setName] = useState('');

  const onChangeHandler = (e: string) => {
    setName(e);
  };
  const onPressHandler = () => {
    Animated.timing(shakeAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <View style={styles.root}>
      <Text>USERNAME</Text>
      <TextInput
        value={name}
        onChangeText={onChangeHandler}
        placeholder="Enter Name"
        style={[styles.text_input]}
      />
      <Animated.View
        style={[
          {backgroundColor: 'orangered', transform: [{scale: shakeAnimation}]},
        ]}>
        <Text>ORANGE</Text>
      </Animated.View>
      <Button title="SHOW" onPress={onPressHandler} />
    </View>
  );
};

export default AnimationTest;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_input: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.8,
    width: '80%',
  },
});
