export enum Filters {
	ONLINE_BANKING = 'Online Banking',
	FINANCIAL_TOOLS = 'Financial Tools',
	CUSTOMER_SUPPORT = 'Customer Support'
}

export const featuresContent = {
	[Filters.ONLINE_BANKING]: [
		{
			title: '24/7 Account Access',
			description:
				'Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.'
		},
		{
			title: 'Mobile Banking App',
			description:
				'Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.'
		},
		{
			title: 'Secure Transactions',
			description:
				'Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.'
		},
		{
			title: 'Bill Pay and Transfers',
			description:
				'Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.'
		}
	],
	[Filters.FINANCIAL_TOOLS]: [
		{
			title: 'Budgeting Calculator',
			description:
				'Plan your finances effectively with our budgeting calculator tool. Track your income, expenses, and savings goals effortlessly.'
		},
		{
			title: 'Investment Portfolio Tracker',
			description:
				'Monitor the performance of your investments with our portfolio tracker tool. Stay informed about market changes and make informed decisions.'
		},
		{
			title: 'Mortgage Calculator',
			description:
				'Estimate your monthly mortgage payments and explore different loan scenarios with our easy-to-use mortgage calculator tool.'
		},
		{
			title: 'Retirement Planning Tool',
			description:
				'Prepare for your future with our retirement planning tool. Calculate how much you need to save and explore investment options for retirement.'
		}
	],
	[Filters.CUSTOMER_SUPPORT]: [
		{
			title: 'Live Chat Assistance',
			description:
				'Get instant help from our support team through live chat. Our representatives are available 24/7 to assist you with any questions or concerns.'
		},
		{
			title: 'FAQ Section',
			description:
				'Find answers to common queries in our FAQ section. Browse through a comprehensive list of frequently asked questions to quickly resolve your issues.'
		},
		{
			title: 'Email Support',
			description:
				'Reach out to our customer support team via email for personalized assistance. We strive to respond to all inquiries within 24 hours.'
		},
		{
			title: 'Phone Support',
			description:
				'Speak directly with a customer support representative by phone for immediate assistance. Our dedicated team is here to help you with any inquiries.'
		}
	]
};
