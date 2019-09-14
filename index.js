"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CaptchaText =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CaptchaText, _React$Component);

  function CaptchaText(prop) {
    var _this;

    _classCallCheck(this, CaptchaText);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CaptchaText).call(this, prop));
    _this.state = {
      height: _this.props.height ? _this.props.height : 100,
      width: _this.props.width ? _this.props.width : 200,
      textColor: _this.props.textColor ? _this.props.textColor : '#e50446',
      fontFamily: _this.props.fontFamily ? _this.props.fontFamily : 'Arial',
      fontSize: _this.props.fontSize ? _this.props.fontSize : '30',
      paddingLeft: _this.props.paddingLeft ? _this.props.paddingLeft : '30',
      paddingTop: _this.props.paddingTop ? _this.props.paddingTop : '60',
      lenght: _this.props.lenght ? _this.props.lenght : '5',
      background: _this.props.background ? _this.props.background : '#000',
      originText: _this.props.originText ? _this.props.originText : null
    };
    return _this;
  }

  _createClass(CaptchaText, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.generateText();
    }
  }, {
    key: "generateText",
    value: function generateText() {
      var text = '';
      var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      for (var i = 0; i < this.state.lenght; i++) {
        var _char = possible.charAt(Math.floor(Math.random() * possible.length));

        text += _char;
      }

      this.setState({
        originText: text
      });
      this.props.result(text);
    }
  }, {
    key: "renderText",
    value: function renderText() {
      var text = [];
      var originText = this.state.originText;

      if (originText) {
        var arrayText = originText.split('');

        for (var i = 0; i < arrayText.length; i++) {
          text.push("<text \n          \n font-family=\"".concat(this.state.fontFamily, "\" \n\n          font-size=\"").concat(this.state.fontSize, "\" \n\n          x=\"").concat(this.state.paddingLeft * i, "\" \n\n          y=\"").concat(this.state.paddingTop, "\" \n\n          fill=\"").concat(this.state.textColor, "\" \n >").concat(arrayText[i], "</text>"));
        }
      }

      return text;
    }
  }, {
    key: "renderImage",
    value: function renderImage() {
      var text = this.renderText();
      var svg = btoa("<svg xmlns='http://www.w3.org/2000/svg' height=\"".concat(this.state.height, "\" width=\"").concat(this.state.width, "\"> ").concat(text.join(), " </svg>"));
      var svgSource = "data:image/svg+xml;base64,".concat(svg);
      return _react["default"].createElement('img', {
        style: {
          background: this.state.background,
          paddingLeft: "".concat(this.state.paddingLeft, "px"),
          borderRadius: '4px'
        },
        src: svgSource,
        alt: ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", null, this.renderImage());
    }
  }]);

  return CaptchaText;
}(_react["default"].Component);

exports["default"] = CaptchaText;
