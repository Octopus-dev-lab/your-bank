import pressReleasesData from './pressReleases.data';

function PressReleasesSection() {
	return (
		<div className="mt-20 px-4 lg:mt-[7.5rem] lg:px-20 2xl:mt-40 2xl:px-40">
			<h2 className="mb-[0.62rem] text-green-800 text-[1.75rem] leading-[2.625rem] font-normal text-center lg:text-[2.375rem] lg:leading-[3.5625rem] lg:text-start 2xl:mb-[0.88rem] 2xl:text-[3rem] 2xl:leading-[4.5rem]">
				Press Releases
			</h2>
			<p className="mb-10 text-grey-200 text-[0.875rem] leading-[1.3125rem] font-normal text-center lg:text-start lg:text-[1rem] lg:leading-[1.5rem] 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
				Stay updated with the latest happenings and exciting
				developments at YourBank through our press releases.
			</p>
			<div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-5 2xl:gap-[1.88rem]">
				{pressReleasesData.map((release, index) => (
					<div
						key={index}
						className="p-5 border border-grey-800 rounded-t-[2.5rem] rounded-b-2xl bg-grey-900 lg:p-6 2xl:p-[1.88rem]"
					>
						<picture>
							<source
								media="(min-width: 1180px)"
								src={release.img.lg}
							/>
							<source
								media="(min-width: 430px)"
								src={release.img.md}
							/>
							<img
								src={release.img.sm}
								alt="press release"
								className="mb-[1.88rem] rounded-t-[1.875rem] rounded-b-[0.75rem] w-full lg:mb-10 2xl:mb-[3.19rem]"
							/>
						</picture>
						<div className="lg:px-6 2xl:px-[1.88rem]">
							<h3 className="mb-[0.62rem] text-white-100 text-[1.125rem] leading-[1.6875rem] font-normal lg:text-[1.25rem] lg:leading-[1.875rem] lg:mb-[0.88rem] 2xl:text-[1.5rem] 2xl:leading-[2.25rem]">
								{release.title}
							</h3>
							<div className="mb-6 flex gap-3">
								<p className="w-min py-[0.38rem] px-3 rounded-full bg-grey-1000 border border-grey-800 whitespace-nowrap text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light lg:px-[0.88rem] lg:text-[1rem] lg:leading-[1.5rem] 2xl:py-2 2xl:px-4 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
									Location: {release.location}
								</p>
								<p className="w-min py-[0.38rem] px-3 rounded-full bg-grey-1000 border border-grey-800 whitespace-nowrap text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light lg:px-[0.88rem] lg:text-[1rem] lg:leading-[1.5rem] 2xl:py-2 2xl:px-4 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
									Date: {release.date}
								</p>
							</div>
							<p className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light lg:text-[1rem] lg:leading-[1.5rem] 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
								{release.content}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default PressReleasesSection;
