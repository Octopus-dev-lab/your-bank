import bankIcon from '../../assets/svg/bank.svg';
import bookIcon from '../../assets/svg/book.svg';
import cashIcon from '../../assets/svg/cash.svg';
import dollarIcon from '../../assets/svg/dollar.svg';
import handMoneyIcon from '../../assets/svg/hand-money.svg';
import moneyBagIcon from '../../assets/svg/money-bag.svg';
import presentationIcon from '../../assets/svg/presentation.svg';
import skyscraperIcon from '../../assets/svg/skyscraper.svg';

export default {
	individuals: {
		title: 'For Individuals',
		description:
			'For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers',
		cardsData: [
			{
				icon: moneyBagIcon,
				alt: 'Hand holding a bag with a dollar sign',
				title: 'Managing Personal Finances'
			},
			{
				icon: handMoneyIcon,
				alt: 'Hands joined to form a house with a dollar sign inside',
				title: 'Saving for the Future'
			},
			{
				icon: bankIcon,
				alt: 'Bank building',
				title: 'Home ownership'
			},
			{
				icon: bookIcon,
				alt: 'Open book',
				title: 'Education Funding'
			}
		],
		stats: [
			{
				percentage: '78%',
				title: 'Secure Retirement Planning'
			},
			{
				percentage: '63%',
				title: 'Manageable Debt Consolidation'
			},
			{
				percentage: '91%',
				title: 'Reducing financial burdens'
			}
		]
	},
	businesses: {
		title: 'For Business',
		description:
			'For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them',
		cardsData: [
			{
				icon: skyscraperIcon,
				alt: 'Skyscrapers',
				title: 'Startups and Entrepreneurs'
			},
			{
				icon: cashIcon,
				alt: 'Cash',
				title: 'Cash Flow Management'
			},
			{
				icon: presentationIcon,
				alt: 'Plip chart easel',
				title: 'Business Expansion'
			},
			{
				icon: dollarIcon,
				alt: 'Dollar sign',
				title: 'Payment Solutions'
			}
		],
		stats: [
			{
				percentage: '65%',
				title: 'Cash Flow Management'
			},
			{
				percentage: '70%',
				title: 'Drive Business Expansion'
			},
			{
				percentage: '45%',
				title: 'Streamline payroll processing'
			}
		]
	}
};
