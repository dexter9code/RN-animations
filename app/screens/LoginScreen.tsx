import {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
  ImageBackground,
  Pressable,
  Animated,
  Platform,
} from 'react-native';
import CustomBtn from '../components/CustomBtn';
import {colors} from '../constants/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const LoginScreen = ({navigation}: any) => {
  const insets = useSafeAreaInsets();
  const currentStatusbarHeight = insets.top;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const emailAnimationSpring = useRef(new Animated.Value(1)).current;
  const passwordAnimationSpring = useRef(new Animated.Value(1)).current;

  const onChangeEmailHandler = (e: string) => {
    setEmailError(false);
    setEmail(e);
  };
  const onChangePasswordHandler = (e: string) => {
    setPasswordError(false);
    setPassword(e);
  };

  const onEmailBlurHandler = () => {
    if (!email.includes('@')) {
      setEmailError(true);
    }
  };
  const onPasswordBlurHandler = () => {
    if (password.length >= 7) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  const emailAnimationStart = () => {
    Animated.spring(emailAnimationSpring, {
      toValue: 1.1,
      useNativeDriver: false,
      speed: 15,
      //   damping: 16,`
    }).start(() => {
      Animated.spring(emailAnimationSpring, {
        toValue: 1,
        speed: 15,
        useNativeDriver: false,
        // damping: 16,
      }).start();
    });
  };
  const passwordAnimationStart = () => {
    Animated.spring(passwordAnimationSpring, {
      toValue: 1.1,
      useNativeDriver: false,
      speed: 15,
      //   damping: 16,
    }).start(() => {
      Animated.spring(passwordAnimationSpring, {
        toValue: 1,
        speed: 15,
        useNativeDriver: false,
        // damping: 16,
      }).start();
    });
  };

  function onSubmitHandler() {
    if (email.length === 0 || !email.includes('@')) {
      emailAnimationStart();
      setEmailError(true);
    }

    if (password.length === 0 || password.length < 7) {
      passwordAnimationStart();
      setPasswordError(true);
    }
    if (email.includes('@') && password.length >= 7) {
      console.log(`Logged In`);
    }
  }

  const onPressNavigation = () => {
    console.log(`Button Pressed`);
    navigation.navigate('sign_up');
  };

  return (
    <View style={styles.root}>
      <ImageBackground
        source={require('../assets/login_bg.jpg')}
        style={styles.img_background}
        resizeMode={'cover'}>
        <View
          style={[styles.image_container, {marginTop: currentStatusbarHeight}]}>
          <Image
            style={styles.img}
            source={{
              uri: `https://cdn-icons-png.flaticon.com/512/3408/3408455.png`,
            }}
          />
        </View>
        <View style={styles.welcome_container}>
          <Text style={styles.welcome_text}>Welcome Back</Text>
        </View>
        <View style={styles.inner_container}>
          <View style={styles.input_container}>
            <Animated.Text
              style={[
                styles.label_text,
                emailError && styles.error_label_text,
                {transform: [{scale: emailAnimationSpring}]},
              ]}>
              Email
            </Animated.Text>
            <TextInput
              placeholder="@example.com"
              keyboardType="email-address"
              style={[styles.input, emailError && styles.error_border]}
              placeholderTextColor={colors.offWhite}
              value={email}
              onChangeText={onChangeEmailHandler}
              onBlur={onEmailBlurHandler}
            />
          </View>
          <View style={styles.input_container}>
            <Animated.Text
              style={[
                styles.label_text,
                passwordError && styles.error_label_text,
                {
                  transform: [{scaleX: passwordAnimationSpring}],
                },
              ]}>
              Password
            </Animated.Text>
            <TextInput
              placeholder="Password"
              secureTextEntry
              style={[styles.input, passwordError && styles.error_border]}
              placeholderTextColor={colors.offWhite}
              value={password}
              onChangeText={onChangePasswordHandler}
              onBlur={onPasswordBlurHandler}
            />
          </View>
          <Pressable style={styles.forgot_container}>
            <Text style={styles.forgot_text}>Forgot Password?</Text>
          </Pressable>
          <CustomBtn btnTitle="Sign In" onPressBtn={onSubmitHandler} />
        </View>
        <View style={styles.navigate_container}>
          <Text style={styles.navigate_text}>Don't Have a account ?</Text>
          <Pressable onPress={onPressNavigation}>
            <Text style={styles.signup_text}>Sign up</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.dark_purple,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  img_background: {
    flex: 1,
    // justifyContent: 'center',
    // opacity: 0.8,
    // alignItems: 'center',
  },
  inner_container: {
    flex: 0.7,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  image_container: {
    width: '100%',
    overflow: 'hidden',
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 47,
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
  img: {
    width: 100,
    height: 100,
  },
  forgot_container: {
    justifyContent: 'flex-end',
    width: '90%',
    flexDirection: 'row',
  },
  forgot_text: {
    textDecorationLine: 'underline',
    paddingVertical: 4,
    fontStyle: 'italic',
    color: '#fff',
    fontWeight: '500',
  },
  error_border: {
    borderBottomColor: 'red',
  },
  test: {
    color: 'white',
  },
  error_label_text: {
    color: colors.roseRed,
  },
  welcome_container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  welcome_text: {
    color: colors.offWhite,
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 4,
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
  signup_text: {
    color: colors.offWhite,
    fontWeight: '600',
    fontSize: 16,
    fontStyle: 'italic',
  },
});
