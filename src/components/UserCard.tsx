import {View, Image, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import React from 'react';
import {Images} from '../assets/images';
import {CARD_IMAGE_RATIO} from '../constants';
import BetAmount from './BetAmount';
import PlayerNameCard from './PlayerNameCard';

const UserCard = ({
  image,
  style,
  shouldRender,
  isUser,
  playNameCardStyle,
}: {
  image: any;
  style: StyleProp<ViewStyle>;
  shouldRender?: boolean;
  isUser?: boolean;
  playNameCardStyle?: StyleProp<ViewStyle>;
}) => {
  if (!shouldRender) return null;

  return (
    <View style={[styles.container, style]}>
      <BetAmount />
      <View>
        <Image source={image} style={[styles.userImage]} />
        <View style={[styles.cardImageContainer]}>
          <Image
            source={Images.eight}
            style={[styles.firstCardImage, isUser && styles.userCardImage]}
          />
          <Image
            source={Images.eight}
            style={[styles.secondCardImage, isUser && styles.userCardImage]}
          />
        </View>
      </View>
      <PlayerNameCard style={playNameCardStyle} />
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 4,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  cardImageContainer: {
    flexDirection: 'row',
    top: -20,
    right: -20,
  },
  firstCardImage: {
    width: 20,
    aspectRatio: CARD_IMAGE_RATIO,
    transform: [{rotate: '-15deg'}],
  },
  secondCardImage: {
    width: 20,
    aspectRatio: CARD_IMAGE_RATIO,
    left: -10,
  },
  userCardImage: {
    width: 30,
    height: 30,
    borderRadius: 5,
  },
});
