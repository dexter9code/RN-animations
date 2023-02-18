import React from 'react';
import {StyleSheet, Pressable, Text} from 'react-native';

type CustomBtnProps = {
  btnTitle: string;
  onPressBtn: () => void;
};

const CustomBtn = ({btnTitle, onPressBtn}: CustomBtnProps) => {
  return (
    <Pressable style={styles.root_container} onPress={onPressBtn}>
      <Text style={styles.btn_text}>{btnTitle}</Text>
    </Pressable>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({
  root_container: {
    width: '80%',
    backgroundColor: '#e74ffe',
    padding: 12,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
  },
  btn_text: {
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#f7f7f7',
    fontSize: 18,
  },
  pressed_feedback: {
    opacity: 0.9,
  },
});
