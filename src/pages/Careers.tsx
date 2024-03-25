import Benefits from '../components/careers.benefits/Benefits';
import Introduction from '../components/careers.introduction/Introduction';
import Values from '../components/careers.values/Values';

function Careers() {
	return (
		<div className="mt-[1.87rem]">
			<Introduction />
			<Values />
			<Benefits />
		</div>
	);
}

export default Careers;
