'use strict';

var React = require('react'),
    ReactNative = require('react-native');
var {
  PropTypes
} = React;
var { NativeModules, requireNativeComponent, View } = ReactNative;

class CirclesAndroid extends React.Component {
  spin() {
    NativeModules.UIManager.dispatchViewManagerCommand(
      React.findNodeHandle(this),
      NativeModules.UIManager.RCTCircles.Commands.spin,
      []
    );
  };

  stopSpinning() {
    NativeModules.UIManager.dispatchViewManagerCommand(
      React.findNodeHandle(this),
      UIManager.RCTCircles.Commands.stopSpinning,
      []
    );
  };

  render() {
    return  <NativeCirclesAndroid {...this.props} />;
  }
}
CirclesAndroid.propTypes = {
  ...View.propTypes,
  barColors: PropTypes.array,
  barWidth: PropTypes.number,
  blockCount: PropTypes.number,
  blockScale: PropTypes.number,
  contourColor: PropTypes.string,
  textColor: PropTypes.string,
  contourSize: PropTypes.number,
  delayMillis: PropTypes.number,
  fillColor: PropTypes.string,
  value: PropTypes.number,
  maxValue: PropTypes.number,
  rimColor: PropTypes.string,
  rimWidth: PropTypes.number,
  startAngle: PropTypes.number,
  textScale: PropTypes.number,
  textSize: PropTypes.number,
  unit: PropTypes.string,
  unitVisible: PropTypes.bool,
  unitColor: PropTypes.string,
  unitScale: PropTypes.number,
  unitSize: PropTypes.number,
  animated:  PropTypes.bool,
  text: PropTypes.string,
  textMode: PropTypes.oneOf(['text', 'value', 'percent']),
  spinColor: PropTypes.string,
  spinSpeed: PropTypes.number,
  spinBarLength: PropTypes.number,
};

var NativeCirclesAndroid = requireNativeComponent('RCTCircles', CirclesAndroid);

module.exports = CirclesAndroid;
