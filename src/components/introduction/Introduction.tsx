import { Link } from 'react-router-dom';
import Chip from './Chip';

function Introduction() {
	return (
		<div className="px-4 flex flex-col justify-center items-center gap-2 lg:w-1/2 lg:items-start">
			<Chip />
			<h1 className="text-white-100 text-[1.75rem] leading-[2.625rem] text-center font-medium after:content-['_Financial_Journey'] after:text-green-800 lg:text-[2.375rem] lg:leading-[3.5625rem] lg:text-start 2xl:text-[3rem] 2xl:leading-[4.5rem]">
				Welcome to YourBank
				<br />
				Empowering Your
			</h1>
			<p className="text-white-500 text-[0.875rem] leading-[1.3125rem] font-light text-center lg:text-[1rem] lg:leading-6 lg:text-start 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
				At YourBank, our mission is to provide comprehensive banking
				solutions that empower individuals and businesses to achieve
				their financial goals. We are committed to delivering
				personalized and innovative services that prioritize our
				customers' needs.
			</p>
			<Link
				to={'/your-bank/signup'}
				className="mt-6 py-[0.88rem] px-6 bg-green-800 rounded-full text-grey-900 text-[0.875rem] leading-[1.3125rem] font-normal 2xl:py-[1.12rem] 2xl:px-[1.88rem] 2xl:text-[1.125rem] 2xl:leading-[1.6875rem] hover:scale-105 transition-transform duration-200 ease-in-out"
			>
				Open account
			</Link>
		</div>
	);
}

export default Introduction;
