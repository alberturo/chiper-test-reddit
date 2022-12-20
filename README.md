# chiper-test-reddit



:star: [Requirement of test](https://groovy-dahlia-91d.notion.site/Frontend-Engineer-9af0a177379e4ff8a7a74d3a84dc4ac9)

This is a sample application that demonstrates how to list data previusly loaded from an API. The application loads posts from Reddit database and displays them. Users can select to display posts opening a link and seeing an screen using react-native-webview package. The application uses hooks (useEffect, useState, useNavigation) it is built in typeScript and React Native.



## Import Data
I have import the data from [link](https://api.reddit.com/r/pics/hot.json) as it was required.


## Demonstration


Here we can see the app running.
![](showcase.gif)


## Getting Started
To get started  you can simply clone this `chiper-test-reddit` repository and install the dependencies.

Clone the `chiper-test-reddit` repository using git:

```bash
git clone git@github.com:alberturo/chiper-test-reddit.git
cd chiper-test-reddit
```

Install dependencies Frontend with this command:
```bash
yarn install
yarn install @react-native-masked-view/masked-view
yarn install @react-navigation/material-top-tabs
yarn install @react-navigation/native
yarn install @react-navigation/native-stack
yarn install @react-navigation/stack
yarn install react-native-gesture-handler
yarn install react-native-pager-view
yarn install react-native-safe-area-context
yarn install react-native-screens
yarn install react-native-tab-view
yarn install react-native-webview

```


Run the application with this command:
```bash
yarn react-native run-android

```

## Tech Stack
* React Native
* TypeScript

## Code Scalable
* Organization by components, Screens, Navigator, Theme and Utils
* Reusable component Card, functions, styles
