import iconManagement from './img/management.svg';
import iconEngineering from './img/Engineering.svg';
import iconDesing from './img/web design5.svg';
import Union4 from './img/Union 4.svg';
import Union6 from './img/Union 6.svg';
import servicesMin from './img/services-min.jpg';

export const ITEMS = [
	{
		id: 0,
		icon: iconManagement,
		itemHeader: 'Product',
		itemList: {
			str1: 'Product management',
			str2: 'Agile processes',
			str3: 'Business analysis',
			str4: 'Project management'
		}
	},
	{
		id: 1,
		icon: iconDesing,
		itemHeader: 'Desing',
		itemList: {
			str1: 'Wireframing',
			str2: 'Prototyping',
			str3: 'Visual design',
			str4: 'User interface design'
		}
	},
	{
		id: 2,
		icon: iconEngineering,
		itemHeader: 'Engineering',
		itemList: {
			str1: 'Architecture',
			str2: 'Front end engineering',
			str3: 'Back end engineering',
			str4: 'API  engineering'
		}
	},
	{
		id: 3,
		image: servicesMin
	},

	{
		id: 4,
		icon: Union4,
		itemHeader: 'DevOps',
		itemList: {
			str1: 'Cloud services',
			str2: 'System integration',
			str3: 'System analysis',
			str4: 'Launch strategy'
		}
	},
	{
		id: 5,
		icon: Union6,
		itemHeader: 'QA',
		itemList: {
			str1: 'Automated testing',
			str2: 'Performance testing',
			str3: 'Process improvement',
			str4: 'Test documentation'
		}
	}
];
