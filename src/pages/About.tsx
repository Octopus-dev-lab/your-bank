import Introduction from '../components/about.introduction/Introduction';
import MissionVision from '../components/about.missionVision/MissionVision';
import PressReleases from '../components/about.pressReleases/PressReleases';
function About() {
	return (
		<div className="mt-[1.88rem] mb-20 sm:max-w-[640px] sm:mx-auto lg:max-w-[1400px] 2xl:max-w-[2000px]">
			<Introduction />
			<MissionVision />
			<PressReleases />
		</div>
	);
}

export default About;
