// @flow

import React, { Component } from "react";

import ScaleBarView from "./src/ScaleBarView";
import { getScaleBarInfoFromZoomLevel } from "./src/ScaleBarModel";

type Props = {
  zoom: number,
  latitude: number,
  bottom: number,
  left: number,
  metersOnly: boolean
};

class ScaleBar extends Component<Props> {
  static defaultProps = {
    latitude: 48.81879736812265,
    bottom: 42,
    left: 10,
    metersOnly: false
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
      />
    );
  }
}

export default ScaleBar;
