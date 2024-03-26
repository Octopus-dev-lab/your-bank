import bgTexture from '../../assets/about.missionVision/bg-texture.webp';
import dottedAbstractDesign from '../../assets/about.missionVision/dotted-abstract.svg';
import missionVisionData from './missionVision.data';

function MissionVision() {
	return (
		<div className="mt-20 px-4">
			<h2 className="mb-[0.62rem] text-green-800 text-[1.75rem] leading-[2.625rem] font-normal text-center">
				Mission & Vision
			</h2>
			<p className="mb-[3.75rem] text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center">
				We envision being a leading force in the industry, driven by
				innovation, integrity, and inclusivity, creating a brighter
				financial future for individuals and businesses while
				maintaining a strong commitment to customer satisfaction and
				community development
			</p>
			<div className="flex flex-col gap-[3.18rem]">
				{missionVisionData.map((item, index) => (
					<div key={index}>
						<div className="relative mb-[1.88rem] border border-grey-800 border-b-green-800 rounded-t-[3.125rem] overflow-clip">
							<img
								className="absolute top-0 left-0 z-30 w-full bg-green-800/[0.03]"
								src={dottedAbstractDesign}
								alt=""
							/>

							<img
								className="absolute w-full h-full top-0 left-0 z-10"
								src={bgTexture}
								alt=""
							/>
							<div className="absolute w-full h-full top-0 left-0 z-20 bg-gradient-to-l from-grey-1000 to-grey-1000/0 from-[50%] to-[80%]"></div>
							<div className="mt-5 mx-5">
								<img
									className="relative top-full left-o z-40 rounded-t-[3.125rem]"
									src={item.img}
									alt={item.alt}
								/>
							</div>
						</div>
						<h3 className="text-white-100 text-[1.625rem] leading-[2.4375rem] font-semibold text-center">
							{item.title}
						</h3>
						<p className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center">
							{item.content}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default MissionVision;
