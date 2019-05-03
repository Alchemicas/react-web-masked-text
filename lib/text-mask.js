import React, { Component } from 'react';
import BaseTextComponent from './base-text-component';

const TEXT_REF = '$text';

export default class TextMask extends BaseTextComponent {
	constructor(props) {
		super(props);
	}

	getElement() {
		return this.refs[TEXT_REF];
	}

	render() {
		return (
			<span ref={TEXT_REF} {...this.props}>{this.props.value}</span>
		);
	}
}
