import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../theme/appTheme';

interface Props {
  title: string;
  date: any;
  img: string;
  comments: number;
  score: number;
  user: string;
  keyId?: number | string;
  onPress: () => void;
  urlWebView?: string;
}

export const Cards = ({
  title,
  date,
  img,
  comments,
  score,
  user,
  keyId,
  onPress,
  urlWebView,
}: Props) => {
  return (
    <TouchableOpacity key={keyId} onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.cardBlock}>
          <View style={styles.cardBlockImg}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: img,
              }}
            />
          </View>
          <View style={styles.cardBlockLeft}>
            <View style={styles.cardDate}>
              <Text style={styles.subTitleText}>{date}</Text>
            </View>
            <View style={styles.cardBlockLeftTitle}>
              <Text style={styles.titleText}>{title}</Text>
              <View style={styles.cardBlockLeftSemiblock}>
                <View>
                  <Text style={styles.subTitleText}>{user}</Text>
                </View>
                <View>
                  <Text style={styles.subTitleText}>Score: {score}</Text>
                </View>
                <View>
                  <Text style={styles.subTitleText}>{comments} comments</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
