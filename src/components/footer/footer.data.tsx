import EmailIcon from '../../assets/svg/email.svg?react';
import FacebookLogo from '../../assets/svg/facebook.svg?react';
import LinkedinLogo from '../../assets/svg/linkedin.svg?react';
import LocationIcon from '../../assets/svg/location.svg?react';
import PhoneIcon from '../../assets/svg/phone.svg?react';
import TwitterLogo from '../../assets/svg/twitter.svg?react';

export const pages = [
	{
		title: 'Home',
		url: '/your-bank/'
	},
	{
		title: 'Careers',
		url: '/your-bank/careers'
	},
	{
		title: 'About',
		url: '/your-bank/about'
	},
	{
		title: 'Security',
		url: '/your-bank/security'
	}
];

export const contacts = [
	{
		icon: EmailIcon,
		alt: 'email',
		text: 'hello@skillbridge.com',
		url: 'mailto:hello@skillbridge.com'
	},
	{
		icon: PhoneIcon,
		alt: 'phone',
		text: '+91 91813 23 2309',
		url: 'tel:+9191813232309'
	},
	{
		icon: LocationIcon,
		alt: 'location',
		text: 'Somewhere in the world',
		url: 'https://maps.app.goo.gl/JyCdd5f14nRm4Ae56'
	}
];
export const social = [
	{
		name: 'facebook',
		logo: FacebookLogo,
		url: 'https://www.facebook.com/',
		alt: 'facebook logo'
	},
	{
		name: 'twitter',
		logo: TwitterLogo,
		url: 'https://www.twitter.com/',
		alt: 'twitter logo'
	},
	{
		name: 'linkedin',
		logo: LinkedinLogo,
		url: 'https://www.linkedin.com/',
		alt: 'linkedin logo'
	}
];
