import * as Masks from './masks';

var maskKeys = Object.keys(Masks);

export default class MaskResolver {
	static resolve(kind) {
		let maskKey = maskKeys.filter(m => {
			var handler = Masks[m];
			return handler && handler.getKind && handler.getKind() === kind;
		})[0];

		let handler = Masks[maskKey];

		if(!handler) {
			throw new Error('Mask kind not supported.');
		}

		return new handler();
	}
}
