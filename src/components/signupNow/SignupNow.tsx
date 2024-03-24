import bgTexture from '../../assets/home.signupnow/bg-texture.webp';
import dottedAbstractDesign from '../../assets/home.signupnow/dotted-abstract.svg';

function SignupNow() {
	return (
		<div className="p-4 mt-20">
			<div className="relative rounded-2xl">
				<div className="absolute w-full h-full -z-30 rounded-2xl bg-gradient-120 from-[#3A441F] to-grey-800 to-[20%] p-px">
					<div className="w-full h-full -z-20 rounded-2xl bg-grey-900"></div>
				</div>

				<img
					className="absolute top-0 left-0 w-1/2 h-auto"
					src={dottedAbstractDesign}
				/>
				<div className="relative p-px w-full h-full rounded-2xl">
					<img
						className="absolute w-[calc(100%-2px)] h-[calc(100%-2px)] opacity-80 -z-10 rounded-2xl"
						src={bgTexture}
					/>
					<div className="p-[30px] flex flex-col justify-center items-center rounded-2xl bg-gradient-to-l from-grey-900 from-45%">
						<h3 className="mb-[0.88rem] text-white-100 text-[1.5rem] leading-[2.25rem] text-center after:content-['_YourBank_today!'] after:text-green-800">
							Start yout financial journey with
						</h3>
						<p className="mb-6 text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center">
							Lorem ipsum dolor sit amet consectetur. Blandit odio
							semper risus pellentesque elit. Pellentesque eget ut
							imperdiet nulla penatibus. Nascetur viverra arcu sed
							amet cursus purus.
						</p>
						<button className="py-[0.88rem] px-6 bg-green-800 rounded-full text-grey-900 text-[0.875rem] leading-[1.3125rem] font-normal">
							Open Account
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SignupNow;
