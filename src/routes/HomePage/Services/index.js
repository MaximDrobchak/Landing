import React from 'react';
import { ContainerPage, HeaderOfPage } from '../../';

import ServicesItem from './ServicesItem';
import { ITEMS } from './items';
import services2Min from './img/services.jpg';

import {
	HeadText,
	ItemImage,
	ServicesGrid,
	ServicesContainerPage
} from './styles';

// grid for dev.
// import { DevGrid } from '../../';

const Services = () => (
	<ServicesContainerPage>
		<ContainerPage id='services'>
			{/* <DevGrid /> */}
			<main>
				<HeaderOfPage text='Services' />
				<HeadText>Things that we work on </HeadText>
				<ServicesGrid>
					{ITEMS.map(
						(item) =>
							item.image ? (
								<img key={item.id} src={item.image} alt='' />
							) : (
								<ServicesItem
									key={item.id}
									icon={item.icon}
									itemHeader={item.itemHeader}
									itemList={item.itemList}
								/>
							)
					)}
					<ItemImage src={services2Min} alt='' />
				</ServicesGrid>
			</main>
		</ContainerPage>
	</ServicesContainerPage>
);

export default Services;
