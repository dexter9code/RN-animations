import React, {useState} from 'react';
import {
  Pressable,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  Image,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomBtn from '../components/CustomBtn';
import {colors} from '../constants/colors';

const SignupScreen = ({navigation}: any) => {
  const insets = useSafeAreaInsets();
  const currentStatusbarHeight = insets.top;

  function onSubmitHandler() {
    if (password !== confirmPassword) {
      setPasswordError(true);
      setConfirmPassError(true);
    }
    console.log(`pressed`);
  }
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPassError, setConfirmPassError] = useState(false);

  function emailValidation() {
    return email.includes('@');
  }
  function passwordValidation(str: string) {
    return str.length >= 7;
  }

  const onChangedEmailHandler = (e: string) => {
    setEmailError(false);
    setEmail(e);
  };
  const onChangedUsernameHandler = (e: string) => {
    setUsernameError(false);
    setUsername(e);
  };
  const onChangedPasswordHandler = (e: string) => {
    setPasswordError(false);
    setPassword(e);
  };
  const onChangedConfirmPasswordHandler = (e: string) => {
    setConfirmPassError(false);
    setConfirmPassword(e);
  };

  const onEmailBlurHandler = () => {
    if (emailValidation()) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const onUsernameBlurHandler = () => {
    if (username.length === 0) {
      setUsernameError(true);
    }
  };
  const onPasswordBlurHandler = () => {
    if (passwordValidation(password)) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  const onConfirmPasswordBlurHandler = () => {
    if (passwordValidation(confirmPassword)) {
      setConfirmPassError(false);
    } else {
      setConfirmPassError(true);
    }
  };
  const onNavigateHandler = () => {
    navigation.navigate('login');
  };

  return (
    <View style={styles.root_container}>
      <ImageBackground
        source={require('../assets/sign_bg.jpg')}
        style={styles.image_bg}>
        <View
          style={[{marginTop: currentStatusbarHeight}, styles.icon_container]}>
          <Image
            style={styles.img}
            source={{
              uri: `https://cdn-icons-png.flaticon.com/512/9068/9068651.png`,
            }}
            resizeMode={'cover'}
          />
        </View>
        <View style={styles.welcome_container}>
          <Text style={styles.welcome_text}>Register a New Account</Text>
        </View>
        <View style={styles.inner_container}>
          <View style={styles.input_container}>
            <Text style={styles.label_text}>Email</Text>
            <TextInput
              style={[styles.input, emailError && styles.error_border]}
              value={email}
              onBlur={onEmailBlurHandler}
              onChangeText={onChangedEmailHandler}
              placeholder="@example.com"
              placeholderTextColor={colors.offWhite}
            />
          </View>
          <View style={styles.input_container}>
            <Text style={styles.label_text}>Name</Text>
            <TextInput
              style={[styles.input, usernameError && styles.error_border]}
              value={username}
              onChangeText={onChangedUsernameHandler}
              placeholder="Username"
              placeholderTextColor={colors.offWhite}
              onBlur={onUsernameBlurHandler}
            />
          </View>
          <View style={styles.input_container}>
            <Text style={styles.label_text}>Password</Text>
            <TextInput
              style={[styles.input, passwordError && styles.error_border]}
              value={password}
              onChangeText={onChangedPasswordHandler}
              placeholder="⋆⋆⋆⋆⋆⋆⋆⋆"
              placeholderTextColor={colors.offWhite}
              onBlur={onPasswordBlurHandler}
            />
          </View>
          <View style={styles.input_container}>
            <Text style={styles.label_text}>Confirm Password</Text>
            <TextInput
              style={[styles.input, confirmPassError && styles.error_border]}
              value={confirmPassword}
              onChangeText={onChangedConfirmPasswordHandler}
              placeholder="⋆⋆⋆⋆⋆⋆⋆⋆"
              onBlur={onConfirmPasswordBlurHandler}
              placeholderTextColor={colors.offWhite}
            />
          </View>
          <CustomBtn btnTitle="Register" onPressBtn={onSubmitHandler} />
        </View>
        <View style={styles.navigate_container}>
          <Text style={styles.navigate_text}>Already a User? </Text>
          <Pressable onPress={onNavigateHandler}>
            <Text style={styles.login_text}>Login</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  root_container: {
    flex: 1,
    backgroundColor: `#060406`,
  },
  image_bg: {
    flex: 1,
  },
  icon_container: {
    flex: 0.14,
    width: '100%',
    overflow: 'hidden',
    alignItems: 'center',
    paddingTop: 8,
  },
  img: {
    width: 80,
    height: 80,
  },
  text: {
    color: colors.offWhite,
  },
  welcome_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 2,
  },
  welcome_text: {
    color: colors.offWhite,
    fontWeight: '600',
    fontSize: 18,
  },
  inner_container: {
    flex: 0.7,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  input_container: {
    // backgroundColor: 'dodgerblue',
    paddingHorizontal: 15,
    paddingVertical: 6,
    marginVertical: 5,
    width: '100%',
  },
  label_text: {
    color: colors.offWhite,
    fontWeight: '600',
    fontSize: 18,
  },
  input: {
    marginTop: 5,
    borderBottomWidth: 0.8,
    color: colors.offWhite,
    paddingVertical: 5,
    borderBottomColor: colors.offWhite,
  },
  navigate_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigate_text: {
    color: colors.offWhite,
    fontWeight: '600',
    fontSize: 16,
    marginRight: 4,
  },
  login_text: {
    color: colors.offWhite,
    fontWeight: '600',
    fontSize: 16,
    fontStyle: 'italic',
  },
  error_border: {
    borderBottomColor: colors.roseRed,
  },
});
