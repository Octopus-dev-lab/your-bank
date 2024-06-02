import AboutSection from '../components/about/AboutSection';
import MissionSection from '../components/mission/MissionSection';
import PressReleasesSection from '../components/pressReleases/PressReleasesSection';
function About() {
	return (
		<div className="mt-[1.88rem] mb-20 sm:max-w-[640px] sm:mx-auto lg:max-w-[1400px] 2xl:max-w-[2000px]">
			<AboutSection />
			<MissionSection />
			<PressReleasesSection />
		</div>
	);
}

export default About;
