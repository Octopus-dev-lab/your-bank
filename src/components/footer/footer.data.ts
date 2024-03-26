import emailIcon from '../../assets/footer/email.svg';
import facebookLogo from '../../assets/footer/facebook.svg';
import linkedinLogo from '../../assets/footer/linkedin.svg';
import locationIcon from '../../assets/footer/location.svg';
import phoneIcon from '../../assets/footer/phone.svg';
import twitterLogo from '../../assets/footer/twitter.svg';

export const pages = [
	{
		title: 'Home',
		url: '/'
	},
	{
		title: 'Careers',
		url: '/careers'
	},
	{
		title: 'About',
		url: '/about'
	},
	{
		title: 'Security',
		url: '/security'
	}
];

export const contacts = [
	{
		icon: emailIcon,
		alt: 'email icon',
		text: 'hello@skillbridge.com',
		url: 'mailto:hello@skillbridge.com'
	},
	{
		icon: phoneIcon,
		alt: 'phone icon',
		text: '+91 91813 23 2309',
		url: 'tel:+9191813232309'
	},
	{
		icon: locationIcon,
		alt: 'location icon',
		text: 'Somewhere in the world',
		url: 'https://maps.app.goo.gl/JyCdd5f14nRm4Ae56'
	}
];
export const social = [
	{
		logo: facebookLogo,
		url: 'https://www.facebook.com/',
		alt: 'facebook logo'
	},
	{
		logo: twitterLogo,
		url: 'https://www.twitter.com/',
		alt: 'twitter logo'
	},
	{
		logo: linkedinLogo,
		url: 'https://www.linkedin.com/',
		alt: 'linkedin logo'
	}
];
