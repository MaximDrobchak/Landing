import React from 'react';
import { ContainerPage, HeaderOfPage } from '../../';

import { ITEMS } from './items';
import Item from './Item';

import { TechnologiesGrid, HeadText } from './styles';

import { BackgroundLogo } from '../../';

// grid for dev.
// import { DevGrid } from '../../';

const Technologies = () => (
	<ContainerPage id='technologies'>
		{/* <DevGrid /> */}
		<BackgroundLogo />
		<main>
			<HeaderOfPage text='Technologies' />
			<HeadText>We ar best at</HeadText>
			<TechnologiesGrid>
				{ITEMS.map((item) => <Item key={item.id} {...item} />)}
			</TechnologiesGrid>
		</main>
	</ContainerPage>
);

export default Technologies;
