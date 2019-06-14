// @flow

import React, { Component } from "react";

import ScaleBarView from "./src/ScaleBarView";
import { getScaleBarInfoFromZoomLevel } from "./src/ScaleBarModel";
import { LIMIT_SIZE, LINE_COLOR, LINE_SIZE } from "./src/constants";

type Props = {
  zoom: number,
  latitude: number,
  bottom: number,
  left: number,
  metersOnly: boolean,
  color: string,
  lineWidth: number,
  fontSize: number,
  limiterHeight: number
};

class ScaleBar extends Component<Props> {
  static defaultProps = {
    latitude: 48.81879736812265,
    bottom: 42,
    left: 10,
    metersOnly: false,
    color: LINE_COLOR,
    lineWidth: LINE_SIZE,
    fontSize: 11,
    limiterHeight: LIMIT_SIZE
  };

  render() {
    const {
      scaleBarSizeInMeters,
      scaleBarTextInMeters,
      scaleBarSizeInFeet,
      scaleBarTextInFeet
    } = getScaleBarInfoFromZoomLevel(this.props.zoom, this.props.latitude);

    return (
      <ScaleBarView
        padding_left={this.props.left}
        padding_bottom={this.props.bottom}
        lengthMeter={scaleBarSizeInMeters}
        lengthFeet={scaleBarSizeInFeet}
        scaleTextMeters={scaleBarTextInMeters}
        scaleTextFeet={scaleBarTextInFeet}
        metersOnly={this.props.metersOnly}
        color={this.props.color}
        lineWidth={this.props.lineWidth}
        limiterHeight={this.props.limiterHeight}
        fontSize={this.props.fontSize}
      />
    );
  }
}

export default ScaleBar;
