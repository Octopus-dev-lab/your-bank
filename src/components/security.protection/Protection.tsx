import protectionData from './protection.data';

function Protection() {
	return (
		<div className="mt-5 px-4 lg:mt-[7.5rem] lg:px-20 2xl:mt-40 2xl:px-40">
			<h2 className="mb-[0.62rem] text-white-100 text-[1.75rem] leading-[2.625rem] font-medium text-center after:content-['_Protect_You'] after:text-green-800 lg:text-start lg:text-[2.375rem] lg:leading-[3.5625rem] 2xl:mb-[0.88rem] 2xl:text-[3rem] 2xl:leading-[4.5rem]">
				How We
			</h2>
			<p className="mb-10 text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center lg:mb-[3.75rem] lg:text-start lg:text-[1rem] lg:leading-6 2xl:mb-20 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
				At YourBank, we prioritize the security and confidentiality of
				your financial information. Our state-of-the-art encryption
				technology and stringent data protection measures ensure your
				assets and transactions are safeguarded at all times
			</p>
			<div className="flex flex-col gap-5 lg:grid lg:grid-cols-2">
				{protectionData.map((data, index) => (
					<div
						key={index}
						className="p-6 relative border border-grey-800 rounded-[1.25rem] overflow-clip lg:p-10 2xl:p-[3.12rem]"
					>
						<div className="absolute top-0 left-0 z-10 w-full h-full bg-plywood opacity-30" />
						<div className="absolute top-0 left-0 z-20 w-full h-full bg-gradient-to-r from-green-800/[0.04] to-grey-900 from-[10%] to-[60%]"></div>
						<div className="relative z-30 mb-[1.12rem] flex items-center gap-[0.88rem] lg:mb-5 2xl:mb-6 2xl:gap-5">
							<img
								className="w-[3.75rem] lg:w-[4.25rem] 2xl:w-[5.38rem]"
								src={data.icon}
								alt={data.alt}
							/>
							<h3 className="text-white-100 text-[1.125rem] leading-[1.6875rem] font-normal lg:text-[1.25rem] lg:leading-[1.875rem] 2xl:text-[1.5rem] 2xl:leading-[2.25rem]">
								{data.title}
							</h3>
						</div>
						<p className="relative z-30 text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light lg:text-[1rem] lg:leading-[1.5rem] 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
							{data.content}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Protection;
