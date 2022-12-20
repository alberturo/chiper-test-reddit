import React, {useEffect, useState} from 'react';

import {FlatList, Text, View, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {getDiffTime} from '../utils/utils';
import {Cards} from '../components/Cards';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}
type resultProps = {
  kind: string;
  data: FormValues;
};

type FormValues = {
  url_overridden_by_dest: string;
  author_fullname: string;
  title: string;
  created_utc: number;
  url: string;
  num_comments: number;
  score: number;
  id: string;
  onPress: () => void;
};

export const TopScreen = (props: Props) => {
  const [topPosts, setTopPosts] = useState<resultProps[]>([]);
  const navigation = useNavigation<any>();

  useEffect(() => {
    const api = async () => {
      try {
        const data = await fetch('https://api.reddit.com/r/pics/hot.json', {
          method: 'GET',
        });
        const jsonData = await data.json();
        setTopPosts(jsonData.data.children);
      } catch (e) {
        console.log('ERROR', e);
      }
    };
    api();
  }, []);

  return (
    <View>
      {topPosts &&
        topPosts.map(value => {
          const date = getDiffTime(value.data.created_utc);
          return (
            <Cards
              key={value.data.id}
              title={value.data.title}
              date={date}
              img={value.data.url}
              comments={value.data.num_comments}
              score={value.data.score}
              user={value.data.author_fullname}
              urlWebView={value.data.url_overridden_by_dest}
              onPress={() =>
                navigation.navigate('PageLink', {
                  id: value.data.title,
                  user: value.data.author_fullname,
                  title: value.data.title,
                  urlWebView: value.data.url_overridden_by_dest,
                })
              }
            />
          );
        })}
    </View>
  );
};

export default TopScreen;
