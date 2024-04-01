import Contacts from './Contacts';
import InfoExtra from './InfoExtra';
import Navigation from './Navigation';

function Footer() {
	return (
		<footer
			className="pt-[3.12rem] pb-[1.88rem] px-4 
	 	flex flex-col justify-center items-center bg-grey-900 lg:px-20 2xl:px-40"
		>
			<Navigation />
			<div className="w-full h-px my-[1.88rem] bg-grey-800 lg:my-10"></div>
			<Contacts />
			<div className="w-full h-px mt-[1.88rem] mb-[50px] bg-grey-800 lg:my-10"></div>
			<InfoExtra />
		</footer>
	);
}

export default Footer;
