"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("../css/ImageSlider.css");

var _SliderData = _interopRequireDefault(require("./SliderData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ImageSlider = function ImageSlider() {
  var SliderList = [];

  for (var i = 1; i <= 10; i++) {
    SliderList.push({
      serialNumber: {
        i: i
      },
      images: '/images/Y' + {
        i: i
      } + '.jpg'
    });
  }

  console.log(SliderList);
};

var _default = ImageSlider;
exports["default"] = _default;