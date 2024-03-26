import { Link } from 'react-router-dom';
import appleIcon from '../../assets/authentication/apple.svg';
import facebookIcon from '../../assets/authentication/facebook.svg';
import googleIcon from '../../assets/authentication/google.svg';

function AuthenticationForm({ isSignup }: { isSignup: boolean }) {
	return (
		<div className="px-4">
			<div className="p-[1.88rem] border border-grey-800 rounded-2xl">
				<h1 className="mb-[0.62rem] text-green-800 text-[1.75rem] leading-normal font-medium text-center">
					{isSignup ? 'Sign Up' : 'Login'}
				</h1>
				<p className="text-grey-100 text-[0.875rem] leading-normal font-light text-center mb-10">
					{isSignup
						? 'Join our community today! Create an account to unlock exclusive features and personalized experiences.'
						: 'Welcome back! Please log in to access your account.'}
				</p>
				<form
					action=""
					className="flex flex-col justify-center items-center"
				>
					{isSignup && (
						<>
							<input
								className="mb-5 w-full p-4 border border-grey-800 bg-grey-1000 rounded-full text-grey-500 text-[1rem] leading-normal font-light"
								type="text"
								name=""
								id=""
								placeholder="Enter First Name"
							/>
							<input
								className="mb-5 w-full p-4 border border-grey-800 bg-grey-1000 rounded-full text-grey-500 text-[1rem] leading-normal font-light"
								type="text"
								name=""
								id=""
								placeholder="Enter Last Name"
							/>
						</>
					)}
					<input
						className="mb-5 w-full p-4 border border-grey-800 bg-grey-1000 rounded-full text-grey-500 text-[1rem] leading-normal font-light"
						type="email"
						name=""
						id=""
						placeholder="Enter your Email"
					/>
					<input
						className="mb-6 w-full p-4 border border-grey-800 bg-grey-1000 rounded-full text-grey-500 text-[1rem] leading-normal font-light"
						type="password"
						name=""
						id=""
						placeholder="Enter your Password"
					/>
					{!isSignup && (
						<a
							href="#"
							className="mb-6 text-white-100 text-[0.875rem] leading-[1.3125rem] font-normal underline"
						>
							Forgot Password?
						</a>
					)}
					<button className="w-full mb-6 py-[0.88rem] px-6 bg-green-800 rounded-full text-grey-800 text-[0.875rem] leading-[1.3125rem] font-normal">
						{isSignup ? 'Sign Up' : 'Login'}
					</button>
					<Link
						to={isSignup ? '/login' : '/signup'}
						onClick={() => scrollTo(0, 0)}
						className="w-full mb-6 py-[0.88rem] px-6 bg-grey-800 rounded-full text-white-100 border border-grey-700 text-[0.875rem] leading-[1.3125rem] font-normal text-center"
					>
						{isSignup ? 'Login' : 'Sign Up'}
					</Link>
				</form>
				<div className="mb-6 flex items-center gap-4">
					<div className="w-full h-px bg-grey-200"></div>
					<p className="text-grey-200 font-[0.875rem] leading-[1.3125rem] text-center whitespace-nowrap">
						Or Continue with
					</p>
					<div className="w-full h-px bg-grey-200"></div>
				</div>
				<div className="flex gap-5 justify-center items-center">
					<img
						src={googleIcon}
						alt="login with google"
					/>
					<img
						src={facebookIcon}
						alt="login with facebook"
					/>
					<img
						src={appleIcon}
						alt="login with apple"
					/>
				</div>
			</div>
		</div>
	);
}

export default AuthenticationForm;
