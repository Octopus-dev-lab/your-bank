import { Link } from 'react-router-dom';
import { authenticationPages } from './navbar.data';

function AuthLinks() {
	return (
		<nav className="hidden md:block">
			<ul className="flex gap-5 items-center text-white-100 text-[0.875rem] leading-[1.3125rem] font-normal 2xl:gap-[1.88rem] 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
				<li>
					<Link
						to={authenticationPages.signup}
						className={
							'inline-block rounded-full hover:scale-[1.03]'
						}
					>
						Sign Up
					</Link>
				</li>
				<li>
					<Link
						to={authenticationPages.login}
						className={
							"' bg-green-800 text-grey-900 px-6 py-3 2xl:px-[1.88rem] 2xl:py-[0.88rem] hover:bg-green-800/95 inline-block rounded-full hover:scale-[1.03]"
						}
					>
						Login
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default AuthLinks;
