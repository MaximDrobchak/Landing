import React from 'react';
import { Icon, ServicesItemStyle } from './styles';

const ServicesItem = ({ icon, itemHeader, itemList }) => (
	<ServicesItemStyle>
		<Icon src={icon} alt='' />
		<br />
		<span>{itemHeader}</span>
		<ul>
			{Object.values(itemList).map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	</ServicesItemStyle>
);

export default ServicesItem;
