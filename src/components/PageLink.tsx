import React, {Component} from 'react';

import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';

const PageLink = ({route, navigation}: any) => {
  const {urlWebView} = route.params;
  return (
    <>
      {/* <View>
        <Text>{JSON.stringify(props, null, 3)}</Text>
      </View> */}
      <WebView source={{uri: urlWebView}} style={{marginTop: 20}} />
    </>
  );
};

export default PageLink;
