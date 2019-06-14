// @flow

import React, { Component } from "react";
import { View } from "react-native";

import VerticalLine from "./VerticalLine";
import HorizontalLine from "./HorizontalLine";
import ScaleText from "./ScaleText";

type Props = {
  padding_left: number,
  padding_bottom: number,
  lengthMeter: number,
  lengthFeet: number,
  scaleTextMeters: string,
  scaleTextFeet: string,
  metersOnly: boolean,
  color: string,
  lineWidth: number,
  fontSize: number,
  limiterHeight: number
};

export default class ScaleBarView extends Component<Props> {
  render() {
    return (
      <View>
        <ScaleText
          padding_bottom={this.props.padding_bottom + 1}
          padding_left={this.props.padding_left}
          text={this.props.scaleTextMeters}
          color={this.props.color}
          fontSize={this.props.fontSize}
        />
        {!this.props.metersOnly && (
          <ScaleText
            padding_bottom={this.props.padding_bottom - 14}
            padding_left={this.props.padding_left}
            text={this.props.scaleTextFeet}
            color={this.props.color}
            fontSize={this.props.fontSize}
          />
        )}
        <HorizontalLine
          padding_bottom={this.props.padding_bottom}
          padding_left={this.props.padding_left}
          length={this.props.lengthMeter}
          color={this.props.color}
          lineWidth={this.props.lineWidth}
        />
        <VerticalLine
          padding_bottom={this.props.padding_bottom}
          padding_left={this.props.padding_left}
          length={this.props.limiterHeight}
          color={this.props.color}
          lineWidth={this.props.lineWidth}
        />
        <VerticalLine
          padding_bottom={this.props.padding_bottom}
          padding_left={this.props.padding_left + this.props.lengthMeter}
          length={this.props.limiterHeight}
          color={this.props.color}
          lineWidth={this.props.lineWidth}
        />

        <VerticalLine
          padding_bottom={this.props.padding_bottom - this.props.limiterHeight}
          padding_left={this.props.padding_left}
          length={this.props.limiterHeight}
          color={this.props.color}
          lineWidth={this.props.lineWidth}
        />
        <VerticalLine
          padding_bottom={this.props.padding_bottom - this.props.limiterHeight}
          padding_left={
            this.props.padding_left +
            (this.props.metersOnly
              ? this.props.lengthMeter
              : this.props.lengthFeet)
          }
          length={this.props.limiterHeight}
          color={this.props.color}
          lineWidth={this.props.lineWidth}
        />
      </View>
    );
  }
}
