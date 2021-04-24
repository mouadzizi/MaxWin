import React, { useEffect } from "react";
import { View, Dimensions, Image } from "react-native";
import { FAB } from "react-native-paper";

import Swiper from 'react-native-swiper';

const _height = Dimensions.get("window").height;
const _width = Dimensions.get("window").width;

export default function ImageViewer({ navigation, route }) {
  const { Images } = route.params;


  return (
    <View style={{ width: _width, height: _height, backgroundColor: "black" }}>
      <FAB
        style={{
          position: "absolute",
          margin: 16,
          left: 0,
          top: 0,
          zIndex: 1,
          backgroundColor: "white",
        }}
        icon="arrow-left"
        onPress={() => navigation.goBack()}
      />

      <Swiper activeDotColor="#FF6347">
        {
           Images.map((img, index) => {
              return (
                <View key={index.toString()}>
                  <Image
                    key={index}
                    source={{ uri: img }}
                    resizeMode="contain"
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
              );
            })
        }
      </Swiper>
    </View>
  );
}
