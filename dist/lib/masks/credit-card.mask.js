Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _get=function get(object,property,receiver){if(object===null)object=Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===undefined){var parent=Object.getPrototypeOf(object);if(parent===null){return undefined;}else{return get(parent,property,receiver);}}else if("value"in desc){return desc.value;}else{var getter=desc.get;if(getter===undefined){return undefined;}return getter.call(receiver);}};var _base=require('./_base.mask');var _base2=_interopRequireDefault(_base);var _custom=require('./custom.mask');var _custom2=_interopRequireDefault(_custom);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var CREDIT_CARD_MASKS={'visa-or-mastercard':{regular:'9999 9999 9999 9999',obfuscated:'9999 **** **** 9999'},'amex':{regular:'9999 999999 99999',obfuscated:'9999 ****** 99999'},'diners':{regular:'9999 999999 9999',obfuscated:'9999 ****** 9999'}};var CREDIT_CARD_SETTINGS={obfuscated:false,issuer:'visa-or-mastercard'};var MASK_TRANSLATION={'*':function _(val){return null;}};var CreditCardMask=function(_BaseMask){_inherits(CreditCardMask,_BaseMask);function CreditCardMask(){_classCallCheck(this,CreditCardMask);return _possibleConstructorReturn(this,(CreditCardMask.__proto__||Object.getPrototypeOf(CreditCardMask)).apply(this,arguments));}_createClass(CreditCardMask,[{key:'getValue',value:function getValue(value,settings){var selectedMask=this.getMask(value,settings);return _custom2.default.shared.getValue(value,{mask:selectedMask,translation:MASK_TRANSLATION});}},{key:'validate',value:function validate(value,settings){if(!!value){var selectedMask=this.getMask(value,settings);return value.length===selectedMask.length;}return true;}},{key:'getRawValue',value:function getRawValue(maskedValue,settings){if(!maskedValue)return[];return maskedValue.split(' ').map(function(val){if(!val)return'';return val.trim();});}},{key:'getMask',value:function getMask(value,settings){var mergedSettings=_get(CreditCardMask.prototype.__proto__||Object.getPrototypeOf(CreditCardMask.prototype),'mergeSettings',this).call(this,CREDIT_CARD_SETTINGS,settings);var selectedMask=this._selectMask(mergedSettings.issuer,mergedSettings.obfuscated);return selectedMask;}},{key:'_selectMask',value:function _selectMask(issuer,obfuscated){var maskType=obfuscated?'obfuscated':'regular';return CREDIT_CARD_MASKS[issuer][maskType];}}],[{key:'getKind',value:function getKind(){return'credit-card';}}]);return CreditCardMask;}(_base2.default);exports.default=CreditCardMask;