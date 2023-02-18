import {View, Modal, StyleSheet, Text} from 'react-native';

type UpdateModalProps = {
  isVisible: boolean;
};

const UpdateModalScreen = ({isVisible}: UpdateModalProps) => {
  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.root}>
        <Text style={styles.text}>UPDATE the APP</Text>
      </View>
    </Modal>
  );
};
export default UpdateModalScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ccc',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
});
