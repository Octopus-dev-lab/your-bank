import cashIcon from '../../assets/home.products/business/cash.svg';
import dollarIcon from '../../assets/home.products/business/dollar.svg';
import presentationIcon from '../../assets/home.products/business/presentation.svg';
import skyscraperIcon from '../../assets/home.products/business/skyscraper.svg';
import bankIcon from '../../assets/home.products/individuals/bank.svg';
import bookIcon from '../../assets/home.products/individuals/book.svg';
import handMoneyIcon from '../../assets/home.products/individuals/hand-money.svg';
import moneyBagIcon from '../../assets/home.products/individuals/money-bag.svg';

export default {
	individuals: {
		title: 'For Individuals',
		description:
			'For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers',
		cardsData: [
			{
				icon: moneyBagIcon,
				title: 'Managing Personal Finances'
			},
			{
				icon: handMoneyIcon,
				title: 'Saving for the Future'
			},
			{
				icon: bankIcon,
				title: 'Home ownership'
			},
			{
				icon: bookIcon,
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
				title: 'Startups and Entrepreneurs'
			},
			{
				icon: cashIcon,
				title: 'Cash Flow Management'
			},
			{
				icon: presentationIcon,
				title: 'Business Expansion'
			},
			{
				icon: dollarIcon,
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
