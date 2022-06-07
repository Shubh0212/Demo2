import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {normalize} from '../../utils';
import {LocalImage} from '../../utils';
import { CommanText } from '../../utils';
import Swiper from 'react-native-swiper';

export default function Home({navigation}:any) {
  console.log(LocalImage);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Swiper
      autoplay={true}
        dotStyle={{
          top: normalize(120),
          backgroundColor: '#edeced',
          height: normalize(6),
          width: normalize(6),
        }}
        activeDotStyle={{
          top: normalize(120),
          backgroundColor: '#c0bec1',
          height: normalize(6),
          width: normalize(20),
        }}>
        <View>
          <Image source={LocalImage.BackGroundImg1} style={styles.Bg1} />
          <Text style={styles.BackgroundTxt1}>
            Hand-pickle high quality snacks.
          </Text>
        </View>

        <View>
          <Image source={LocalImage.BackGroundImg2} style={styles.Bg1} />

          <Text style={styles.BackgroundTxt1}>
            Shop global. Mind-blownly affordable 
          </Text>
        </View>

        <View>
          <Image source={LocalImage.BackGroundImg3} style={styles.Bg1} />

          <Text style={styles.BackgroundTxt1}>
            Deliver on the promise of time. 
          </Text>
        </View>
      </Swiper>
      <TouchableOpacity style={styles.getStartedView} onPress={()=>{navigation.navigate('Signup')}}>
        <Text style={styles.getStartedTxt}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Bg1: {
    height: normalize(390),
    width: normalize(390),
    marginTop: normalize(122),
  },
  BackgroundTxt1: {
    fontSize: normalize(34),
    fontWeight: '900',
    margin: normalize(16),
    color: '#ee6722',
    alignSelf: 'center',
  },
  getStartedView: {
    height: normalize(56),
    width: normalize(358),
    marginTop: normalize(126),
    backgroundColor: '#ee6722',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: normalize(10),
    margin: normalize(16),
    alignSelf: 'center',
  },
  getStartedTxt: {
    fontSize: normalize(17),
    fontWeight: '700',
    color: '#ffffff',
  },
});
