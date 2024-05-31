import { Link } from 'react-router-dom';
import RadialAbstract from '../../assets/svg/radial-abstract.svg?react';

function SignupNow() {
	return (
		<div className="p-4 mt-20 lg:mt-20 lg:px-20 2xl:px-40 2xl:mt-40">
			<div className="relative rounded-2xl overflow-clip">
				<div className="absolute w-full h-full -z-30 rounded-2xl bg-gradient-120 from-[#3A441F] to-grey-800 to-[20%] p-px">
					<div className="w-full h-full -z-20 rounded-2xl bg-grey-900"></div>
				</div>
				<RadialAbstract className="absolute top-0 -left-1 w-[9.4375rem] h-[8.9375rem] lg:-left-2 lg:w-[12.625rem] lg:h-48 2xl:w-[18.625rem] 2xl:h-[17.6875rem]" />
				<div className="relative p-px w-full h-full rounded-2xl">
					<div className="absolute w-[calc(100%-2px)] h-[calc(100%-2px)] opacity-80 -z-10 rounded-2xl bg-plywood" />
					<div className="p-[30px] flex flex-col justify-between items-center rounded-2xl bg-gradient-to-l from-grey-900 from-45% lg:flex-row lg:gap-36 lg:p-[3.75rem] 2xl:p-20">
						<div className="lg:flex lg:flex-col">
							<h3 className="mb-[0.88rem] text-white-100 text-[1.5rem] leading-[2.25rem] text-center after:content-['_YourBank_today!'] after:text-green-800 lg:text-[1.875rem] lg:leading-[2.8125rem] lg:text-start 2xl:text-[2.5rem] 2xl:leading-[3.75rem]">
								Start yout financial journey with
							</h3>
							<p className="mb-6 text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center lg:text-[1rem] lg:leading-6 lg:text-start 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
								Lorem ipsum dolor sit amet consectetur. Blandit
								odio semper risus pellentesque elit.
								Pellentesque eget ut imperdiet nulla penatibus.
								Nascetur viverra arcu sed amet cursus purus.
							</p>
						</div>
						<Link
							to={'/your-bank/signup'}
							onClick={() => window.scrollTo(0, 0)}
							className="py-[0.88rem] px-6 bg-green-800 rounded-full text-grey-900 text-[0.875rem] leading-[1.3125rem] font-normal whitespace-nowrap 2xl:text-[1.125rem] 2xl:leading-[1.6875rem] 2xl:py-[1.12rem] 2xl:px-[1.88rem]"
						>
							Open Account
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SignupNow;
