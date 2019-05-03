import React from 'react'
import BaseTextComponent from './base-text-component'

export default class TextInputMask extends BaseTextComponent {
    getElement() {
        return this._inputElement
    }

    _onChangeText(text) {
        if (!this._checkText(text)) {
            return
        }

        const { maskedText, rawText } = this.updateValue(text)

        if (this.props.onChangeText) {
            this._trySetNativeProps(maskedText)
            this.props.onChangeText(maskedText, rawText)
        }
    }

    _checkText(text) {
        if (this.props.checkText) {
            return this.props.checkText(this.props.value, text)
        }

        return true
    }

    _getKeyboardType() {
        return this.props.keyboardType || this._maskHandler.getKeyboardType()
    }

    render() {
        return (
            <input
                ref={ref => {
                    if (ref) {
                        this._inputElement = ref

                        if (typeof this.props.refInput === 'function') {
                            this.props.refInput(ref)
                        }
                    }
                }}
                {...this.props}
                onChange={event => this._onChangeText(event.currentTarget.value)}
                value={this.props.value}
            />
        )
    }
}
