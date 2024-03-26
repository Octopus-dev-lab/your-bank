import Contacts from './Contacts';
import InfoExtra from './InfoExtra';
import Navigation from './Navigation';

function Footer() {
	return (
		<footer
			className="pt-[3.12rem] pb-[1.88rem] px-4 
	 	flex flex-col justify-center items-center bg-grey-900"
		>
			<Navigation />
			<div className="w-full h-px my-[30px] bg-grey-800"></div>
			<Contacts />
			<div className="w-full h-px mt-[30px] mb-[50px] bg-grey-800"></div>
			<InfoExtra />
		</footer>
	);
}

export default Footer;
