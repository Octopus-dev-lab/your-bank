import BankIcon from '../../assets/svg/bank.svg?react';
import BookIcon from '../../assets/svg/book.svg?react';
import CashIcon from '../../assets/svg/cash.svg?react';
import DollarIcon from '../../assets/svg/dollar.svg?react';
import HandMoneyIcon from '../../assets/svg/hand-money.svg?react';
import MoneyBagIcon from '../../assets/svg/money-bag.svg?react';
import PresentationIcon from '../../assets/svg/presentation.svg?react';
import SkyscraperIcon from '../../assets/svg/skyscraper.svg?react';

export default {
	individuals: {
		title: 'For Individuals',
		description:
			'For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers',
		cardsData: [
			{
				icon: MoneyBagIcon,
				// alt: 'Hand holding a bag with a dollar sign',
				title: 'Managing Personal Finances'
			},
			{
				icon: HandMoneyIcon,
				// alt: 'Hands joined to form a house with a dollar sign inside',
				title: 'Saving for the Future'
			},
			{
				icon: BankIcon,
				// alt: 'Bank building',
				title: 'Home ownership'
			},
			{
				icon: BookIcon,
				// alt: 'Open book',
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
				// alt: 'Skyscrapers',
				title: 'Startups and Entrepreneurs'
			},
			{
				icon: CashIcon,
				// alt: 'Cash',
				title: 'Cash Flow Management'
			},
			{
				icon: PresentationIcon,
				// alt: 'Plip chart easel',
				title: 'Business Expansion'
			},
			{
				icon: DollarIcon,
				// alt: 'Dollar sign',
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
