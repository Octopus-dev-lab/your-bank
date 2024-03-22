import hamburgerIcon from '../assets/hamburger.svg';
import logo from '../assets/logo.svg';
import logoText from '../assets/your-bank.svg';

function Navbar() {
	return (
		// The external div is utilized to provide the navbar with enough distance from the top of the screen. Using margin (which would be the first margin in the file) would cause the root to be translated downward.
		<div className="w-full pt-[5vh]">
			<div className="w-[92%] mx-auto py-[0.875rem] pl-6 pr-[0.875rem] flex justify-between items-center bg-grey-900 rounded-full border border-grey-800">
				<a className="flex gap-1">
					<img
						src={logo}
						alt="YourBank logo"
					/>
					<img
						src={logoText}
						alt="YourBank name"
					/>
				</a>
				<button className="px-3 py-1 rounded-full bg-green-800">
					<img
						src={hamburgerIcon}
						alt="menu icon"
					/>
				</button>
			</div>
		</div>
	);
}

export default Navbar;
