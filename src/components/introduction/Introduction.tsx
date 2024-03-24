import Chip from './Chip';

function Introduction() {
	return (
		<div className="px-4 flex flex-col justify-center items-center gap-2">
			<Chip />
			<h1 className="text-white-100 text-[1.75rem] leading-[2.625rem] text-center font-medium after:content-['_Financial_Journey'] after:text-green-800">
				Welcome to YourBank
				<br />
				Empowering Your
			</h1>
			<p className="text-white-500 text-[0.875rem] leading-[1.3125rem] font-light text-center">
				At YourBank, our mission is to provide comprehensive banking
				solutions that empower individuals and businesses to achieve
				their financial goals. We are committed to delivering
				personalized and innovative services that prioritize our
				customers' needs.
			</p>
			<button className="mt-6 py-[14px] px-6 bg-green-800 rounded-full text-grey-900 text-[0.875rem] leading-[1.3125rem] font-normal">
				Open account
			</button>
		</div>
	);
}

export default Introduction;
