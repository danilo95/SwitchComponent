import React, { useState } from 'react';
import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from './Style';

export default function Switch({ id, color, value }) {
	const [checkValue, setCheckValue] = useState(value || false);

	const onChangeValue = () => {
		setCheckValue(!checkValue);
	};
	return (
		<CheckBoxWrapper>
			<CheckBox
				id={id}
				type="checkbox"
				color={color}
				checked={checkValue}
				onChange={onChangeValue}
			/>
			<CheckBoxLabel htmlFor={id} />
		</CheckBoxWrapper>
	);
}
