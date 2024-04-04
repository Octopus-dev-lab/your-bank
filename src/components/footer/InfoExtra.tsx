import { social } from './footer.data';

function InfoExtra() {
	return (
		<div className="relative w-full flex flex-col justify-center items-center lg:flex-row">
			<div className="absolute -top-5 z-10 flex gap-2 lg:hidden">
				{social.map((social, index) => {
					return (
						<a
							key={index}
							className="p-3 bg-green-800 rounded-full"
							href={social.url}
						>
							<img
								className="w-5"
								src={social.logo}
								alt={social.alt}
							/>
						</a>
					);
				})}
			</div>
			<div className="pt-[3.12rem] pb-[1.88rem] w-full flex flex-col justify-center items-center gap-5 border border-grey-800 rounded-lg bg-grey-1000 lg:max-w-[1240px] lg:px-6 lg:py-3 lg:w-full lg:flex lg:justify-between lg:items-center lg:flex-row lg:rounded-full 2xl:px-[1.88rem] 2xl:py-4 2xl:max-w-[1680px] 2xl:mx-auto">
				<div className="hidden -top-5 z-10 lg:flex gap-2 2xl:gap-[0.88rem]">
					{social.map((social, index) => {
						return (
							<a
								key={index}
								className="p-3 2xl:p-[0.88rem] bg-green-800 rounded-full"
								href={social.url}
							>
								<img
									className="w-6"
									src={social.logo}
									alt={social.alt}
								/>
							</a>
						);
					})}
				</div>
				<p className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center whitespace-nowrap 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
					YourBank All Rights Reserved
				</p>
				<div className="w-full flex justify-center items-center gap-2 lg:w-min">
					<a
						className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center whitespace-nowrap 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]"
						href=""
					>
						Privacy Policy
					</a>
					<div className="w-px h-[1.3125rem] bg-grey-200"></div>
					<a
						className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center whitespace-nowrap 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]"
						href=""
					>
						Terms of Service
					</a>
				</div>

				<div className="flex flex-col">
					<a
						className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center whitespace-nowrap 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]"
						href="https://produce-ui.com/"
					>
						Designed by Produce-ui
					</a>
					<a
						className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center whitespace-nowrap 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]"
						href="https://octopuslab.io/"
					>
						Developed by Jurgen - Octopus Lab
					</a>
				</div>
			</div>
		</div>
	);
}

export default InfoExtra;
