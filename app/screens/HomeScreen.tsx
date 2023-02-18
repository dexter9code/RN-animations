import {useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Linking,
  Alert,
  Button,
  Modal,
} from 'react-native';
import UpdateModalScreen from './UpdateModal';

const supportedURL = 'https://google.com';

const HomeScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(supportedURL);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(supportedURL);
    } else {
      Alert.alert(`Don't know how to open this URL: ${supportedURL}`);
    }
  }, [supportedURL]);
  return (
    <View style={styles.root}>
      <UpdateModalScreen isVisible={isOpen} />
      <Text style={styles.text}>HOME-SCREEN BITCHs</Text>
      <Button title="Open" onPress={handlePress} color="orangered" />
      <Button
        title="check update"
        onPress={() => setIsOpen(true)}
        color="tomato"
      />
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'dodgerblue',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
