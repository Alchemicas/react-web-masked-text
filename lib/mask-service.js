import MaskResolver from './mask-resolver'

export default class MaskService {
    static toMask(kind, value, settings) {
        return MaskResolver.resolve(kind).getValue(value, settings)
    }

    static toRawValue(kind, maskedValue, settings) {
        return MaskResolver.resolve(kind).getRawValue(maskedValue, settings)
    }

    static isValid(kind, value, settings) {
        return MaskResolver.resolve(kind).validate(value, settings)
    }

    static getMask(kind, value, settings) {
        return MaskResolver.resolve(kind).getMask(value, settings)
    }
}
