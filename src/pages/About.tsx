import Introduction from '../components/about.introduction/Introduction';
import MissionVision from '../components/about.missionVision/MissionVision';
import PressReleases from '../components/about.pressReleases/PressReleases';
function About() {
	return (
		<div className="mt-[1.88rem]">
			<Introduction />
			<MissionVision />
			<PressReleases />
		</div>
	);
}

export default About;
