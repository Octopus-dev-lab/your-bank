import BankIcon from '../../assets/svg/halo-bank.svg?react';
import BookIcon from '../../assets/svg/halo-book.svg?react';
import CashIcon from '../../assets/svg/halo-cash.svg?react';
import DollarIcon from '../../assets/svg/halo-dollar.svg?react';
import HandMoneyIcon from '../../assets/svg/halo-hand-money.svg?react';
import MoneyBagIcon from '../../assets/svg/halo-money-bag.svg?react';
import PresentationIcon from '../../assets/svg/halo-presentation.svg?react';
import SkyscraperIcon from '../../assets/svg/halo-skyscraper.svg?react';

export default {
	individuals: {
		title: 'For Individuals',
		description:
			'For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers',
		cardsData: [
			{
				icon: MoneyBagIcon,
				title: 'Managing Personal Finances'
			},
			{
				icon: HandMoneyIcon,
				title: 'Saving for the Future'
			},
			{
				icon: BankIcon,
				title: 'Home ownership'
			},
			{
				icon: BookIcon,
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
				icon: SkyscraperIcon,
				title: 'Startups and Entrepreneurs'
			},
			{
				icon: CashIcon,
				title: 'Cash Flow Management'
			},
			{
				icon: PresentationIcon,
				title: 'Business Expansion'
			},
			{
				icon: DollarIcon,
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
