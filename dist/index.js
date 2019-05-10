'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JSONEditor = exports.JSONEView = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactJsonEditorAjrm = require('react-json-editor-ajrm');

var _reactJsonEditorAjrm2 = _interopRequireDefault(_reactJsonEditorAjrm);

var _en = require('react-json-editor-ajrm/locale/en');

var _en2 = _interopRequireDefault(_en);

var _reduxForm = require('redux-form');

var _lodash = require('lodash.uniqueid');

var _lodash2 = _interopRequireDefault(_lodash);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _defaultProps = require('recompose/defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _raCore = require('ra-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RaJSONEditor = function (_React$Component) {
  _inherits(RaJSONEditor, _React$Component);

  function RaJSONEditor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RaJSONEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RaJSONEditor.__proto__ || Object.getPrototypeOf(RaJSONEditor)).call.apply(_ref, [this].concat(args))), _this), _this.renderTextField = function (_ref2) {
      var input = _ref2.input,
          label = _ref2.label;

      var _this$props = _this.props,
          source = _this$props.source,
          width = _this$props.width,
          labelStyle = _this$props.labelStyle,
          required = _this$props.required,
          rest = _objectWithoutProperties(_this$props, ['source', 'width', 'labelStyle', 'required']);

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          _Typography2.default,
          { component: 'span', style: labelStyle || { marginTop: "8px", marginBottom: "8px", color: "#919191", fontSize: ".8e", lineHeight: "1em" } },
          label,
          ' ',
          required && " *"
        ),
        _react2.default.createElement(
          _Paper2.default,
          { style: { width: width || "50%" } },
          _react2.default.createElement(_reactJsonEditorAjrm2.default, _extends({
            id: _lodash2.default + '-outer-box',
            placeholder: input.value && JSON.parse(input.value) || null,
            theme: 'light_mitsuketa_tribute',
            locale: _en2.default,
            height: '250px',
            width: '100%',
            onChange: _this.changeHandler(input.onChange),
            onKeyPressUpdate: false
          }, rest))
        )
      );
    }, _this.changeHandler = function (onChange) {
      return function (_ref3) {
        var json = _ref3.json,
            error = _ref3.error,
            jsObject = _ref3.jsObject;

        error === false && onChange(jsObject ? JSON.stringify(jsObject) : '');
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RaJSONEditor, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          source = _props.source,
          rest = _objectWithoutProperties(_props, ['source']);

      return _react2.default.createElement(
        'div',
        null,
        rest.viewOnly ? _react2.default.createElement(_reactJsonEditorAjrm2.default, _extends({
          id: _lodash2.default + '-outer-box',
          placeholder: rest.record[source] && JSON.parse(rest.record[source]) || null,
          theme: 'light_mitsuketa_tribute',
          locale: _en2.default,
          height: '250px',
          width: '100%'
        }, rest)) : _react2.default.createElement(_reduxForm.Field, _extends({ name: source, component: this.renderTextField, label: 'jsonEditor' }, rest))
      );
    }
  }]);

  return RaJSONEditor;
}(_react2.default.Component);

RaJSONEditor.propTypes = {
  source: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string,
  className: _propTypes2.default.string
};

var JSONEView = exports.JSONEView = (0, _defaultProps2.default)({ viewOnly: true })(RaJSONEditor);
var JSONEditor = exports.JSONEditor = (0, _raCore.addField)(RaJSONEditor);
//# sourceMappingURL=index.js.map