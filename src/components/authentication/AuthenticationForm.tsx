import { Link } from 'react-router-dom';
import appleIcon from '../../assets/authentication/apple.svg';
import facebookIcon from '../../assets/authentication/facebook.svg';
import googleIcon from '../../assets/authentication/google.svg';
import dottedAbstractDesign from '../../assets/shared/dotted-abstract.svg';

function AuthenticationForm({ isSignup }: { isSignup: boolean }) {
	return (
		<div className="px-4 lg:px-40 2xl:px-72">
			<div className="relative p-[1.88rem] border border-grey-800 rounded-2xl bg-paper lg:flex lg:justify-center lg:items-center 2xl:max-w-[1326px] 2xl:mx-auto">
				<img
					className="absolute top-0 right-0 -scale-x-100 w-[10.4375rem] lg:w-[16rem] 2xl:w-[21.375rem]"
					src={dottedAbstractDesign}
				/>
				<div className="max-w-[398px] mx-auto lg:max-w-none lg:w-[62.4%] lg:flex lg:flex-col">
					<h1 className="mb-[0.62rem] text-green-800 text-[1.75rem] leading-normal font-medium text-center lg:mb-4 lg:text-[2.375rem] 2xl:mb-5 2xl:text-[3rem]">
						{isSignup ? 'Sign Up' : 'Login'}
					</h1>
					<p className="mb-10 text-grey-100 text-[0.875rem] leading-normal font-light text-center lg:mb-[3.75rem] lg:text-[1rem] 2xl:mb-20 2xl:text-[1.125rem]">
						{isSignup
							? 'Join our community today! Create an account to unlock exclusive features and personalized experiences.'
							: 'Welcome back! Please log in to access your account.'}
					</p>
					<form
						action=""
						className="flex flex-col justify-center items-center"
					>
						{isSignup && (
							<div className="w-full flex flex-col gap-5 mb-5 lg:flex-row lg:gap-6 lg:mb-[1.88rem] 2xl:gap-[1.88rem]">
								<input
									className="w-full p-4 border border-grey-800 bg-grey-1000 rounded-full text-grey-200 text-[1rem] leading-normal font-light placeholder:text-[1rem] placeholder:leading-normal placeholder:text-grey-500 lg:m-0 lg:p-5 2xl:px-6 2xl:text-[1.125rem] 2xl:leading-[1.6875rem] 2xl:placeholder:text-[1.125rem] 2xl:placeholder:leading-[1.6875rem]"
									type="text"
									name=""
									id=""
									placeholder="Enter First Name"
								/>
								<input
									className="w-full p-4 border border-grey-800 bg-grey-1000 rounded-full text-grey-200 text-[1rem] leading-normal font-light placeholder:text-grey-500 lg:m-0 lg:p-5 2xl:px-6 2xl:text-[1.125rem] 2xl:leading-[1.6875rem] 2xl:placeholder:text-[1.125rem] 2xl:placeholder:leading-[1.6875rem]"
									type="text"
									name=""
									id=""
									placeholder="Enter Last Name"
								/>
							</div>
						)}
						<div className="w-full flex flex-col gap-5 mb-6 lg:flex-row lg:gap-6 lg:mb-[1.88rem] 2xl:gap-[1.88rem] 2xl:mb-10">
							<input
								className="w-full p-4 border border-grey-800 bg-grey-1000 rounded-full text-grey-200 text-[1rem] leading-normal font-light placeholder:text-[1rem] placeholder:leading-normal placeholder:text-grey-500 lg:p-5 2xl:px-6 2xl:text-[1.125rem] 2xl:leading-[1.6875rem] 2xl:placeholder:text-[1.125rem] 2xl:placeholder:leading-[1.6875rem]"
								type="email"
								name=""
								id=""
								placeholder="Enter your Email"
							/>
							<input
								className="w-full p-4 border border-grey-800 bg-grey-1000 rounded-full text-grey-200 text-[1rem] leading-normal font-light 
								placeholder:text-[1rem] placeholder:leading-normal placeholder:text-grey-500 lg:p-5 2xl:px-6 2xl:text-[1.125rem] 2xl:leading-[1.6875rem] 2xl:placeholder:text-[1.125rem] 2xl:placeholder:leading-[1.6875rem]"
								type="password"
								name=""
								id=""
								placeholder="Enter your Password"
							/>
						</div>
						{!isSignup && (
							<a
								href="#"
								className="mb-6 text-white-100 text-[0.875rem] leading-[1.3125rem] font-normal underline lg:mb-[1.88rem] lg:text-[1rem] lg:leading-[1.5rem] 2xl:text-[1.125rem] 2xl:leading-[1.6875rem] 2xl:mb-10"
							>
								Forgot Password?
							</a>
						)}
						<button className="w-full mb-6 py-[0.88rem] px-6 bg-green-800 rounded-full text-grey-800 text-[0.875rem] leading-[1.3125rem] font-normal lg:max-w-[404px] 2xl:max-w-[518px] 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
							{isSignup ? 'Sign Up' : 'Login'}
						</button>
						<Link
							to={isSignup ? '/login' : '/signup'}
							onClick={() => scrollTo(0, 0)}
							className="w-full mb-6 py-[0.88rem] px-6 bg-grey-800 rounded-full text-white-100 border border-grey-700 text-[0.875rem] leading-[1.3125rem] font-normal text-center lg:max-w-[404px] 2xl:max-w-[518px] 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]"
						>
							{isSignup ? 'Login' : 'Sign Up'}
						</Link>
					</form>
					<div className="mb-6 flex items-center gap-4 lg:max-w-[404px] lg:w-full lg:self-center 2xl:mb-[1.88rem]">
						<div className="w-full h-px bg-grey-200"></div>
						<p className="text-grey-200 font-[0.875rem] leading-[1.3125rem] text-center whitespace-nowrap">
							Or Continue with
						</p>
						<div className="w-full h-px bg-grey-200"></div>
					</div>
					<div className="flex gap-5 justify-center items-center">
						<img
							className="w-[4.25rem] 2xl:w-[5.875rem]"
							src={googleIcon}
							alt="login with google"
						/>
						<img
							className="w-[4.25rem] 2xl:w-[5.875rem]"
							src={facebookIcon}
							alt="login with facebook"
						/>
						<img
							className="w-[4.25rem] 2xl:w-[5.875rem]"
							src={appleIcon}
							alt="login with apple"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AuthenticationForm;
