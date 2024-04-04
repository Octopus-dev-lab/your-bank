import bgTexture from '../../assets/about.missionVision/bg-texture.webp';
import dottedAbstractDesign from '../../assets/about.missionVision/dotted-abstract.svg';
import missionVisionData from './missionVision.data';

function MissionVision() {
	return (
		<div className="mt-20 px-4 lg:mt-[7.5rem] lg:px-20 2xl:mt-40 2xl:px-40">
			<h2 className="mb-[0.62rem] text-green-800 text-[1.75rem] leading-[2.625rem] font-normal text-center lg:text-start lg:text-[2.375rem] lg:leading-[3.5625rem] 2xl:mb-[0.88rem] 2xl:text-[3rem] 2xl:leading-[4.5rem]">
				Mission & Vision
			</h2>
			<p className="mb-[3.75rem] text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center lg:text-start lg:text-[1rem] lg:leading-6 2xl:mb-20 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
				We envision being a leading force in the industry, driven by
				innovation, integrity, and inclusivity, creating a brighter
				financial future for individuals and businesses while
				maintaining a strong commitment to customer satisfaction and
				community development
			</p>
			<div className="flex flex-col gap-[3.12rem]">
				{missionVisionData.map((item, index) => (
					<div
						key={index}
						className={`lg:flex lg:items-center ${index == 1 ? 'lg:flex-row-reverse lg:-mt-[5.25rem] 2xl:-mt-[6.25rem]' : ''}`}
					>
						<div className="relative mb-[1.88rem] border border-grey-800 border-b-green-800 rounded-t-[3.125rem] overflow-clip lg:w-[42.5%] lg:border-b-grey-800 2xl:w-[41.6%]">
							<img
								className="absolute top-0 left-0 z-30 w-full bg-green-800/[0.03]"
								src={dottedAbstractDesign}
							/>

							<img
								className="absolute w-full h-full top-0 left-0 z-10"
								src={bgTexture}
							/>
							<div className="absolute w-full h-full top-0 left-0 z-20 bg-gradient-to-l from-grey-1000 to-grey-1000/0 from-[50%] to-[80%]"></div>
							<div className="w-full pt-5 px-5 lg:pt-8 lg:px-8 min-[1440px]:px-[3.75rem] min-[1440px]:pt-[3.75rem]">
								<img
									className="relative top-full left-o z-40 w-full rounded-t-[3.125rem]"
									src={item.img}
									alt={item.alt}
								/>
							</div>
						</div>
						<div
							className={`lg:w-[57.5%] lg:flex lg:flex-col ${index == 1 ? 'lg:pr-10 lg:border-r' : 'lg:pl-10 lg:border-l'} lg:border-green-800/70 lg:gap-[0.62rem] 2xl:w-[58.4%] 2xl:border-green-800 2xl:gap-[0.88rem]`}
						>
							<h3 className="text-white-100 text-[1.625rem] leading-[2.4375rem] font-semibold text-center lg:text-start lg:text-[2rem] lg:leading-[3rem] 2xl:text-[2.375rem] 2xl:leading-[3.5625rem]">
								{item.title}
							</h3>
							<p className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center lg:text-start lg:text-[1rem] lg:leading-6 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
								{item.content}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default MissionVision;
