import pressReleasesData from './pressReleases.data';

function PressReleases() {
	return (
		<div className="mt-20 px-4">
			<h2 className="mb-[0.62rem] text-green-800 text-[1.75rem] leading-[2.625rem] font-normal text-center">
				Press Releases
			</h2>
			<p className="mb-10 text-grey-200 text-[0.875rem] leading-[1.3125rem] font-normal text-center">
				Stay updated with the latest happenings and exciting
				developments at YourBank through our press releases.
			</p>
			<div className="flex flex-col gap-6">
				{pressReleasesData.map((release, index) => (
					<div
						key={index}
						className="p-5 border border-grey-800 rounded-t-[2.5rem] rounded-b-2xl bg-grey-900"
					>
						<img
							src={release.img}
							alt="press release"
							className="mb-[1.88rem] rounded-t-[1.875rem] rounded-b-[0.75rem] w-full"
						/>
						<h3 className="mb-[0.62rem] text-white-100 text-[1.125rem] leading-[1.6875rem] font-normal">
							{release.title}
						</h3>
						<div className="mb-6 flex gap-3">
							<p className="w-min py-[0.38rem] px-3 rounded-full bg-grey-1000 border border-grey-800 whitespace-nowrap text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light">
								Location: {release.location}
							</p>
							<p className="w-min py-[0.38rem] px-3 rounded-full bg-grey-1000 border border-grey-800 whitespace-nowrap text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light">
								Date: {release.date}
							</p>
						</div>
						<p className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light">
							{release.content}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default PressReleases;
