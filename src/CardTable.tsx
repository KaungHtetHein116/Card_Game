import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import {Images} from './assets/images';
import UserCard from './components/UserCard';
import {USER_COUNT} from './constants';

const {height, width} = Dimensions.get('window');

const TIMING = 1000;

const CardTable = () => {
  return (
    <ImageBackground
      source={Images.background}
      style={[styles.background]}
      resizeMode="stretch">
      <View>
        <Image
          source={Images.table}
          style={[styles.table]}
          resizeMode="stretch"
        />
        <View style={styles.girlContainer}>
          <Image source={Images.girl} style={[styles.girl]} />
        </View>
        <UserCard
          image={Images.user}
          style={{
            position: 'absolute',
            left: 60,
            flexDirection: 'row-reverse',
          }}
          shouldRender={USER_COUNT >= 1}
          playNameCardStyle={{position: 'absolute', top: -60, left: 0}}
        />
        <UserCard
          image={Images.user}
          style={{position: 'absolute', right: 60, flexDirection: 'row'}}
          shouldRender={USER_COUNT >= 2}
          playNameCardStyle={{position: 'absolute', top: -60, left: 0}}
        />
        <UserCard
          image={Images.user}
          style={{position: 'absolute', bottom: -20, left: 60}}
          shouldRender={USER_COUNT >= 3}
          playNameCardStyle={{position: 'absolute', bottom: -40}}
        />
        <UserCard
          image={Images.user}
          style={{position: 'absolute', right: 60, bottom: -20}}
          shouldRender={USER_COUNT >= 4}
          playNameCardStyle={{position: 'absolute', bottom: -40}}
        />
        <UserCard
          image={Images.user}
          style={{
            position: 'absolute',
            left: 0,
            bottom: height * 0.2,
            flexDirection: 'row-reverse',
          }}
          shouldRender={USER_COUNT >= 5}
          playNameCardStyle={{position: 'absolute', left: 100}}
        />
        <UserCard
          image={Images.user}
          style={{position: 'absolute', right: width * 0.27, bottom: -20}}
          shouldRender
          isUser
          playNameCardStyle={{position: 'absolute', bottom: -40}}
        />
      </View>
    </ImageBackground>
  );
};

export default CardTable;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableImage: {
    width: width * 0.5,
    height: height * 0.5,
    alignSelf: 'center',
    zIndex: 0,
  },
  girl: {
    width: 70,
    height: 70,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  tableContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  girlContainer: {
    position: 'absolute',
    top: -60,
    left: width * 0.27,
  },
  table: {
    width: width * 0.6,
    height: height * 0.6,
  },
});
