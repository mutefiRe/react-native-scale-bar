// @flow

import React, { Component } from "react";
import { View, Text } from "react-native";
import { LINE_COLOR } from "./constants";

type Props = {
  text: string,
  padding_bottom: number,
  padding_left: number,
  color: string,
  fontSize: number
};

export default class ScaleText extends Component<Props> {
  render() {
    return (
      <View
        style={{
          position: "absolute",
          bottom: this.props.padding_bottom,
          left: this.props.padding_left + 4
        }}
      >
        <Text
          style={{
            fontSize: this.props.fontSize,
            color: this.props.color,
            fontWeight: "bold"
          }}
        >
          {this.props.text}
        </Text>
      </View>
    );
  }
}
