import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {LocalImage, normalize} from '../../utils';
import CustomButton from '../../components/SocialButton';

export default function SignupScreen({navigation}: any) {
  return (
    <View style={styles.BackgroundMainImg}>
      <ImageBackground
        source={LocalImage.SignupBackgroundImg}
        style={styles.ImgBgStyle}>
        <Image
          source={LocalImage.SignupSnackImg}
          style={styles.snackImgStyle}
        />
        <View style={{height: normalize(218), width: normalize(390)}}></View>
        <CustomButton
          containerStyle={styles.facebook_btn}
          title="Sign In With facebook"
        />
        <CustomButton containerStyle={styles.google_btn} title="Sign In With Google" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  BackgroundMainImg: {
    flex: 1,
  },
  ImgBgStyle: {flex: 1},
  snackImgStyle: {
    height: normalize(125),
    width: normalize(140),
    margin: normalize(125),
    marginTop: normalize(209),
  },
  facebook_btn: {
    backgroundColor: '#1a77f2',
  },

  google_btn:{
      backgroundColor:'white'
  }
});
